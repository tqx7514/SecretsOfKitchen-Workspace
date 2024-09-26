import React from 'react';

const List = () => {
    const items = Array.from({ length: 7 });
    return (
        <div className="flex flex-col items-center gap-10">
            <p className="text-center text-4xl font-bold">Recipe</p>
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

export default List;
