import { getAllByText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const PersonsSearch = () => {
    const [person, setPerson] = useState();
    const url = "http://3.86.206.55:3003/onlinestore/persons";
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setPerson(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, []);

    return (
        <div>
            <div class="card-body">
                    <br />
                </div>
                
            <table className="table table-hover">
                <thead>
                    <tr className="text-center">
                        <th scope="col" >Id</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">usuario</th>
                        <th scope="col">Tipo Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {!person ? '1' :
                        person.map((person, index) => {
                            return <tr className="table-info" >
                                <td className="text-center">{person.id}</td>
                                <td className="text-center">{person.cedula}</td>
                                <td className="text-center">{person.nombre}</td>
                                <td className="text-center">{person.apellido}</td>
                                <td className="text-center">{person.usuario}</td>
                                <td className="text-center">{person.Tipo_Usuario}</td>
                            </tr>
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PersonsSearch;