import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Send, Upload, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { SubmitNewsForm } from './SubmitNewsForm';
import { siteConfig } from '@/config/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img 
              src={siteConfig.logo.image} 
              alt={`${siteConfig.name} logo`} 
              className="h-10 md:h-12" 
            />
            {siteConfig.logo.showText && (
              <span className="font-heading text-xl font-bold text-foreground">
                {siteConfig.logo.text}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/learn" 
            className="text-black hover:text-brand transition-colors flex items-center gap-1" 
          >
            <BookOpen className="h-5 w-5" />
            <span>Learn</span>
          </Link>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-brand transition-colors"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
          <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Submit News
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-0">
              <SubmitNewsForm onClose={() => setIsSubmitDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in-up">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/learn" 
              className="flex items-center text-black font-medium hover:text-brand transition-colors px-4 py-2 gap-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-black font-medium hover:text-brand transition-colors px-4 py-2 gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Send className="h-5 w-5" />
              <span>Telegram</span>
            </a>
            <div className="px-4 py-2">
              <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
                <DialogTrigger asChild>
                  <button 
                    className="w-full flex justify-center items-center px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Upload className="h-4 w-4" />
                    Submit News
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0">
                  <SubmitNewsForm onClose={() => setIsSubmitDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
