import HeaderBottom from '@/common/components/layouts/HeaderBottom';
import HeaderTop from '@/common/components/layouts/HeaderTop';
import Footer from '@/common/components/layouts/Footer';
import SignInForm from '@/modules/auth/components/SignInForm'; // Henüz oluşturmadık ama birazdan yapacağız

export default function SignInPage() {
    return (
        <main className="bg-white">
            {}
            <HeaderTop />
            <HeaderBottom />

            {}
            <SignInForm />

            <Footer />
        </main>
    );
}
