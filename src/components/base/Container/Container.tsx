import React from "react";

type WrapperTagType = "div" | "section" | "header" | "footer";

interface WrapperProps {
  children: React.ReactNode;
  tag?: WrapperTagType;
  classNames?: string;
  containerClassNames?: string;
}

const Container: React.FC<WrapperProps> = ({
  tag: Tag = "section",
  classNames,
  containerClassNames,
  children,
}) => (
  <Tag className={`w-full mx-auto overflow-hidden py-1-lg ${classNames}`}>
    <div className="max-w-[1920px] w-full mx-auto overflow-hidden">
      <div
        className={`w-full max-w-md mx-auto overflow-hidden ${containerClassNames}`}
      >
        {children}
      </div>
    </div>
  </Tag>
);

export default Container;
