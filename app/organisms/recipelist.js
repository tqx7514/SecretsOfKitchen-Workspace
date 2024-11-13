import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import RedButton from '../atoms/RedButton';
import PostButton from '../molecules/ItemCard';

const RecipeList = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    useEffect(() => {
        if (pathname?.state?.title && pathname?.state?.content) {
            setPosts((prevPosts) => {
                const updatedPosts = [...prevPosts, { title: pathname.state.title, content: pathname.state.content }];
                localStorage.setItem('posts', JSON.stringify(updatedPosts));
                return updatedPosts;
            });
        }
    }, [pathname.state]);

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="relative w-full max-w-2xl p-5">
                <p className="text-center text-4xl font-bold">Recipe</p>
                <RedButton onClick={() => router.push('/list/writing')}>
                    <p className="text-lg font-bold">글쓰기</p>
                </RedButton>
            </div>
            {posts.length > 0 ? (
                posts.map((post, i) => (
                    <div className="p-1" key={i}>
                        <PostButton title={post.title} onClick={() => router.push(`/detail/${i}`)} />
                    </div>
                ))
            ) : (
                <p>No recipes available</p>
            )}
        </div>
    );
};

export default RecipeList;
