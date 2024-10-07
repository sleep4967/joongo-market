"use client";

import supabase from '@/supabase/supabase';
import { useAuthStore } from '@/zustand/auth.store';
import { PropsWithChildren, useEffect } from 'react';

function AuthProvider({children}: PropsWithChildren) {
    const isLogIn = useAuthStore((state) => state.isLogIn);
    const isLogOut = useAuthStore((state) => state.isLogOut);
    
    useEffect(() => {
        (async() => {
            supabase.auth.onAuthStateChange((_event, session) =>{
                if(session?.user)
                    {
                    isLogIn();
                } else {
                    isLogOut();
                }
            });
        })()
    }, [isLogIn, isLogOut])

    return children
}

export default AuthProvider