import { useEffect, useState } from "react";
import Usuario from "../models/usuario";
import UsuarioService from "../services/Usuario";

const UsuariosPage = function () {

    enum Estado{
        Lendo,
        ErroLer,
        Lido,
    };

    const [estado, setEstado] = useState<Estado>(Estado.Lido);
    const [usuarios, setUsuarios] = useState<Usuario[]>([
        {
            id: 1,
            nome:'Ana',
            login:'ana',
            senha: '123',
        },
        {
            id: 2,
            nome:'Breno',
            login:'breno',
            senha: '123',
        }
    
    ]);

    useEffect(function() {
        UsuarioService.lerTodos(
        function (){
            setEstado(Estado.Lido);
        },
        function (){
            setEstado(Estado.ErroLer);
        }
        )}, [Estado.ErroLer, Estado.Lido]);

    return(
        <div>
            {(estado == Estado.Lendo) && (
            <p>Carregando...</p>)}

            {(estado == Estado.ErroLer) && (
            <>
                <p>ERRO! Não foi possível carregar.</p>
                <button>Carregar</button>
            </>)}

            {(estado == Estado.Lido) && (
            <>
                <h1>Usuários</h1>
                <ul>
                    {usuarios.map(function(usuario) {
                        return <li>{usuario.nome}</li>
                    })}
                </ul>
            <button>Novo</button>
            </>)}
        </div>
    );
};

export default UsuariosPage;