import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Book, ExternalLink, Tag as TagIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface LearnResource {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const initialResources: LearnResource[] = [
  {
    title: "Example Resources changehere",
    description: "Changehere description.",
    link: "https://changehere.com/",
    tags: ["changeheretag1", "changeheretag2"]
  },
  {
    title: "Example Resources changehere 1",
    description: "Changehere description 2.",
    link: "https://changehere.com/",
    tags: ["changeheretag1", "changeheretag3"]
  }
];

const allTags = ["changeheretag1", "changeheretag2", "changeheretag3"];

export default function Learn() {
  const [resources, setResources] = useState<LearnResource[]>(initialResources);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get('tags') ? searchParams.get('tags')!.split(',') : []
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));
    setSearchParams(params, { replace: true });

    const filtered = initialResources.filter(resource => {
      const matchesSearch = searchTerm.trim() === '' || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => resource.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });

    setResources(filtered);
  }, [searchTerm, selectedTags, setSearchParams]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const handleTagClick = (tag: string, event: React.MouseEvent) => {
    event.preventDefault();
    toggleTag(tag);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setSearchParams({});
  };

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'basics': return 'bg-blue-500 hover:bg-blue-600';
      case 'laws': return 'bg-purple-500 hover:bg-purple-600';
      case 'analytics': return 'bg-green-500 hover:bg-green-600';
      case 'reports': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'news': return 'bg-red-500 hover:bg-red-600';
      case 'data': return 'bg-indigo-500 hover:bg-indigo-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow mt-24">
        <div className="container-narrow py-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Changehere Resources</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Changehere description of resources.
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Book className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium flex items-center">
                <TagIcon size={16} className="mr-1" /> 
                Filter by:
              </span>
              
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  className={`cursor-pointer capitalize ${
                    selectedTags.includes(tag) 
                      ? getTagColor(tag) + ' text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              
              {(searchTerm || selectedTags.length > 0) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="ml-2"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>

          {resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block card-hover"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between text-xl">
                        <span>{resource.title}</span>
                        <ExternalLink size={18} className="text-gray-500 flex-shrink-0" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-700">
                        {resource.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 pt-0">
                      {resource.tags.map(tag => (
                        <Badge
                          key={tag}
                          className={`capitalize ${getTagColor(tag)} text-white`}
                          onClick={(e) => handleTagClick(tag, e)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <Button onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
