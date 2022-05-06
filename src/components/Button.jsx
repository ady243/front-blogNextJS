import classNames from "classnames";

const Button = (props) => (
  <button
    {...props}
    className={classNames(
      props.className,
      "px-2 py-1.5 bg-blue-600 text-white font-bold active:bg-blue-700"
    )}
  />
);
export default Button;
