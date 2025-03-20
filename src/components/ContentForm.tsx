
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ContentSelector, { ContentType } from './ContentSelector';
import { Sparkles } from 'lucide-react';

interface ContentFormProps {
  onGenerate: (guidelines: string, contentType: ContentType, topic: string) => void;
  isLoading: boolean;
}

const ContentForm = ({ onGenerate, isLoading }: ContentFormProps) => {
  const [guidelines, setGuidelines] = useState('');
  const [contentType, setContentType] = useState<ContentType>('social');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guidelines && topic) {
      onGenerate(guidelines, contentType, topic);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <Label htmlFor="guidelines" className="text-sm font-medium">
          Brand Guidelines / Voice
        </Label>
        <Textarea
          id="guidelines"
          value={guidelines}
          onChange={(e) => setGuidelines(e.target.value)}
          placeholder="Describe your brand voice and any specific guidelines (e.g., friendly, professional, casual)"
          className="min-h-[100px] resize-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <ContentSelector 
        selectedType={contentType} 
        onChange={setContentType} 
      />

      <div className="space-y-3">
        <Label htmlFor="topic" className="text-sm font-medium">
          Topic / Keywords
        </Label>
        <Input
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your topic or keywords"
          className="focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full py-6 font-medium group"
        disabled={!guidelines || !topic || isLoading}
      >
        <Sparkles className="mr-2 h-4 w-4 group-hover:animate-float" />
        {isLoading ? 'Generating...' : 'Generate Content'}
      </Button>
    </form>
  );
};

export default ContentForm;
