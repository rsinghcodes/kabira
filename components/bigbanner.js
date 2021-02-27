export default function bigbanner(props) {
  const { source, alt } = props;
  return (
    <div className="flex justify-between items-center w-screen">
      <img
        src={source}
        alt={alt}
        className="w-screen h-52 md:h-96 lg:min-h-75custom opacity-60"
      />
    </div>
  );
}
