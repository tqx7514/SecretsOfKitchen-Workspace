'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import './globals.css';
import { ImgMan } from './ImgMan';

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        console.log('현재 위치: ', router.pathname);
        window.scrollTo(0, 0);
    }, [router.pathname]);

    const hiddenPages = ['/'];

    return (
        <html lang="en">
            <body>
                <div className="border border-black max-w-2xl mx-auto bg-F2F2E0 min-h-screen flex flex-col">
                    <header className="border border-black flex justify-between p-7 bg-white w-full max-w-2xl mx-auto fixed top-0 left-0 right-0 z-10">
                        <div className="flex items-center">
                            {!hiddenPages.includes(router.pathname) && (
                                <button onClick={() => router.push('/')}>
                                    <Image src={ImgMan.get('Arrow')} alt="Arrow" width={24} height={24} className="w-6 h-6" />
                                </button>
                            )}
                        </div>
                        <div className="flex gap-8">
                            <button onClick={() => router.push('/notification')}>
                                <Image src={ImgMan.get('Notification')} alt="Notification" width={24} height={24} className="w-6 h-6" />
                            </button>
                            <button onClick={() => router.push('/magnifier')}>
                                <Image src={ImgMan.get('Magnifier')} alt="Magnifier" width={24} height={24} className="w-6 h-6" />
                            </button>
                        </div>
                    </header>

                    <main className="flex-grow pt-20">{children}</main>

                    <footer className="border-t border-black bg-white w-full p-4">
                        <div className="flex justify-around items-center px-[10%] gap-2">
                            <button onClick={() => router.push('/recipelist')}>
                                <Image src={ImgMan.get('Heart')} alt="Heart" width={40} height={40} className="w-10 h-10" />
                            </button>
                            <button className="mx-auto" onClick={() => router.push('/location')}>
                                <Image src={ImgMan.get('Location')} alt="Location" width={60} height={60} className="w-15 h-15" />
                            </button>
                            <button onClick={() => router.push('/mypage')}>
                                <Image src={ImgMan.get('Human')} alt="Human" width={40} height={40} className="w-10 h-10" />
                            </button>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default Layout;
