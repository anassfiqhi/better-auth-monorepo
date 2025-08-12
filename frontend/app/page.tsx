import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { PhotoRail } from '@/components/PhotoRail';
import { ArticlesList } from '@/components/ArticlesList';
import { NewsletterForm } from '@/components/NewsletterForm';
import { WorkTimeline } from '@/components/WorkTimeline';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <PhotoRail />
      <ArticlesList />
      <WorkTimeline />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
