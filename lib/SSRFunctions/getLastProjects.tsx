import { createClient } from '../supabase/server';

const getLastProjects = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true })
    .limit(2);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default getLastProjects;
