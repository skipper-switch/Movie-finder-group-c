interface  StartwarsCardProps {
  name: string;
  image: string;
  description: string;

}

const StartwarsCard = (props: StartwarsCardProps) => {



  const { name, image, description } = props
  return (
    <div className="flex bg-[#1d1e1f] text-white  w-full lg:w-[550px]  h-[200px] rounded-sm">
      <div className="w-1/2">
        <img
          src={image}
          alt="character-img"
          // width="100%"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="py-[10px] px-[15px] w-1/2 hi">
        <h1 className="text-[20px] ">{name}</h1>
        <p className="text-[13px]">
        {description}
        </p>
      </div>
    </div>
  );
};

export default StartwarsCard;
