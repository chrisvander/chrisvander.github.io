import React from "react";

const c = (...classes) => classes.join(' ');

export const Section = ({ children, className }) => (<section className={c("section", className)}>{children}</section>);
export const Container = ({ children, className }) => (<div className={c("container", className)}>{children}</div>);
export const Hero = ({ children, className }) => (<section className={c("hero", className)}>{children}</section>);