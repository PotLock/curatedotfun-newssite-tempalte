# Customization Guide

## 1. Site Configuration

### Basic Site Information
Create a new file `src/config/site.ts` with the following structure:

```typescript
export const siteConfig = {
  name: "NEWSSITE", // Your site name
  description: "Your site description", // Main site description
  logo: "/path/to/your/logo.png", // Path to your logo
  favicon: "/path/to/your/favicon.ico", // Path to your favicon
  metaImage: "/path/to/your/meta-image.png", // Social media preview image
  telegram: "https://t.me/YOUR_TELEGRAM", // Your Telegram channel
  twitter: "https://twitter.com/YOUR_TWITTER", // Your Twitter handle
  apiEndpoint: "https://YOUR-API-ENDPOINT.up.railway.app/api/items", // Your API endpoint
  topic: "Your Topic", // Main topic of your news site
  hashtag: "#YOURHASHTAG", // Hashtag for submissions
}
```

## 2. Required Changes

### A. Logo and Branding
1. Replace the logo in `src/components/Header.tsx`:
   - Update the logo path in the `img` tag
   - Update the alt text

2. Update favicon and meta images:
   - Replace favicon in `public/favicon.ico`
   - Update meta image in `public/meta.png`

### B. Content and Descriptions
1. Update `src/pages/Index.tsx`:
   - Change the main heading text
   - Update the site description

2. Update `src/pages/Learn.tsx`:
   - Replace example resources with your actual resources
   - Update tags and categories
   - Modify the page title and description

3. Update `src/components/Footer.tsx`:
   - Update the site description
   - Update social media links
   - Modify footer content

### C. API Configuration
1. Update `src/services/api.ts`:
   - Replace the API endpoint URL with your own

### D. SEO and Meta Tags
1. Update `index.html`:
   - Modify title tag
   - Update meta descriptions
   - Add relevant meta tags
   - Update OpenGraph tags

## 3. Recommended Data Structure

Create a new file `src/data/resources.ts`:

```typescript
export const resources = [
  {
    title: "Resource Title",
    description: "Resource description",
    link: "https://your-resource-link.com",
    tags: ["tag1", "tag2"]
  },
  // Add more resources as needed
];

export const categories = [
  {
    name: "Category 1",
    description: "Category description",
    resources: ["resource1", "resource2"]
  },
  // Add more categories as needed
];

export const tags = [
  "tag1",
  "tag2",
  "tag3"
  // Add more tags as needed
];
```

## 4. Best Practices

1. **SEO Optimization**:
   - Use descriptive meta tags
   - Include relevant keywords
   - Ensure proper heading hierarchy
   - Add alt text to images

2. **Content Organization**:
   - Keep resources up to date
   - Use consistent tagging
   - Maintain clear categories
   - Regular content updates

3. **Performance**:
   - Optimize images
   - Use proper caching
   - Minimize JavaScript
   - Implement lazy loading

4. **Accessibility**:
   - Use semantic HTML
   - Ensure proper contrast
   - Add ARIA labels
   - Test with screen readers

## 5. Deployment

1. **Environment Setup**:
   - Set up your API endpoint
   - Configure environment variables
   - Set up proper CORS settings

2. **Hosting**:
   - Choose a reliable hosting provider
   - Set up SSL certificate
   - Configure proper caching
   - Set up CDN if needed

## 6. Maintenance

1. **Regular Updates**:
   - Update content regularly
   - Monitor API performance
   - Check for broken links
   - Update dependencies

2. **Monitoring**:
   - Set up analytics
   - Monitor site performance
   - Track user engagement
   - Monitor API uptime 