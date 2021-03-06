export default function subTitle(props) {
  const { value, className } = props;
  return (
    <p className={`md:text-base px-4 font-medium ${className}`}>{value}</p>
  );
}
