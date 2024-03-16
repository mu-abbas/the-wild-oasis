import { createClient } from '@supabase/supabase-js';
import KEY from '../keys/supabaseKey';
const supabaseUrl = 'https://lsjcmajyptemibifwhyo.supabase.co';
const supabaseKey = KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
