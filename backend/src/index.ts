import { Hono } from "hono";
import { auth } from "./lib/auth";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
 
const app = new Hono();
 
app.use(
	"*", // Enable CORS for all routes
	cors({
		origin: ["http://localhost:3000", "http://localhost:3001"], // Allow both ports
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);
 
// Handle all auth routes
app.on(["POST", "GET"], "/api/auth/*", (c) => {
	return auth.handler(c.req.raw);
});

// Registration endpoint for first user
app.post("/api/register", async (c) => {
	try {
		const body = await c.req.json();
		const { email, password, name } = body;

		if (!email || !password || !name) {
			return c.json({ 
				error: "Missing required fields: email, password, and name are required" 
			}, 400);
		}

		// Register the user (better-auth will handle duplicates)
		const result = await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
				callbackURL: "http://localhost:3000/auth/callback",
			},
		});

		return c.json({ 
			success: true, 
			message: "User registered successfully",
			user: result.user 
		});

	} catch (error) {
		console.error("Registration error:", error);
		return c.json({ 
			error: "Registration failed", 
			details: error instanceof Error ? error.message : "Unknown error" 
		}, 500);
	}
});

// Health check endpoint
app.get("/health", (c) => {
	return c.json({ status: "OK", timestamp: new Date().toISOString() });
});
 
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.info(`${JSON.stringify(info)}`)
  console.log(`Server is running on http://localhost:${info.port}`)
})