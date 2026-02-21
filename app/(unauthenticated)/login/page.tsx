import { UserLogin } from "./_components/user-login";

export default function LoginPage() {
    return (
        <div className="flex bg-[url('@/public/banner_comics.svg')] bg-cover bg-gray-700 bg-center bg-no-repeat items-center justify-center min-h-screen">
            <UserLogin />
        </div>
    )
}