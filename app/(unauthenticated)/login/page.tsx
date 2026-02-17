import { UserLogin } from "./_components/user-login";

export default function LoginPage() {
    return (
        <div className="flex bg-[url('@/public/banner_comics.png')] items-center justify-center min-h-screen">
            <UserLogin />
        </div>
    )
}