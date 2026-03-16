// import React from 'react'


interface  CardProps {
  name: string;
  color: string
}

const Card = (props: CardProps) => {

  const { name, color } = props;
  return (
    <div
     style={{ backgroundColor: color }}
    className="p-20  w-20 flex justify-center items-center mx-auto">
      <p className="text-white">{name}</p>
    </div>
  );
};

export default Card;
