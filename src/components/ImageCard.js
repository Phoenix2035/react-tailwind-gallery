import React from 'react';
import NumberSeparator from "../utils/NumberSeparator"

function ImageCard({image}) {
    const tags = image.tags.split(",")

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-4" style={{height: "32rem"}}>
            <img src={image.webformatURL} alt="" className="w-full h-64 object-cover"/>
            <div className="px-6 py-8">
                <div className="font-bold text-purple-500 text-1xl text-center mb-2 ">
                    Photo created by {image.user}
                </div>
                <ul>
                    <li><strong>Views: </strong>
                        {NumberSeparator(image.views)}
                    </li>
                    <li><strong>Download: </strong>
                        {NumberSeparator(image.downloads)}
                    </li>
                    <li><strong>Likes: </strong>
                        {NumberSeparator(image.likes)}
                    </li>
                </ul>
            </div>
            <div className="flex justify-center px-6 py-4">
                {
                    tags.map((tag, index) =>
                        <span key={index}
                              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                 {tag}
                        </span>
                    )
                }


            </div>
        </div>
    );
}

export default ImageCard;
