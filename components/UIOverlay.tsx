mport React from 'react';

interface UIOverlayProps {
  isSharedView?: boolean;
}

export const UIOverlay: React.FC<UIOverlayProps> = ({ isSharedView }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* 顶部标题区域保留，但内容在index.html里控制了 */}
      <header className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-500 opacity-0">
          Merry Christmas
        </h1>
      </header>

      {/* 右下角区域已彻底移除 */}
    </div>
  );
};

export default UIOverlay;
