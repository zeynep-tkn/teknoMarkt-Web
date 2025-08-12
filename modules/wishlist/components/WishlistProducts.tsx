'use client'; // Kullanıcı etkileşimi olacağı için (örneğin favoriden çıkarma)

import React from 'react';
import Link from 'next/link';
import { Card } from '@/common/components/elements/Card';
import ButtonLove from '@/common/components/elements/ButtonLove';
import Star from '@/common/components/elements/Star';
import { PRODUCTS } from '@/common/constant/products'; // Şimdilik sahte veri kullanıyoruz
import Button from '@/common/components/elements/Button'; //deneememe

// Örnek olarak, ID'si 1, 3 ve 5 olan ürünleri favori kabul edelim.
// Gerçek projede bu bilgi API'den veya state'ten gelecek.
const favoriteProductIds = [1, 3, 5];
const favoriteProducts = PRODUCTS.filter(product => favoriteProductIds.includes(product.id));

const WishlistProducts = () => {
    return (
        <div className="container mx-auto my-16 px-4">
            <h1 className="text-3xl font-bold text-sky-900 mb-8">
                Favorilerim
            </h1>

            {/* Favori ürün listesi */}
            {favoriteProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favoriteProducts.map((product, index) => (
                        <Link href={`/products/${product.id}`} key={index}>
                            <Card className="w-full h-80 justify-center flex flex-col items-center relative cursor-pointer hover:bg-slate-100 p-4">
                                <img className="w-48 h-44 object-contain rounded-lg" src={product.image} alt={product.name} />
                                {/* Favoriden çıkarma butonu (zaten dolu kalp olarak görünecek) */}
                                <ButtonLove />
                                <div className="w-full mt-4 text-left">
                                    <div className="text-sky-900 text-lg font-medium truncate">{product.name}</div>
                                    <div className="text-neutral-600 text-lg font-semibold">${product.price}</div>
                                    <Star count={Math.round(product.rating)} />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                // Favori ürün yoksa gösterilecek mesaj
                <div className="text-center py-16">
                    <p className="text-gray-600 text-lg">Favori listenizde henüz ürün bulunmuyor.</p>
                    <Link href="/products">
                        <Button className="mt-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 py-2 px-6">
                            Alışverişe Başla
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default WishlistProducts;
