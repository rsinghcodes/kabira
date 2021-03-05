export default function subTitle(props) {
  const { value, className } = props;
  return <p className={`md:text-base font-medium ${className}`}>{value}</p>;
}
