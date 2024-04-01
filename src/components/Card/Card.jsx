const Card = ({ card, cardColor }) => {
    return (
        <>
            <div key={card.id} className={`block m-1 max-w-sm p-6 rounded-lg shadow hover:bg-sidebar dark:bg-white dark:border-gray-700 dark:hover:bg-${cardColor} cursor-pointer`}>
                <h5 className="mb-2 text-xl font-montserrat font-bold tracking-tight text-black dark:text-black">{card.title}</h5>
                <p className="font-montserrat text-[14px] text-black dark:text-black">{card.description}</p>
            </div>
        </>
    );
}

export default Card;