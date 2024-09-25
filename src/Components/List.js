import React from 'react';

const List = () => {
    const items = Array.from({ length: 20 });
    return (
        <div>
            <p className="text-center text-4xl font-bold mt-5">Recipe</p>
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

export default List;
