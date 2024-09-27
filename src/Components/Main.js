import React from 'react';

const Main = () => {
    const items = Array.from({ length: 5 });
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-80 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 border border-black rounded-md p-3 text-center flex items-center justify-center mt-5">
                <p className="text-lg font-bold">Today Recipe</p>
            </div>

            <p className="text-center">추천 레시피</p>

            {items.map((_, i) => (
                <div key={i}>
                    <div className="w-80 h-40 md:w-96 md:h-32 lg:w-96 lg:h-40 border border-black rounded-md p-3 text-center flex items-center justify-center">
                        <p className="text-md font-bold">추천 레시피 목록</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
