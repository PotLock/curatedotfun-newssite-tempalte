export const siteConfig = {
  // Basic site information
  name: "YOUR_SITE_NAME",
  description: "Your site description",
  logo: {
    image: "/path/to/your/logo.png",
    text: "YOUR_SITE_NAME",
    showText: true,
  },
  favicon: "/path/to/your/favicon.ico",
  metaImage: "/path/to/your/meta-image.png",
  
  // Social media links
  telegram: "https://t.me/YOUR_TELEGRAM",
  twitter: "https://twitter.com/YOUR_TWITTER",
  
  // API configuration
  apiEndpoint: "https://YOUR-API-ENDPOINT.up.railway.app/api/items",
  
  // Content configuration
  topic: "Your Topic",
  hashtag: "#YOURHASHTAG",
  
  // SEO configuration
  meta: {
    title: "Your Site Title",
    description: "Your site meta description",
    keywords: "keyword1, keyword2, keyword3",
    author: "Your Name",
    ogTitle: "Your OpenGraph Title",
    ogDescription: "Your OpenGraph Description",
    ogImage: "/path/to/your/og-image.png",
    twitterCard: "summary_large_image",
    twitterSite: "@YOUR_TWITTER",
  },
  
  // Footer configuration
  footer: {
    description: "Your footer description",
    copyright: "© 2024 Your Site Name. All rights reserved.",
    links: [
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
    ],
  },
  
  // Submission form configuration
  submission: {
    title: "Submit Your News",
    description: "Share your news with our community",
    successMessage: "Thank you for your submission!",
    errorMessage: "Something went wrong. Please try again.",
    communityTweet: "Join our community on Twitter @YOUR_TWITTER",
  },
}; 