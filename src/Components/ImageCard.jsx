const ImageCard = ({item}) => {
    const {urls} = item;
    const {small} = urls;
    return (
        <div className="w-full h-96 m-auto  p-2">
            <img className="w-full h-full" src={small} alt="" />
        </div>
    );
};

export default ImageCard;