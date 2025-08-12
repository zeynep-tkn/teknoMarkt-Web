'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/common/components/elements/Card';
import Button from '@/common/components/elements/Button';
import { PRODUCTS } from '@/common/constant/products';

// Silme ikonu için SVG
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.134H8.09a2.09 2.09 0 00-2.09 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);

// Sepetteki ürünler için sahte veri (normalde bu state management ile yönetilir)
const initialCartItems = [
    { ...PRODUCTS[0], quantity: 1 }, // Canon camera
    { ...PRODUCTS[3], quantity: 2 }, // Gaming Mouse
];

const CartDetails = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Ara Toplam Hesaplaması
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = 20; // Sabit kargo ücreti
    const total = subtotal + shippingCost;

    return (
        <div className="container mx-auto my-16 px-4">
            <h1 className="text-3xl font-bold text-sky-900 mb-8">Alışveriş Sepetim</h1>

            {cartItems.length > 0 ? (
                <div className="flex flex-col lg:flex-row gap-8 text-black">
                    {/* Sol Taraf: Ürün Listesi */}
                    <div className="w-full lg:w-2/3">
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <Card key={item.id} className="p-4 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md" />
                                        <div>
                                            <Link href={`/products/${item.id}`} className="font-semibold text-sky-900 hover:underline">{item.name}</Link>
                                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {/* Adet Seçici */}
                                        <div className="flex items-center border rounded">
                                            <button className="px-3 py-1">-</button>
                                            <span className="px-3 py-1 border-l border-r">{item.quantity}</span>
                                            <button className="px-3 py-1">+</button>
                                        </div>
                                        {/* Toplam Fiyat */}
                                        <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                        {/* Kaldır Butonu */}
                                        <button className="text-gray-500 hover:text-red-600"><TrashIcon /></button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sağ Taraf: Sipariş Özeti */}
                    <div className="w-full lg:w-1/3">
                        <Card className="p-6">
                            <h2 className="text-xl font-bold text-sky-900 mb-4">Sipariş Özeti</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Ara Toplam</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Kargo</span>
                                    <span>${shippingCost.toFixed(2)}</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Toplam</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <Button className="w-full mt-6 bg-amber-500 text-white font-semibold hover:bg-amber-600 py-3">
                                Ödemeye Geç
                            </Button>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-gray-600 text-lg">Alışveriş sepetiniz boş.</p>
                    <Link href="/products">
                        <Button className="mt-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 py-2 px-6">
                            Alışverişe Devam Et
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartDetails;
