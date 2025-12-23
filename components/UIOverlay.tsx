import React from 'react';

interface UIOverlayProps {
  isSharedView?: boolean;
}

export const UIOverlay: React.FC<UIOverlayProps> = ({ isSharedView }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* 这里的标题已经透明化，因为你在index.html里写了To Leon */}
      <header className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent">
          Merry Christmas
        </h1>
      </header>
      {/* 右下角区域已彻底删除，保证不会报错 */}
    </div>
  );
};

export default UIOverlay;
