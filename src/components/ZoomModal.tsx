import React, { FC } from "react";

const ZoomModal: FC = () => {
  return (
    <div className={`absolute top-2 left-2 p-2 bg-white text-black z-50`}>
      Zoom in to see properties.
    </div>
  );
};

export default ZoomModal;
