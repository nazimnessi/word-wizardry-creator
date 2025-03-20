
import React, { useState } from 'react';
import Header from '@/components/Header';
import ContentForm from '@/components/ContentForm';
import ContentDisplay from '@/components/ContentDisplay';
import { ContentType } from '@/components/ContentSelector';
import { generateContent } from '@/utils/contentGeneration';

const Index = () => {
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState<ContentType>('social');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (
    guidelines: string,
    type: ContentType,
    topic: string
  ) => {
    setIsLoading(true);
    setContentType(type);
    
    try {
      const generatedContent = await generateContent(guidelines, type, topic);
      setContent(generatedContent);
    } catch (error) {
      console.error('Error in content generation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        
        <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ContentForm 
              onGenerate={handleGenerate}
              isLoading={isLoading}
            />
          </div>
          
          <div className="flex items-center">
            {content ? (
              <ContentDisplay 
                content={content} 
                contentType={contentType}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center p-8 rounded-xl border glassmorphism animate-pulse-subtle">
                <p className="text-muted-foreground text-center">
                  Your generated content will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
