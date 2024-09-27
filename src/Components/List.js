import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = () => {
    const items = Array.from({ length: 7 });
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="relative w-full max-w-2xl">
                <p className="text-center text-4xl font-bold mt-5">Recipe</p>
                <button onClick={() => navigate('/list/writing')} className="absolute right-4 rounded-2xl bg-FC1818 text-white px-4 py-1">
                    <p className="text-lg font-bold">글쓰기</p>
                </button>
            </div>
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
