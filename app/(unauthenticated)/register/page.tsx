'use client';

import { UserRegister } from "./_components/user-register";
export default function RegisterPage() {
    return (
        <div className="flex bg-[url('@/public/banner_comics.svg')] bg-cover bg-gray-700 bg-center bg-no-repeat items-center justify-center min-h-screen">
            <UserRegister />
        </div>
    )
}