import Link from "next/link";
import Props from "./props";
import { useAppContext } from "../contexto/app-context";

export default function Uno(){
    const {nombre} = useAppContext();


    return(
        <div>
            <Link href='/'>Boton Home</Link>
            <Link href='/uno'>Boton Uno.</Link>
            <Link href='/dos'>Boton Dos</Link>
            <Props nombre={nombre}/>
        </div>
    ); 



}