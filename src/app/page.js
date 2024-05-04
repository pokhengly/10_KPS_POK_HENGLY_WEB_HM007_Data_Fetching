import CardComponent from "@/components/CardComponent";
import {getAllMovies} from "@/service/movies";


export default async function Home() {

    const movies = await getAllMovies();
    console.log(movies.payload)
    return (
        <main className={"bg-pink-700"}>
            <div className={"py-10 mx-10"}>
                <div className={"text-2xl text-white"}>All Movies &gt;</div>
                    <CardComponent data={movies.payload}/>

                <div className={"text-2xl text-white"}>Action Movies &gt;</div>
                <div className="carousel gap-4 w-full mb-7 mt-5 overflow-scroll">
                    <div className="carousel-item">
                        <CardComponent/>
                    </div>
                </div>
            </div>
        </main>
    );
}
