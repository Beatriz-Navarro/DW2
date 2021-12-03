import { RepositoryItem } from "./RepositoryItem"
import { Counter } from "./Counter"
const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/Beatriz-Navarro"
}
export function RepositoryList(){
    return(
       <>
                <RepositoryItem repository={repository}/>
                <Counter/>
            </>
        
    )
}