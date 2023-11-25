const CardPengurus = ( props ) => {
  return (
    <>
      <div className="ex:w-[250px] md:w-[900px] h-full bg-white rounded-2xl p-5 flex flex-col justify-end items-start gap-5">
        <p className="p-1 sm:text-sm md:text-lg bg-gray-300 rounded-sm">{props.nama}</p>
        <p className="p-1 sm:text-sm md:text-lg bg-gray-300 rounded-sm">
          {props.jabatan}
        </p>
      </div>
    </>
  );
};

export default CardPengurus;
