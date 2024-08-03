import React from 'react'

interface IProps {
    children: React.ReactNode
    className?: string
    
}

export const HighlightWord = ({children, className}: IProps) => {
  return (
    <span className={`text-white  font-semibold cursor-pointer hover:text-blue-400  ${className}`}>{
        children
    }</span>
  )
}
