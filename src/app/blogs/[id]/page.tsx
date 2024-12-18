import React from 'react'
import { dishes } from '../../../data/data'
import Image from 'next/image'
import Comment from '../../../components/custum/Comment'

interface param {
    params: {
        id: string
    }
}

const page = ({ params }: param) => {
    const convertnumber = Number(params.id)
    const methodfind = dishes.find((items) => items.id === convertnumber)

    return (
        <div className="mt-12 mb-16 py-12" style={{ backgroundColor: '#F4F1E1' }}> {/* ivory background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
                        <Image
                            alt={methodfind?.name || 'Dish Image'}
                            src={methodfind?.image || '/notfound.jpg'}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            style={{ color: '#9b1b30' }} // deepRed
                        >
                            {methodfind?.name}
                        </h1>
                        <p
                            className="text-base sm:text-lg mb-6 leading-relaxed"
                            style={{ color: '#4B3A31' }} // darkBrown
                        >
                            {methodfind?.description}
                        </p>
                    </div>
                </div>

                {/* Add Comment Section */}
                <Comment />
            </div>
        </div>
    )
}

export default page
