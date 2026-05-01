'use client';
import { createClient } from '../../../lib/supabase/client';
import { MessageData } from '../interface';
import { useMutation } from '@tanstack/react-query';

const useSendMessage = () => {
  const supabase = createClient();

  const sendMessage = async (messageDataL: MessageData) => {
    const { data, error } = await supabase.from('contact').insert({
      name: messageDataL.name,
      email: messageDataL.email,
      subject: messageDataL.subject,
      description: messageDataL.description,
    });
    return data;
  };

  return useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: sendMessage,
  });
};

export default useSendMessage;
