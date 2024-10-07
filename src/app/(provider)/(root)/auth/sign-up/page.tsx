"use client";

import supabase from '@/supabase/supabase';
import { useAuthStore } from '@/zustand/auth.store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const isLogIn = useAuthStore((state) => state.isLogIn);
    const isLogOut = useAuthStore((state) => state.isLogOut);

    const router = useRouter();

    const handleClickSignUp = async () => {
    if(!email.includes("@") || !email.includes(".")) return alert("이메일의 형식이 올바르지 않습니다.");
    if(!password) return alert("비밀번호가 입력되지 않았습니다.");

    const result = await supabase.auth.signUp({email, password});
    console.log(result);
    if(password !== checkPassword) return alert("정확한 비밀번호를 다시 입력하세요.");
    if(result.data.user) return alert("회원가입 성공")

    console.log(isLogIn);
    console.log(isLogOut);

      router.push("/");
  }
  return (
    <main className='pt-24'>
      <h1 className='ml-[500px] mb-10 text-3xl font-extrabold'>회원으로 가입하기</h1>
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
        /> <br />
        비밀번호 확인<input type="password"
        className='border border-black mb-4 rounded-md w-[300px] h-[30px] ml-4'
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        />
        <br />
          <button onClick={handleClickSignUp} className='w-[420px] h-8 bg-blue-500 text-white rounded-md'>가입하기</button>
      </div>
    </main>
  )
}

export default SignUpPage