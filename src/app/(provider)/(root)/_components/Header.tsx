"use client";

import { useAuthStore } from '@/zustand/auth.store';
import Link from 'next/link';

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  
  console.log("isLoggedIn", isLoggedIn)
  return (
    <header className='mt-8 ml-8'>
        <div className='flex items-center gap-x-8'>
          <Link href={"/"} className='font-extrabold text-2xl mr-8'><h1>중고마켓</h1></Link>
          <Link href={"/my/deals"}>내 판매글</Link>
          <Link href={"/deals"}>판매하기</Link>
          </div>
          {!isLoggedIn ? (
          <div className='flex pt-0 gap-x-8'>
          <Link href={"/auth/log-in"} className='ml-[1200px]'>로그인</Link>
          <Link href={"/auth/sign-up"}>회원가입</Link>
        </div>
    ) : (
      <Link href={"/"} className='ml-[1200px] mt-0 pt-[-20px]'>로그아웃</Link>
    )}
    </header>
  )
}

export default Header