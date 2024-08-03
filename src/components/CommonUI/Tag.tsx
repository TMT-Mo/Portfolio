import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: IProps) => {
  return (
    <div
      className={`py-1 px-4 text-[14px] bg-[#183044] text-[#5dbeff] rounded-3xl whitespace-nowrap w-fit h-fit ${className}`}
    >
      {children}
    </div>
  );
};
