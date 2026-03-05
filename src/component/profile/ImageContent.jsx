import React from "react";

const ImageContent = ({ items }) => {
  return (
    <div className="flex gap-3 py-3">
      {items?.slice(0, 4).map((item) => (
        <a   key={item.id} href="!#"><img
        
          src={item.image}
          alt=""
          className="w-16 h-16 object-cover rounded"
        />
        </a>
      ))}
    </div>
  );
};

export default ImageContent;
