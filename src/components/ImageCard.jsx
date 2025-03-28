import React from "react";

const ImageCard = ({ image }) => {
  //split takes a stringand turns it into an array, split by the coma so that each word is in its array item
  const tags = image.tags.split(",").slice(0, 3);
  // slice takes the first 3 items from the array
  //map takes the array and returns a new array with the same items but
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt="Random from Unsplash"
        className="hover:scale-105 transition-transform duration-300 w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 flex flex-wrap">
        {tags.map((tag) => (
          <span
            key={image.id + tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-xs text-gray-700 mb-2 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
