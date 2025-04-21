import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import NewsFeed from '@/components/NewsFeed';
import { siteConfig } from '@/config/site';

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Mark page as loaded with a slight delay for smoother animations
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32 pb-12">
        <div className="container-narrow">
          <section className={`mb-16 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-brand">{siteConfig.name}</span> News
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {siteConfig.description}
            </p>
          </section>
          
          <section className={`transition-opacity duration-700 delay-100 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <NewsFeed />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
