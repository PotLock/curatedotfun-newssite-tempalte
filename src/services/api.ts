import { NewsItem } from '@/types';
import sampleData from './sampleData';
import { defaultNewsData } from '@/utils/defaultData';
import { siteConfig } from '@/config/site';

export async function fetchNews(): Promise<NewsItem[]> {
  try {
    const response = await fetch(siteConfig.apiEndpoint);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content || item.description || '',
      link: item.link,
      pubDate: item.pubDate,
      feedId: siteConfig.name,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

// Add a helper function for date formatting
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};
