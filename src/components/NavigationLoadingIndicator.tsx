'use client';

import { useEffect, useState } from 'react';

import { useNavigationLoading } from './NavigationLoadingProvider';

export function NavigationLoadingIndicator() {
  const { isLoading } = useNavigationLoading();
  const [visible, setVisible] = useState(false);
  const [doorsClosed, setDoorsClosed] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setDoorsClosed(true);
    } else {
      setDoorsClosed(false);
      setVisible(false);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <>
      {/* 全屏加载遮罩 */}
      <div
        className='fixed inset-0 z-[50] bg-white/90 backdrop-blur-xl transition-opacity duration-500 dark:bg-gray-900/90'
        style={{
          opacity: doorsClosed ? 1 : 0,
          pointerEvents: doorsClosed ? 'auto' : 'none',
        }}
      >
        {/* 中心加载动画 */}
        <div className='flex items-center justify-center h-full'>
          <div className='relative'>
            {/* 兔子动画 ✨ (替换了原来的月亮) */}
            <div className='relative w-20 h-20 flex items-center justify-center'>
              <span
                className='text-6xl animate-bounce'
                style={{ animationDuration: '2s' }} // 保持和原来月亮一致的动画时间
              >
                🐰
              </span>
            </div>
          </div>

          {/* 加载文字 */}
          <div className='absolute mt-32 text-gray-700 dark:text-gray-300 font-medium text-sm'>
            <span className='animate-pulse'>🐰</span>
            <span className='animate-pulse' style={{ animationDelay: '0.2s' }}>
              {' '}
              Young正在玩命加载中
            </span>
            <span className='animate-pulse' style={{ animationDelay: '0.4s' }}>
              {' '}
              🐇
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
