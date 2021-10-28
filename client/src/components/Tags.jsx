import React from 'react'
export default function Tags(props) {
    return (
        <div className="px-6 pt-4 pb-2">
            {props.tags.map((tag, index) => {
                return (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tag}
                    </span>
                )
            })}
        </div>
    )
}
