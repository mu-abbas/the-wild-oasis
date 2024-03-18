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

export async function createCabin(cabin) {
  const imageName = `${Math.round(Math.random() * 10000000000)}-${cabin.image.name}`.replaceAll('/', '');
  const imagePath = `https://lsjcmajyptemibifwhyo.supabase.co/storage/v1/object/public/cabinsImages/${imageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabin, image: imagePath }])
    .select();
  if (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }

  const { error: uploadError } = await supabase.storage.from('cabinsImages').upload(imageName, cabin.image);
  if (uploadError) {
    deleteCabin(data[0].id);
    throw new Error(`${uploadError.code}: ${uploadError.message}`);
  }

  return;
}
