import React, { FC } from "react";

type Item = {
  id: number;
  text: string;
};

type Props = {
  color: string;
  size: number;
  data: Array<{ id: number; text: string }>;
};

const Title: FC<Props> = ({ color, size, data }) => {
  return <div>Hello there</div>;
};

export default Title;
