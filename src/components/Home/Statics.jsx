

const Statics = ({ number, title }) => {
  return (
    <div>
      <h3 className="text-xl">{number}</h3>
      <h3 className="text-xl text-gray-400">{title}</h3>
    </div>
  );
}

export default Statics;
