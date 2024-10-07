"use client"

import supabase from '@/supabase/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LogInPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickLogIn = async () => {
      const result = await supabase.auth.signInWithPassword({email, password});
      console.log(result);
      
      // if()

      router.push("/");
    }
      
  return (
    <main className='pt-24'>
      <h1 className='ml-[500px] mb-10 text-3xl font-extrabold'>로그인</h1>
      <div className='ml-[500px] mb-4 font-bold'>
        이메일 <input type="email"
        className='border border-black mb-4 rounded-md w-[300px] h-[30px] ml-16'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /> <br />
        비밀번호 <input type="password"
        className='border border-black mb-4 rounded-md w-[300px] h-[30px] ml-12'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <br />
          <button onClick={handleClickLogIn} className='w-[420px] h-8 bg-blue-500 text-white rounded-md'>로그인하기</button>
      </div>
    </main>
  )
}

export default LogInPage