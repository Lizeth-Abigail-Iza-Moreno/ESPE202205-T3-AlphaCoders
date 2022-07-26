import React, { useEffect, useState } from 'react';
const Client = () => {
    const [cliente, setCliente] = useState(null);
    const url="https://httpbin.org/get";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const clienteData = {
                    Accept: data.headers.Accept,
                    Origin: data.headers.Origin,
                    agent: data.headers["Sec-Ch-Ua"],
                    language: data.headers["Accept-Language"],
                    origin: data.origin,
                    Host: data.headers.Host,
                    System: data.headers['Sec-Ch-Ua-Platform']
                };
                setCliente(clienteData);
            })
    }, []);
    return (
        <div>
            {cliente ? (<div>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>INFORMATION </th>
                            <th>JSON API</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>The files that are accepted: </th>
                            <td>{cliente.Accept}</td>
                        </tr>
                        <tr>
                            <th>The language:</th>
                            <td>{cliente.language}</td>
                        </tr>
                        <tr>
                            <th>The remote host:</th>
                            <td>{cliente.Host}</td>
                        </tr>
                        <tr>
                            <th>The IP that originated the request:</th>
                            <td>{cliente.origin}</td>
                        </tr>
                        <tr>
                            <th>The name of the browser:</th>
                            <td>{cliente.agent}</td>
                        </tr>
                        <tr>
                            <th>The Operating System of the local machine:</th>
                            <td>{cliente.System}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ) : null}
        </div>
)}
export default Client;