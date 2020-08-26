import React from "react";

const c = (...classes) => classes.join(' ');

export const Section = (props) => (<section {...props} className={c("section", props.className)}>{props.children}</section>);
export const Container = (props) => (<div {...props} className={c("container", props.className)}>{props.children}</div>);
export const Hero = (props) => (<section {...props} className={c("hero", props.className)}>{props.children}</section>);
export const ColumnContainer = (props) => (<div {...props} className={c("columns", props.className)}>{props.children}</div>);
export const Column = (props) => (<div {...props} className={c("column", props.className)}>{props.children}</div>);
export const Tile = (props) => (<div {...props} className={c("tile", props.className)}>{props.children}</div>);
export const TileChild = (props) => (<Tile {...props} className={c("is-child", props.className)}>{props.children}</Tile>);
export const TileAncestor = (props) => (<Tile {...props} className={c("is-ancestor", props.className)}>{props.children}</Tile>);
export const TileParent = (props) => (<Tile {...props} className={c("is-parent", props.className)}>{props.children}</Tile>);

