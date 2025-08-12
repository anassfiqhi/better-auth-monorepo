# Avatar Image Setup Instructions

## Download Your LinkedIn Profile Photo

To update your portfolio with your LinkedIn profile photo, follow these steps:

### Option 1: Manual Download
1. Right-click on your LinkedIn profile photo
2. Select "Save image as..."
3. Save it as `avatar.jpg` in the `frontend/public/` folder
4. Make sure the image is in JPG format

### Option 2: Direct URL Download
1. Copy this URL: `https://media.licdn.com/dms/image/v2/D4E03AQFHcmRDnwj1vg/profile-displayphoto-shrink_800_800/B4EZadKKdsGYAc-/0/1746393410783?e=1758153600&v=beta&t=C2jQU9dAr2KDeceJf-Dk1YQF2zkfQmJT4oTSiGASi3Q`
2. Open it in a new browser tab
3. Right-click and save as `avatar.jpg`
4. Place it in the `frontend/public/` folder

### Option 3: Using curl/wget (Command Line)
```bash
# Navigate to the public folder
cd frontend/public

# Download the image
curl -o avatar.jpg "https://media.licdn.com/dms/image/v2/D4E03AQFHcmRDnwj1vg/profile-displayphoto-shrink_800_800/B4EZadKKdsGYAc-/0/1746393410783?e=1758153600&v=beta&t=C2jQU9dAr2KDeceJf-Dk1YQF2zkfQmJT4oTSiGASi3Q"
```

## Image Requirements
- **Format**: JPG/JPEG
- **Filename**: `avatar.jpg`
- **Location**: `frontend/public/avatar.jpg`
- **Size**: The LinkedIn image is 800x800 pixels, which is perfect for your portfolio

## Verification
After placing the image:
1. The avatar should appear in your Hero section
2. It will be displayed as a circular image with a border
3. The image will be optimized by Next.js Image component

## Notes
- The LinkedIn URL is temporary and may expire
- If you have issues accessing the LinkedIn image, you can also:
  - Take a screenshot of your LinkedIn profile
  - Use any professional headshot you have
  - The image will be automatically resized and optimized by Next.js
