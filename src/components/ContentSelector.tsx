
import React from 'react';
import { Label } from '@/components/ui/label';

export type ContentType = 'social' | 'email' | 'blog';

interface ContentSelectorProps {
  selectedType: ContentType;
  onChange: (type: ContentType) => void;
}

const ContentSelector = ({ selectedType, onChange }: ContentSelectorProps) => {
  const contentTypes = [
    { id: 'social', label: 'Social Posts' },
    { id: 'email', label: 'Email Snippets' },
    { id: 'blog', label: 'Blog Intros' },
  ] as const;

  return (
    <div className="space-y-3 mb-6">
      <Label className="text-sm font-medium">Content Type</Label>
      <div className="flex flex-wrap gap-3">
        {contentTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onChange(type.id)}
            className={`
              px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out
              ${selectedType === type.id 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}
            `}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentSelector;
