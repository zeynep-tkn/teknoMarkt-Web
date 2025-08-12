import HeaderBottom from '@/common/components/layouts/HeaderBottom';
import HeaderTop from '@/common/components/layouts/HeaderTop';
import Footer from '@/common/components/layouts/Footer';
import WishlistProducts from '@/modules/wishlist/components/WishlistProducts'; // Birazdan oluşturacağız

export default function WishlistPage() {
    return (
        <main className="bg-white">
            {/* Tema bütünlüğünü korumak için Header ve Footer'ı ekliyoruz */}
            <HeaderTop />
            <HeaderBottom />

            {/* Sayfanın asıl içeriği olan favori ürünler listesini buraya ekliyoruz */}
            <WishlistProducts />

            <Footer />
        </main>
    );
}
