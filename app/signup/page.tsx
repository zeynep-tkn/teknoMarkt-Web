import HeaderBottom from '@/common/components/layouts/HeaderBottom';
import HeaderTop from '@/common/components/layouts/HeaderTop';
import Footer from '@/common/components/layouts/Footer';
import SignUpForm from '@/modules/auth/components/SignUpForm'; // Birazdan oluşturacağız

export default function SignUpPage() {
    return (
        <main className="bg-white">
            {/* Tema bütünlüğünü korumak için Header ve Footer'ı ekliyoruz */}
            <HeaderTop />
            <HeaderBottom />

            {/* Sayfanın asıl içeriği olan kayıt formunu buraya ekliyoruz */}
            <SignUpForm />

            <Footer />
        </main>
    );
}
