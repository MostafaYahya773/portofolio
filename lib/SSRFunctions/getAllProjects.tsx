import { createClient } from '../supabase/server';

const getAllProjects = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default getAllProjects;
