import AutoHeading from "./AutoHeading";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const CustomMDXComponents = {
  h1: ({ children }: Props) => <AutoHeading level={1}>{children}</AutoHeading>,
  h2: ({ children }: Props) => <AutoHeading level={2}>{children}</AutoHeading>,
  h3: ({ children }: Props) => <AutoHeading level={3}>{children}</AutoHeading>,
  h4: ({ children }: Props) => <AutoHeading level={4}>{children}</AutoHeading>,
  h5: ({ children }: Props) => <AutoHeading level={5}>{children}</AutoHeading>,
  h6: ({ children }: Props) => <AutoHeading level={6}>{children}</AutoHeading>,
};

export default CustomMDXComponents;
