import HeaderBottom from '@/common/components/layouts/HeaderBottom';
import HeaderTop from '@/common/components/layouts/HeaderTop';
import Footer from '@/common/components/layouts/Footer';
import CartDetails from '@/modules/cart/components/CartDetails'; // Birazdan oluşturacağız

export default function CartPage() {
    return (
        <main className="bg-white">
            <HeaderTop />
            <HeaderBottom />
            <CartDetails />
            <Footer />
        </main>
    );
}
