import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
  return;
}

export async function createCabin(data) {
  const { error } = await supabase.from('cabins').insert([data]).select();
  if (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
  return;
}