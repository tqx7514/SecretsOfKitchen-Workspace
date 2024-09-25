import React from 'react';

const Main = () => {
    const items = Array.from({ length: 10 });
    return (
        <div>
            <div className="w-80 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 mx-auto border border-black mt-10 mb-10 rounded-md p-3 text-center flex items-center justify-center">
                <p className="text-lg font-bold">Today Recipe</p>
            </div>

            <p className="text-center">추천 레시피</p>

            {items.map((_, i) => (
                <div key={i}>
                    <div className="w-80 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 mx-auto border border-black mt-10 mb-10 rounded-md p-3 text-center flex items-center justify-center">
                        <p className="text-md font-bold">추천 레시피 목록</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
