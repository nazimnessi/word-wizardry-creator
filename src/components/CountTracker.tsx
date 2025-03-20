
import React from 'react';

interface CountTrackerProps {
  text: string;
}

const CountTracker = ({ text }: CountTrackerProps) => {
  const charCount = text.length;
  const wordCount = text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const lineCount = text ? text.split('\n').filter(Boolean).length : 0;

  return (
    <div className="text-xs text-muted-foreground flex flex-wrap gap-3">
      <span>{charCount} characters</span>
      <span>{wordCount} words</span>
      <span>{lineCount} lines</span>
    </div>
  );
};

export default CountTracker;
