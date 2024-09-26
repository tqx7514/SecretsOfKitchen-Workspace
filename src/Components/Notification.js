import { ImgMan } from './ImgMan';

const Notification = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full h-40 md:h-32 lg:h-40 p-3 text-center flex items-center justify-center gap-10">
                <img src={ImgMan.get('Logo')} alt="Logo" className="w-6 h-6" />
                <p className="text-md font-bold">알림</p>
            </div>
        </div>
    );
};

export default Notification;
