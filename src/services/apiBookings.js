import supabase from './supabase';

export async function getBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select('id, totalPrice, startDate, endDate, numNights, cabins(name), created_at, status, guests(fullName, email)')
    .order('startDate', { ascending: false });
  if (error) throw new Error(`${error.message}`);
  return data;
}
