import { Link } from 'react-router-dom';
import { Send, Upload, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { SubmitNewsForm } from './SubmitNewsForm';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <img
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            className="h-8 w-auto"
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {siteConfig.footer.description}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <Send className="h-5 w-5" />
          </a>
          <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Submit News
              </Button>
            </DialogTrigger>
            <DialogContent>
              <SubmitNewsForm onClose={() => setIsSubmitDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4">
            {siteConfig.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
