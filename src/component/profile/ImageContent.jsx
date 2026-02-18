import React from "react";

const ImageContent = ({ items }) => {
  return (
    <div className="flex gap-3 py-3">
      {items?.slice(0, 4).map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt=""
          className="w-16 h-16 object-cover rounded"
        />
      ))}
    </div>
  );
};

export default ImageContent;
