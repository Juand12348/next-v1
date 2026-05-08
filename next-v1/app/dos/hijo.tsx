export default function Hijo({children}:{children: string}){
    return (
        <div>
            este es mi hijo {children}
        </div>
    )
}


export function Hijo2({children}:{children: string}){
    return (
        <div>
            este es mi hijo2 {children}
        </div>
    )
}
