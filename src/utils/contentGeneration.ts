
import { ContentType } from '@/components/ContentSelector';
import { toast } from 'sonner';

// Mock AI generation - in a real app, this would call an AI service
export const generateContent = async (
  guidelines: string, 
  contentType: ContentType, 
  topic: string
): Promise<string> => {
  // Show loading indicator
  const toastId = toast.loading('Generating your content...');
  
  try {
    // Artificial delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Content templates based on type
    const templates: Record<ContentType, string> = {
      social: `✨ ${topic} is transforming how we think about everyday experiences. Discover how it can enhance your daily routine! #${topic.split(' ')[0]} #Innovation`,
      email: `Subject: Discover the Power of ${topic}\n\nHello there,\n\nWe're excited to share how ${topic} can revolutionize your approach. Our team has been working on innovative solutions that address the key challenges in this space.`,
      blog: `# Exploring the Impact of ${topic}\n\nIn today's rapidly evolving landscape, ${topic} stands out as a transformative force. This article delves into why it matters and how you can leverage its potential for substantial growth.`
    };
    
    // Generate content based on the template and guidelines
    let content = templates[contentType];
    
    // Add a bit of "AI personalization" based on guidelines
    if (guidelines.toLowerCase().includes('professional')) {
      content = content.replace(/excited|revolutionize/g, 'pleased to inform');
    }
    
    if (guidelines.toLowerCase().includes('casual')) {
      content = content.replace(/transformative force|innovative solutions/g, 'game-changer');
    }
    
    // Close the loading toast and show success
    toast.dismiss(toastId);
    toast.success('Content generated successfully!');
    
    return content;
  } catch (error) {
    // Handle errors
    toast.dismiss(toastId);
    toast.error('Failed to generate content. Please try again.');
    console.error('Content generation error:', error);
    return 'Error generating content. Please try again.';
  }
};
