export default function title(props) {
  const { value, className } = props;
  return (
    <h1
      className={`font-bold tracking-wide text-2xl md:text-4xl mt-6 ${className}`}
    >
      {value}
    </h1>
  );
}
