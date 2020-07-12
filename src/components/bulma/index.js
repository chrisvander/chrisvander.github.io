import React from "react";

const c = (...classes) => classes.join(' ');

export const Section = ({ children, className, style }) => (<section style={style} className={c("section", className)}>{children}</section>);
export const Container = ({ children, className, style }) => (<div style={style} className={c("container", className)}>{children}</div>);
export const Hero = ({ children, className, style }) => (<section style={style} className={c("hero", className)}>{children}</section>);