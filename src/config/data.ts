import { siteConfig } from './site';

export const dataConfig = {
  // Resources page configuration
  resources: {
    title: `${siteConfig.name} Resources`,
    description: `Learn more about ${siteConfig.topic} with our curated resources.`,
    searchPlaceholder: "Search resources...",
    items: [
      {
        title: "Getting Started",
        description: "Learn the basics of our platform and how to get started.",
        link: "https://docs.example.com/getting-started",
        tags: ["beginner", "tutorial"]
      },
      {
        title: "Advanced Topics",
        description: "Dive deeper into advanced concepts and features.",
        link: "https://docs.example.com/advanced",
        tags: ["advanced", "features"]
      }
    ],
    tags: ["beginner", "tutorial", "advanced", "features"]
  },

  // News page configuration
  news: {
    title: `${siteConfig.topic} News`,
    description: `Stay updated with the latest ${siteConfig.topic} news and updates.`,
    searchPlaceholder: "Search news...",
    submissionText: `!submit @${siteConfig.twitter.split('/').pop()} ${siteConfig.hashtag}`,
    tweetPlaceholder: "https://x.com/username/status/123456789"
  },

  // Home page configuration
  home: {
    title: `${siteConfig.topic} News`,
    description: `Your source for the latest ${siteConfig.topic} news and updates.`,
    heroText: `Welcome to ${siteConfig.name}, your trusted source for ${siteConfig.topic} news.`
  }
}; 