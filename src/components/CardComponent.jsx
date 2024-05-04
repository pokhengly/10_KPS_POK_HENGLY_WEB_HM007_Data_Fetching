import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Link from "next/link";

const CardComponent = async ({data}) => {
    console.log(data)
    return (
        <>
            <Carousel opts={{align: "start",}} className="w-full">
                <CarouselContent>
                    {data?.map((movie) => (
                        <CarouselItem key={movie.id} className="basis-1/5 mr-4">
                            <Link className="p-1" href={"#"}>
                                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
                                    <Image src={movie.image} width={380} height={256} alt="Mountain"
                                           className="p-6 w-full h-64 object-cover"/>
                                    <div className="mx-6">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Beautiful Mountain
                                            View</h2>
                                        <p className="line-clamp-2 text-gray-700 leading-tight mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien
                                            porttitor,
                                            blandit velit ac, vehicula elit. Nunc et ex at turpis rutrum viverra.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>

    );
}

export default CardComponent;