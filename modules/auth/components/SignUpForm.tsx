// modules/auth/components/SignUpForm.tsx
'use client'; 

import React, { useState } from 'react';
import { Card } from '@/common/components/elements/Card';
import InputField from '@/common/components/elements/InputField';
import Button from '@/common/components/elements/Button';
import Link from 'next/link'; // Giriş yap linki için ekliyoruz

// Google ikonunu doğrudan bileşen içinde SVG olarak tanımlıyoruz
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.038,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const SignUpForm = () => {
    // State'ler aynı kalıyor
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Kayıt bilgileri: ${name} ${surname}, ${email}`);
    };

    const handleGoogleSignUp = () => {
        alert('Google ile kayıt olma işlemi başlatıldı.');
    };

    return (
        <div className="container mx-auto my-16 flex justify-center">
            <Card className="p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-sky-900 mb-6 text-center">
                    Yeni Hesap Oluştur
                </h1>
                
                <form onSubmit={handleSignUp} className="space-y-4">
                    {/* İsim Soyisim Alanları */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Ad</label>
                            <InputField type="text" placeholder="Adınız" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Soyad</label>
                            <InputField type="text" placeholder="Soyadınız" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
                        </div>
                    </div>
                    {/* E-posta Alanı */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                        <InputField type="email" placeholder="ornek@mail.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
                    </div>
                    {/* Şifre Alanı */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Şifre</label>
                        <InputField type="password" placeholder="••••••••" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
                    </div>

                    {/* Ayırıcı - Yeri değiştirildi */}
                    <div className="pt-2 flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500">veya</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    
                    {/* Google ile Kayıt Butonu - Yeri değiştirildi */}
                    <Button
                        onClick={handleGoogleSignUp}
                        type="button" // Formu submit etmemesi için type="button" ekledik
                        className="w-full flex justify-center items-center gap-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <GoogleIcon />
                        <span>Google ile Kayıt Ol</span>
                    </Button>

                    {/* Hesap Oluştur Butonu */}
                    <div className="pt-2">
                        <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                            Hesap Oluştur
                        </Button>
                    </div>
                </form>

                {/* Giriş yap sayfasına yönlendirme linki */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Zaten bir hesabın var mı?{' '}
                        <Link href="/signin" className="font-medium text-amber-600 hover:text-amber-500 hover:underline">
                            Giriş Yap
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default SignUpForm;