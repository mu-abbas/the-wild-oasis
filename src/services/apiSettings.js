import supabase from './supabase';

export async function getSettings() {
  const { data: settings, error } = await supabase.from('settings').select('*').single();
  if (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
  return settings;
}
