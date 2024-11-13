'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts.slice(0, 10));
    }, []);

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-80 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 border border-black rounded-md p-3 text-center flex items-center justify-center mt-5">
                <p className="text-lg font-bold">Today Recipe</p>
            </div>

            <p className="text-center">추천 레시피</p>

            {posts.length > 0 ? (
                posts.map((post, i) => (
                    <div key={i}>
                        <button
                            onClick={() => {
                                router.push(`/detail/${i}`);
                            }}
                            className="w-80 h-40 md:w-96 md:h-32 lg:w-96 lg:h-40 border border-black rounded-md p-3 text-center flex items-center justify-center mb-5"
                        >
                            <p className="text-md font-bold">{post.title}</p>
                        </button>
                    </div>
                ))
            ) : (
                <p>No recipes available</p>
            )}
        </div>
    );
};

export default Page;
