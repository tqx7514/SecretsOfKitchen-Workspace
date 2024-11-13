'use client';

const RedButton = ({ onClick, className, children }) => {
    return (
        <div>
            <button onClick={onClick} className="absolute right-4 rounded-2xl bg-FC1818 text-white px-4 py-1">
                {children}
            </button>
        </div>
    );
};

export default RedButton;
