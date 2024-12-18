"use client";
import React, { useState } from 'react';

const Comment = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<string[]>([]);

    const submitComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([comment, ...comments]);
            setComment("");
        }
    };

    return (
        <div
            className="max-w-full py-10 my-12 px-4 rounded-lg "
            style={{ backgroundColor: 'ivory' }} // ivory background
        >
            {/* Heading */}
            <h1
                className="font-semibold text-deepRed text-xl mb-6"
                style={{ color: 'mutedOlive' }} // mutedOlive text
            >
                Add Your Comment Here
            </h1>

            {/* Form Section */}
            <form className="flex flex-col sm:flex-row gap-4 mb-6" onSubmit={submitComment}>
                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-grow p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mutedOlive "
                    style={{
                        borderColor: 'gold', // gold border
                        backgroundColor: 'lightTan', // lightTan input background
                        color: 'darkBrown', // darkBrown text
                    }}
                />
                <button
                    type="submit"
                    className="px-6 py-2 text-white bg-deepRed rounded-lg font-semibold transition duration-300"
                    style={{
                        backgroundColor: 'deepRed', // deepRed background
                        border: '2px solid mutedOlive', // mutedOlive border
                    }}
                >
                    Submit
                </button>
            </form>

            {/* Comments List */}
            <ul className="space-y-4">
                {comments.map((hereComment, index) => (
                    <li
                        key={index}
                        className="p-4 rounded-lg bg-slate-100 shadow-sm"
                        style={{
                            backgroundColor: 'lightTan', // lightTan background
                            color: 'darkBrown', // darkBrown text
                        }}
                    >
                        <p className="text-sm">{hereComment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comment;
