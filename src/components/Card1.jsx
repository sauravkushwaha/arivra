import React from 'react';

const Card = (props) => {
  return (
    <div className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-md transition-transform hover:scale-105">
      <img
        className="w-full h-40 object-cover rounded"
        loading="lazy"
        src={props.imageSrc}
        alt={props.title}
      />
      <h1 className="text-xl font-semibold mt-4 dark:text-gray-50 text-gray-900">{props.title}</h1>
      <p className="dark:text-gray-300 text-gray-900">{props.description}</p>
    </div>
  );
};

export default Card;