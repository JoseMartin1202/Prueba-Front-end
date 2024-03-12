import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const data = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(1953, 5, 24)
    },
    {
        id: 2,
        nombre: 'Maria',
        apellido: 'Lopez',
        edad: 30,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1988, 5, 24)
    },
    {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Ramirez',
        edad: 40,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(1988, 5, 25)

    },
    {
        id: 4,
        nombre: 'Ana',
        apellido: 'Gomez',
        edad: 35,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1999, 5, 24)
    },
    {
        id: 5,
        nombre: 'Luis',
        apellido: 'Gonzalez',
        edad: 50,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(2001, 5, 24)
    },
    {
        id: 6,
        nombre: 'Rosa',
        apellido: 'Hernandez',
        edad: 45,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1953, 5, 24)
    },
    {
        id: 7,
        nombre: 'Carlos',
        apellido: 'Martinez',
        edad: 55,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(1988, 5, 24)
    },
    {
        id: 8,
        nombre: 'Sofia',
        apellido: 'Torres',
        edad: 60,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1988, 6, 24)
    },
    {
        id: 9,
        nombre: 'Javier',
        apellido: 'Diaz',
        edad: 65,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(2001, 12, 24)
    },
    {
        id: 10,
        nombre: 'Lorena',
        apellido: 'Vazquez',
        edad: 70,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1999, 5, 25)
    },
    {
        id: 11,
        nombre: 'Ricardo',
        apellido: 'Perez',
        edad: 75,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(1953, 5, 24)
    },
    {
        id: 12,
        nombre: 'Leticia',
        apellido: 'Lopez',
        edad: 80,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1953, 5, 24)
    },
    {
        id: 13,
        nombre: 'Jose',
        apellido: 'Ramirez',
        edad: 85,
        sexo: 'M',
        telefono: '1234567890',
        email: '',
        fechaNacimiento: new Date(1953, 5, 24)
    },
    {
        id: 14,
        nombre: 'Luisa',
        apellido: 'Gomez',
        edad: 90,
        sexo: 'F',
        telefono: '0987654321',
        email: '',
        fechaNacimiento: new Date(1953, 5, 24)
    },
]

const COLUMNS = [
    { name: "Nombre", key: "nombre", search: true },
    { name: "Apellido", key: "apellido", search: true },
    { name: "Edad", key: "edad" },
    { name: "Sexo", key: "sexo" },
    { name: "Telefono", key: "telefono" },
    { name: "Email", key: "email", search: true },
    { name: "Fecha de Nacimiento", key: "fechaNacimiento" },
]

const CrudPrueba = () => {

    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [list, setList] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        await sleep(1000)
        setList(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        handleBuscar()
    }, [search])

    const handleBuscar = () => {
        let searchValue = search.toLowerCase()
        const filteredList = data.filter(persona => {
            return COLUMNS.some(col => {
                let atribute = persona[col.key].toString().toLowerCase()
                return col.search && atribute.includes(searchValue)
            })
        })
        setList(filteredList)
    }

    return (
        <div className='h-screen'>
            {/* Crud header */}
            <div
                className='flex items-center justify-between w-full h-10 px-4 bg-blue-200'>
                <button>
                    agregar
                </button>
                <div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" />
                </div>
            </div>
            {/* Table */}
            <div className='w-full h-full overflow-scroll bg-blue-300'>
                {
                    loading ? <Loader /> :
                        <table className='w-full emerge'>
                            <thead>
                                <tr className='sticky top-0 bg-white'>
                                    {COLUMNS.map((col, i) => <th key={`E_${i}`}>
                                        {col.name}
                                    </th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list?.map((persona, i) => <tr key={i}>
                                        {COLUMNS.map((col, j) => <td key={`C_${i}_${j}`}>
                                            {persona[col.key].toString()}
                                        </td>)}
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    )
}

export default CrudPrueba