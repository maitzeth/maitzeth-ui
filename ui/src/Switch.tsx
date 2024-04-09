import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

const variants = {
  rounded: 'rounded',
  square: 'square',
} as const;

const sizes = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

const sizeClass = {
  sm: 'w-[50px] h-[25px] p-[1.5px]',
  md: 'w-[70px] h-[36px] p-[2px]',
  lg: 'w-[85px] h-[42px] p-[2.5px]',
} as const;

const controlSizeClass = {
  sm: 'w-[20px] h-[20px]',
  md: 'w-[30px] h-[30px]',
  lg: 'w-[35px] h-[35px]',
} as const;

type Props = {
  size?: keyof typeof sizes;
  sizeClassName?: string;
  controlClassName?: string;
  variant?: keyof typeof variants;
  onChange?: (enabled: boolean) => void;
};

const switchBaseClassName = "bg-[rgba(255,255,255,0.4)] flex justify-[flex-start] cursor-pointer border border-gray-200 transition-all";

export const Switch = forwardRef<HTMLButtonElement, Props>(({
  size = 'md',
  sizeClassName,
  controlClassName,
  variant = 'rounded',
  onChange,
}, ref) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      const newVal = !prev;
      onChange?.(newVal);
      return newVal;
    });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn ? 'true' : 'false'}
      ref={ref}
      className={cn(
        switchBaseClassName,
        "focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-sky-950",
        sizeClass[size],
        sizeClassName,
        {
          "justify-end": isOn,
          "rounded-[50px]": variant === variants.rounded,
        }
      )}
      onClick={toggleSwitch}
    >
      <motion.div
        className={cn(
          "bg-gray-200 flex items-center justify-center transition-colors",
          controlSizeClass[size],
          controlClassName,
          {
            "bg-sky-950": isOn,
            "rounded-[40px]": variant === variants.rounded
          }
        )}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35
        }}
      >
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          {isOn && (
            <>
              <motion.path
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                transition={{ delay: 0.1 }}
                className="fill-slate-200"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <motion.path
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="fill-slate-200"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </>
          )}

          {!isOn && (
            <>
              <motion.path
                initial={{ opacity: 0, rotate: 360 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4 }}
                className="fill-sky-950"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <motion.path
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="fill-sky-950" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </>
          )}
        </svg>
      </motion.div>
    </button>
  );
});
