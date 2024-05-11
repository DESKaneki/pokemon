import { useEffect, useState } from "react"

export const Character = (props:any) => {
    const [currentPagePokemon, setCurrentPagePokemon] = useState<any>([])
    const [currentPage, setCurrentPage] = useState(0)
    

    const decrementPage = () => {
        const newPageValue = currentPage - 1;
        setCurrentPage(newPageValue);
        const endArray = newPageValue * 10;
        const slicedArray = props.pokemon.slice(endArray - 10, endArray);
        setCurrentPagePokemon(slicedArray);
    }

    const incrementPage = () => {
        const newPageValue = currentPage + 1
        setCurrentPage(newPageValue);
        const endArray = newPageValue * 10;
        const slicedArray = props.pokemon.slice(endArray - 10, endArray);
        setCurrentPagePokemon(slicedArray);
    }

    useEffect(() => {
        incrementPage()
    }, [])

    return (
        <div className="w-full">
            <div className="mb-5">
                <div className="w-full" >
                    <ol className="w-full">
                    {currentPagePokemon.map((pokemon: any, index:number) =>  {
                        return (<div key={index}  className="w-full flex justify-center align-center p-3"><span className="pr-2">{pokemon.index}. </span><li className="w-full align-left">
                            {pokemon.name}
                        </li> </div>)
                    })}
                    </ol>
                </div>
            </div>
            <footer className="flex justify-between">
                <div>{currentPage > 1 && <button className="p-2 bg-black text-white rounded" onClick={() => decrementPage()}>Previous</button>}</div>
                <div className="p-2">page {currentPage}</div>
                <div>{currentPage < props.pages &&<button className="p-2 bg-black text-white rounded" onClick={() => incrementPage()}>Next</button>}</div>
            </footer>
        </div>
    )
}