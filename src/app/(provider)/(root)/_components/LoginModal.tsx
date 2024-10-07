"use client";

import { useAuthStore } from '@/zustand/auth.store';
import { useModalStore } from '@/zustand/modal.store';


function LoginModal() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);
    if(isLoggedIn){
        openModal();
    } else {
        closeModal(true);
    }
  return (
    <div>LoginModal</div>
  )
}

export default LoginModal