'use client';
import { MessageData } from '../interface';
import { useMutation } from '@tanstack/react-query';

const useSendMessage = () => {
  const sendMessage = async (message: MessageData & { website?: string }) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(20_000),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) {
      throw new Error(result.error || 'Your message could not be sent. Please try again.');
    }
  };

  return useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: sendMessage,
    retry: false,
  });
};

export default useSendMessage;
