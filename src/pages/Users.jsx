import supabase from '../services/supabase';

function Users() {
  async function onClick() {
    // let { data, error } = await supabase.auth.signInWithPassword({
    //   email: 'test@gmail.com',
    //   password: 'milkyway',
    // });

    // let { data, error } = await supabase.auth.signUp({
    //   email: 'test@gmail.com',
    //   password: 'milkyway',
    // });

    const { data, error } = await supabase.auth.updateUser({
      email: 'test@gmail.com', // Replace with actual user ID
      data: { role: 'admin' },
    });
    console.log(data);
    console.log(error);
  }

  return <button onClick={onClick}>sign in</button>;
}

export default Users;
