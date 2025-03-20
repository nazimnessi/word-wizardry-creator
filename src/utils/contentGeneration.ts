import { ContentType } from '@/components/ContentSelector';
import { toast } from 'sonner';

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
    
    // Extract key attributes from guidelines
    const tone = extractTone(guidelines);
    const style = extractStyle(guidelines);
    
    // Generate better content based on the type, topic, and guidelines
    let content = '';
    
    switch(contentType) {
      case 'social':
        content = generateSocialPost(topic, tone, style);
        break;
      case 'email':
        content = generateEmailContent(topic, tone, style);
        break;
      case 'blog':
        content = generateBlogIntro(topic, tone, style);
        break;
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

// Helper functions for content generation
const extractTone = (guidelines: string): 'professional' | 'casual' | 'enthusiastic' | 'formal' | 'friendly' | 'negative' | 'pleasing' | 'neutral' => {
  const lowerGuidelines = guidelines.toLowerCase();
  
  if (lowerGuidelines.includes('professional') || lowerGuidelines.includes('business')) {
    return 'professional';
  } else if (lowerGuidelines.includes('casual') || lowerGuidelines.includes('relaxed')) {
    return 'casual';
  } else if (lowerGuidelines.includes('enthusiastic') || lowerGuidelines.includes('excited')) {
    return 'enthusiastic';
  } else if (lowerGuidelines.includes('formal') || lowerGuidelines.includes('serious')) {
    return 'formal';
  } else if (lowerGuidelines.includes('negative') || lowerGuidelines.includes('critical') || lowerGuidelines.includes('pessimistic')) {
    return 'negative';
  } else if (lowerGuidelines.includes('pleasing') || lowerGuidelines.includes('pleasant') || lowerGuidelines.includes('agreeable')) {
    return 'pleasing';
  } else if (lowerGuidelines.includes('neutral') || lowerGuidelines.includes('balanced') || lowerGuidelines.includes('objective')) {
    return 'neutral';
  } else {
    return 'friendly'; // Default tone
  }
};

const extractStyle = (guidelines: string): 'informative' | 'persuasive' | 'storytelling' | 'direct' => {
  const lowerGuidelines = guidelines.toLowerCase();
  
  if (lowerGuidelines.includes('inform') || lowerGuidelines.includes('educational')) {
    return 'informative';
  } else if (lowerGuidelines.includes('persuasive') || lowerGuidelines.includes('convincing')) {
    return 'persuasive';
  } else if (lowerGuidelines.includes('story') || lowerGuidelines.includes('narrative')) {
    return 'storytelling';
  } else {
    return 'direct'; // Default style
  }
};

const generateSocialPost = (topic: string, tone: string, style: string): string => {
  const hashtags = generateHashtags(topic);
  
  switch(tone) {
    case 'professional':
      return `We're excited to share our latest insights on ${topic}. Our research indicates significant opportunities for growth in this area. ${hashtags}`;
    
    case 'casual':
      return `Hey everyone! Just wanted to drop some thoughts about ${topic}. It's been a game-changer for us lately! What do you think? ${hashtags}`;
    
    case 'enthusiastic':
      return `🚀 WOW! ${topic} is absolutely TRANSFORMING the industry right now! We can't believe the results we're seeing! Have you tried it yet? ${hashtags}`;
    
    case 'formal':
      return `We are pleased to announce our new developments regarding ${topic}. The implications for our industry are substantial and warrant attention. ${hashtags}`;
    
    case 'negative':
      return `We need to address some concerning issues with ${topic}. The current approach is far from ideal and requires significant reconsideration. ${hashtags}`;
    
    case 'pleasing':
      return `We're delighted to introduce you to our thoughtfully crafted approach to ${topic}. We believe you'll find our perspective both helpful and refreshing. ${hashtags}`;
    
    case 'neutral':
      return `Here's an objective overview of ${topic}. We've gathered data from multiple sources to provide a balanced perspective on this matter. ${hashtags}`;
    
    default: // friendly
      return `We've been exploring ${topic} lately and wanted to share what we've learned. It's been quite the journey! ${hashtags}`;
  }
};

const generateEmailContent = (topic: string, tone: string, style: string): string => {
  const greeting = tone === 'formal' || tone === 'professional' ? 'Dear Valued Client,' : 'Hi there,';
  const signature = tone === 'formal' || tone === 'professional' ? '\n\nBest regards,\nThe Team' : '\n\nCheers,\nThe Team';
  
  let subject = '';
  let body = '';
  
  switch(tone) {
    case 'professional':
      subject = `Important Update: ${topic} Insights`;
      body = `${greeting}\n\nI hope this email finds you well. We wanted to share some important information about ${topic} that we believe will benefit your organization. Our team has been analyzing the latest trends, and we've identified several key opportunities that align with your goals.\n\nWould you be available for a brief discussion to explore how these insights could be applied to your specific situation?${signature}`;
      break;
    
    case 'casual':
      subject = `Quick thought about ${topic}`;
      body = `${greeting}\n\nHope you're doing great! Just wanted to shoot you a quick note about ${topic}. We've been working with this lately and thought it might be helpful for what you're doing.\n\nLet me know if you want to chat about it sometime!${signature}`;
      break;
    
    case 'enthusiastic':
      subject = `EXCITING NEWS about ${topic}!!`;
      body = `${greeting}\n\nI'm absolutely THRILLED to share our latest discoveries about ${topic}! This is a GAME-CHANGER that you absolutely need to know about!\n\nOur team has been working tirelessly, and the results are incredible. We can't wait to show you how this can transform your approach!${signature}`;
      break;
    
    case 'formal':
      subject = `Regarding: ${topic} - Important Information`;
      body = `${greeting}\n\nThis correspondence is to inform you of recent developments regarding ${topic}. The matter requires your attention as it pertains to ongoing initiatives within your organization.\n\nShould you wish to discuss this matter further, please do not hesitate to schedule a consultation at your earliest convenience.${signature}`;
      break;
    
    case 'negative':
      subject = `Concerns Regarding ${topic}`;
      body = `${greeting}\n\nI must bring to your attention several significant issues we've identified with ${topic}. The current situation is concerning and requires immediate attention.\n\nOur analysis has uncovered multiple problems that could potentially impact performance and outcomes negatively. We strongly recommend a comprehensive reassessment of the current approach.${signature}`;
      break;
    
    case 'pleasing':
      subject = `A Thoughtful Perspective on ${topic}`;
      body = `${greeting}\n\nI hope your day is going wonderfully. I'm reaching out with some gentle thoughts about ${topic} that I believe you might find valuable.\n\nWe've developed an approach that many have found helpful and supportive. I'd be delighted to share more details if you're interested in exploring this further.${signature}`;
      break;
    
    case 'neutral':
      subject = `Objective Analysis: ${topic}`;
      body = `${greeting}\n\nThis email contains factual information regarding ${topic} based on objective analysis and data collection.\n\nWe have compiled relevant information from multiple sources to provide a balanced view. The data suggests several possible approaches, each with its own set of advantages and considerations.${signature}`;
      break;
    
    default: // friendly
      subject = `Thoughts on ${topic}`;
      body = `${greeting}\n\nI hope you're having a good week! I wanted to share some thoughts about ${topic} that came up in our recent team discussion. There are some interesting aspects that might be relevant to your current projects.\n\nWould love to hear your perspective on this when you have a moment.${signature}`;
      break;
  }
  
  return `Subject: ${subject}\n\n${body}`;
};

const generateBlogIntro = (topic: string, tone: string, style: string): string => {
  const title = generateBlogTitle(topic, tone);
  
  switch(tone) {
    case 'professional':
      return `# ${title}\n\nIn today's rapidly evolving landscape, ${topic} has emerged as a critical factor for organizations seeking to maintain competitive advantage. This article examines the key components of ${topic} and provides actionable insights for implementation within your strategic framework.\n\nResearch indicates that companies effectively leveraging ${topic} experience significant improvements in operational efficiency and stakeholder satisfaction.`;
    
    case 'casual':
      return `# ${title}\n\nLet's talk about ${topic} – it's something that's been on my mind lately, and I bet it's been on yours too. There's a lot of buzz around this topic, but what does it really mean for you?\n\nI've spent some time digging into this, and I've found some pretty interesting stuff that I think will help clear things up.`;
    
    case 'enthusiastic':
      return `# ${title}\n\n🔥 ${topic} is REVOLUTIONIZING everything we thought we knew! Are you ready to dive into the most exciting development in our industry?\n\nI'm absolutely pumped to share these game-changing insights that will transform how you approach your daily operations. Get ready for some mind-blowing revelations!`;
    
    case 'formal':
      return `# ${title}\n\nThe following discourse examines the multifaceted nature of ${topic} and its implications for contemporary practices. It is imperative to understand the fundamental principles that govern this domain before proceeding with implementation considerations.\n\nThis analysis presents a comprehensive overview of the current state of knowledge regarding ${topic}.`;
    
    case 'negative':
      return `# ${title}\n\nThe concerning reality of ${topic} demands a critical examination. Despite popular narratives, there are significant issues that continue to be overlooked or deliberately ignored.\n\nThis article challenges the prevailing assumptions and highlights the problematic aspects of ${topic} that require urgent reconsideration. The evidence suggests a need for substantial reform in our approach.`;
    
    case 'pleasing':
      return `# ${title}\n\nExploring ${topic} can be a rewarding journey filled with valuable discoveries. In this gentle exploration, we'll walk through some thoughtful perspectives that many have found helpful and enriching.\n\nOur approach aims to provide a comfortable and supportive framework for understanding ${topic} in a way that aligns with your specific needs and preferences.`;
    
    case 'neutral':
      return `# ${title}\n\nThis article presents a balanced analysis of ${topic} based on factual information gathered from multiple sources. The objective is to provide readers with comprehensive data rather than advocating for a particular viewpoint.\n\nEvidence suggests several interpretations of ${topic}, each with supporting arguments and potential limitations. This overview aims to equip readers with the necessary information to form their own informed conclusions.`;
    
    default: // friendly
      return `# ${title}\n\nHave you ever wondered about the real impact of ${topic}? It's something that affects so many aspects of what we do, yet it's often misunderstood or overlooked.\n\nIn this article, I'd like to share some perspectives on ${topic} that might help you see it in a new light and potentially discover valuable applications for your own situation.`;
  }
};

const generateBlogTitle = (topic: string, tone: string): string => {
  switch(tone) {
    case 'professional':
      return `Strategic Implementation of ${topic}: A Comprehensive Analysis`;
    case 'casual':
      return `What's the Deal with ${topic}? Let's Break It Down`;
    case 'enthusiastic':
      return `${topic}: The ULTIMATE Game-Changer You Can't Ignore!`;
    case 'formal':
      return `An Examination of ${topic}: Theoretical Frameworks and Practical Applications`;
    case 'negative':
      return `The Troubling Reality of ${topic}: Critical Issues and Concerns`;
    case 'pleasing':
      return `A Gentle Exploration of ${topic}: Finding Balance and Harmony`;
    case 'neutral':
      return `${topic}: An Objective Analysis of Current Perspectives`;
    default: // friendly
      return `Understanding ${topic}: A Fresh Perspective`;
  }
};

const generateHashtags = (topic: string): string => {
  // Create hashtags from the topic words
  const words = topic.split(' ');
  const hashtags = words.map(word => `#${word.replace(/[^a-zA-Z0-9]/g, '')}`);
  
  // Add some generic hashtags
  const genericTags = ['#TrendingNow', '#MustRead', '#Innovation', '#Insights'];
  const randomGenericTags = genericTags.sort(() => 0.5 - Math.random()).slice(0, 2);
  
  return [...hashtags, ...randomGenericTags].join(' ');
};
