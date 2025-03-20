
import React from 'react';

const Header = () => {
  return (
    <header className="py-8 w-full text-center animate-slide-down">
      <div className="mb-1">
        <span className="chip mb-2">Content Generator</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-2">
        Craft Perfect Content
      </h1>
      <p className="text-muted-foreground max-w-md mx-auto text-balance">
        Generate tailored content for your brand with just a few clicks.
      </p>
    </header>
  );
};

export default Header;
