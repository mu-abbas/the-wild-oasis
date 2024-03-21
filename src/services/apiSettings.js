import supabase from './supabase';

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single();
  if (error) throw new Error(`${error.code}: ${error.message}`);
  return data;
}

export async function setSettings({ name, value }) {
  const { error } = await supabase
    .from('settings')
    .update({ [name]: value })
    .eq('id', 1)
    .select();
  if (error) throw new Error(`${error.code}: ${error.message}`);
  return;
}
