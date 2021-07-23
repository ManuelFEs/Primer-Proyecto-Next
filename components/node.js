import {useRouter} from "next/router";
import Link from "next/link";

//Agregar estilo por aparte para hacerlo dinámico y con mejor funcionalidad

const Linked = (link, name) => {
    const router = useRouter();
    var clase = "nav-link";
    //console.log(router.pathname, name);
    if(router.pathname == link){
        clase = "nav-link active";
    }

    return(
    <li class="nav-item">
        <Link href={link}>
            <a class={clase} >{name}</a>
        </Link>
    </li>
    )

}

const Node = () =>{

    const headerLinks = ["/about","/content","/content2"];
    const headerNames = ["Acerca de","contenido","contenido2"];
    const linki = [];
    headerLinks.forEach((element, index) => {
        linki[index] = Linked(element, headerNames[index]);
    });


    return(
        <>   
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
            <Link href="/">
                <a class="navbar-brand">Inicio</a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                {linki}
            </ul>
        </div>
        </div>
        </nav>
        </>
    )
}


export default Node;