"use client"

import supabase from '@/supabase/supabase';
import React, { useState } from 'react'

function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const isLoggedIn = useLoginModal((state) => (state.isLoggedIn));

    const handleClickSignUp = async () => {
      if(!email) return alert("이메일이 입력되지 않았습니다.");
      if(!email.includes("@") || !email.includes(".")) return alert("이메일 형식이 올바르지 않습니다.");
      if(!password) return alert("비밀번호가 입력되지 않았습니다.");

      const result = await supabase.auth.signUp({email, password});
      
      if(!result.data.user) return alert("로그인이 실패했다.")
      // if(!isLoggedIn) return alert("로그인 안됬다.")
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
          <button onClick={handleClickSignUp} className='w-[420px] h-8 bg-blue-500 text-white rounded-md'>로그인하기</button>
      </div>
    </main>
  )
}

export default LogInPage