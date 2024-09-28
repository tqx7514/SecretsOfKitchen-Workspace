import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const List = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const storedTitles = JSON.parse(localStorage.getItem('titles')) || [];
        setTitles(storedTitles);
    }, []);

    useEffect(() => {
        if (location.state?.title) {
            setTitles((prevTitles) => {
                const updatedTitles = [...prevTitles, location.state.title];
                localStorage.setItem('titles', JSON.stringify(updatedTitles));
                return updatedTitles;
            });
        }
    }, [location.state]);

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="relative w-full max-w-2xl">
                <p className="text-center text-4xl font-bold mt-5">Recipe</p>
                <button onClick={() => navigate('/list/writing')} className="absolute right-4 rounded-2xl bg-FC1818 text-white px-4 py-1">
                    <p className="text-lg font-bold">글쓰기</p>
                </button>
            </div>
            {titles.length > 0 ? (
                titles.map((title, i) => (
                    <div key={i}>
                        <div className="w-80 h-40 md:w-96 md:h-32 lg:w-96 lg:h-40 border border-black rounded-md p-3 text-center flex items-center justify-center">
                            <p className="text-md font-bold">{title}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No recipes available</p>
            )}
        </div>
    );
};

export default List;
