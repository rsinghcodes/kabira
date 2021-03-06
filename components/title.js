export default function title(props) {
  const { value, className } = props;
  return (
    <h1 className={`font-bold tracking-wide text-3xl ${className}`}>{value}</h1>
  );
}
