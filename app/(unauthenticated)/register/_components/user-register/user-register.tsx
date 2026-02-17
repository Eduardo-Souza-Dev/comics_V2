'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputPassword } from "@/shared/ui/input-password";

export function UserRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return (

        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Criar uma conta</CardTitle>
                <CardAction>
                    <Button onClick={() => router.push('/login')} variant="link">Já tem uma conta?   Entrar</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <InputPassword
                                id="password"
                                label="Senha"
                                required={true}
                                placeholder="Digite sua senha"
                                description="Sua senha deve ter pelo menos 8 caracteres."
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Criar conta
                </Button>
            </CardFooter>
        </Card>
    )

}