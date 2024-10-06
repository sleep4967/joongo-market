import Link from 'next/link'

function Header() {
  return (
    <header className='pt-9 flex border-b border-black pb-8 z-50'>
        <div>
        <Link href={"/"} className='font-extrabold text-xl ml-12'>중고마켓</Link>
        <Link href={"/abc"} className='ml-12'>내 판매글</Link>
        <Link href={"/abc2"} className='ml-4 '>구입하기</Link>
        <Link href={"/abc3"} className='ml-4'>판매하기</Link>
        </div>
        <div className='mt-1'>
            <Link href={"/auth/log-in"} className='ml-[950px] mr-8'>로그인</Link>
            <Link href={"/auth/sign-up"}>회원가입</Link>
        </div>
    </header>
  )
}

export default Header