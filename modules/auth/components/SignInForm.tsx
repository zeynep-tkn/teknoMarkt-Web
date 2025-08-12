// modules/auth/components/SignInForm.tsx

'use client'; 

import React, { useState } from 'react';
import { Card } from '@/common/components/elements/Card';
import InputField from '@/common/components/elements/InputField';
import Button from '@/common/components/elements/Button';
import Link from 'next/link'; // 1. Adım: Link bileşenini import et

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="container mx-auto my-16 flex justify-center">
            <Card className="p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-sky-900 mb-6 text-center">
                    Giriş Yap
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-posta Adresi
                        </label>
                        <InputField
                            type="email"
                            placeholder="ornek@mail.com"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Şifre
                        </label>
                        <InputField
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Giriş Yap
                        </Button>
                    </div>
                </form>

                {/* 2. Adım: Kayıt ol sayfasına yönlendirme linkini ekle */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Hesabın yok mu?{' '}
                        <Link href="/signup" className="font-medium text-amber-600 hover:text-amber-500 hover:underline">
                            Kayıt Ol
                        </Link>
                    </p>
                </div>
                
            </Card>
        </div>
    );
};

export default SignInForm;