const Card = ({ id, title, description, bgColor }) => {
    return (
        <div key={id} className={`block m-1 max-w-sm p-6 rounded-lg shadow dark:bg-white bg-white hover:bg-${bgColor} cursor-pointer`}>
            <h5 className="mb-2 text-xl font-montserrat font-bold tracking-tight text-black dark:text-black">{title}</h5>
            <p className="font-montserrat text-[14px] text-black dark:text-black">{description}</p>
        </div>
    );
}

export default Card;