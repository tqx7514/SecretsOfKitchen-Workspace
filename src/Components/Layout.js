import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ImgMan } from './ImgMan';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const hiddenPages = ['/'];

    return (
        <div className="max-w-2xl mx-auto border border-black rounded-2xl bg-F2F2E0">
            <header className="border-b border-black flex justify-between p-7 rounded-t-2xl bg-white">
                <div className="flex items-center">
                    {!hiddenPages.includes(location.pathname) && (
                        <button onClick={() => navigate(-1)}>
                            <img src={ImgMan.get('Arrow')} alt="Arrow" className="w-6 h-6" />
                        </button>
                    )}
                </div>
                <div className="flex gap-8">
                    <button onClick={() => navigate('/notification')}>
                        <img src={ImgMan.get('Notification')} alt="Notification" className="w-6 h-6" />
                    </button>
                    <button onClick={() => navigate('/magnifier')}>
                        <img src={ImgMan.get('Magnifier')} alt="Magnifier" className="w-6 h-6" />
                    </button>
                </div>
            </header>

            <div>
                <Outlet />
            </div>

            <footer className="border-t border-black rounded-b-2xl bg-white p-4">
                <div className="flex justify-around items-center px-[10%] gap-2">
                    <button onClick={() => navigate('/list')}>
                        <img src={ImgMan.get('Heart')} alt="Heart" className="w-10 h-10" />
                    </button>
                    <button className="mx-auto" onClick={() => navigate('/location')}>
                        <img src={ImgMan.get('Location')} alt="Location" className="w-15 h-15" />
                    </button>
                    <button onClick={() => navigate('/mypage')}>
                        <img src={ImgMan.get('Human')} alt="Human" className="w-10 h-10" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
