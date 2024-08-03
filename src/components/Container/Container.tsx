import React from "react";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
    className: string
    // ref:  React.RefObject<HTMLDivElement>
}
const Container = ({children, className, ref, ...rest}: IProps)=>{
    const defaultClass = 'container mx-auto '
    return <div className={`${defaultClass} ${className}`} ref={ref} {...rest}>{children}</div>
}

export default Container;