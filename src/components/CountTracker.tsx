
import React from 'react';

interface CountTrackerProps {
  text: string;
}

const CountTracker = ({ text }: CountTrackerProps) => {
  const charCount = text.length;
  const wordCount = text ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="text-xs text-muted-foreground flex space-x-3">
      <span>{charCount} characters</span>
      <span>{wordCount} words</span>
    </div>
  );
};

export default CountTracker;
