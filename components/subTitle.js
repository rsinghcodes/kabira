export default function subTitle(props) {
  const { value, className } = props;
  return <p className={`text-sm px-4 font-medium ${className}`}>{value}</p>;
}
