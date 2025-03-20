
import React from 'react';
import CopyButton from './CopyButton';
import CountTracker from './CountTracker';
import { ContentType } from './ContentSelector';

interface ContentDisplayProps {
  content: string;
  contentType: ContentType;
}

const ContentDisplay = ({ content, contentType }: ContentDisplayProps) => {
  const contentTypeLabels = {
    social: 'Social Post',
    email: 'Email Snippet',
    blog: 'Blog Intro'
  };

  return (
    <div className="rounded-xl overflow-hidden border glassmorphism p-6 space-y-4 animate-slide-up">
      <div className="flex justify-between items-center">
        <div>
          <span className="chip">{contentTypeLabels[contentType]}</span>
        </div>
        <CopyButton text={content} />
      </div>
      
      <div className="min-h-[150px] whitespace-pre-wrap text-balance">
        {content}
      </div>
      
      <div className="pt-2 border-t">
        <CountTracker text={content} />
      </div>
    </div>
  );
};

export default ContentDisplay;
