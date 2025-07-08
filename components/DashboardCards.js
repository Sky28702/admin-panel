const Cards = (props) => {
  return (
    <div className="shadow shadow-slate-300 rounded-[8px] p-2 h-50 w-100">
      <h1 className="font-medium text-2xl mt-1 mb-2">{props.title}</h1>
      <p className=" mb-10 mt-10 text-3xl font-medium">{props.number}</p>
      <p className="text-slate-600">{props.paragraph}</p>
    </div>
  );
};

export default Cards;
