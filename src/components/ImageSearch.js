import React, {useState} from 'react';

function ImageSearch({searchText}) {
    const [text, setText] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        searchText(text)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                    <input
                        onChange={e => setText(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-3 px-3 outline-none"
                        type="text"
                        placeholder="Search Image..."
                    />

                    <button
                        type="submit"
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-white p-2 rounded  focus:outline-none">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ImageSearch;
