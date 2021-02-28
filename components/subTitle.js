export default function subTitle(props) {
  const { value, className } = props;
  return <p className={`text-lg font-semibold ${className}`}>{value}</p>;
}
