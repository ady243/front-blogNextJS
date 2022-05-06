import classNames from "classnames";

const Input = (props) => (
  <Input
    {...field}
    className={classNames(
      props.className,
      "px-1.5 py-1 border-2 border-blue-600"
    )}
  />
);

export default Input;
