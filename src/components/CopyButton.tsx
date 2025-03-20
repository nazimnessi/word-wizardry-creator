
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy text');
    }
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleCopy}
      className="transition-all duration-300"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-1" /> Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-1" /> Copy
        </>
      )}
    </Button>
  );
};

export default CopyButton;
