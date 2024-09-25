import React from 'react';
import Notification from '../Img/Notification.svg';
import Magnifier from '../Img/Magnifier.svg';
import Heart from '../Img/Heart.svg';
import Location from '../Img/Location.svg';
import Human from '../Img/Human.svg';
import Arrow from '../Img/Arrow.svg';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const hiddenPages = ['/'];
    return (
        <div className="max-w-2xl mx-auto border border-black rounded-2xl bg-F2F2E0">
            <header className="border-b border-black flex justify-between p-7 rounded-t-2xl bg-white">
                <div className="flex items-center">
                    {!hiddenPages.includes(location.pathname) && (
                        <button>
                            <img src={Arrow} alt="Arrow" className="w-6 h-6" />
                        </button>
                    )}
                </div>
                <div className="flex space-x-8">
                    <button>
                        <img src={Notification} alt="Notification" className="w-6 h-6" />
                    </button>
                    <button>
                        <img src={Magnifier} alt="Magnifier" className="w-6 h-6" />
                    </button>
                </div>
            </header>

            <div>
                <Outlet />
            </div>

            <footer className="border-t border-black rounded-b-2xl bg-white p-4">
                <div className="flex justify-around items-center space-x-2">
                    <button>
                        <img src={Heart} alt="Heart" className="w-10 h-10" />
                    </button>
                    <button className="mx-auto">
                        <img src={Location} alt="Location" className="w-15 h-15" />
                    </button>
                    <button>
                        <img src={Human} alt="Human" className="w-10 h-10" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
