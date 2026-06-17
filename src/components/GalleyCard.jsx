import Image from "next/image";

const GalleryCard = ({ food }) => {
    return (
        <div>


            <div className="group relative overflow-hidden rounded-2xl mb-4 break-inside-avoid ">

                <Image
                    src={food.image_link}
                    alt={food.dish_name}
                    width={300}
                    height={2}
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                </div>


            </div>
            
     
        </div>

    );
};

export default GalleryCard;