import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios'

interface MyContextType {
    data: Data[] | null,
    add: boolean,
    edit: boolean
    setAdd: React.Dispatch<React.SetStateAction<boolean>>,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    idNum: number,
    setIdNum: React.Dispatch<React.SetStateAction<number>>,
    filter: boolean,
    setFilter: React.Dispatch<React.SetStateAction<boolean>>
}

interface Data {
    id: number,
    title: string,
    detail: string,
    done: boolean,
}

const MyContext = createContext<MyContextType | undefined>(undefined)

export const MyProvider = ({ children }: any) => {

    const [data, setData] = useState<Data[] | null>(null);
    const [add, setAdd] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [idNum, setIdNum] = useState<number>(0);
    const [filter, setFilter] = useState<boolean>(false)

    useEffect(() => {
        axios.get('http://localhost:3000/todos').then((data2) => setData(data2.data))
    }, [count])


    return (
        <MyContext.Provider value={{ data, add, setAdd, edit, setEdit, count, setCount, idNum, setIdNum, filter, setFilter }}>
            {children}
        </MyContext.Provider>
    )
}


export const useMyContext = () => {
    const context = useContext(MyContext)
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
}