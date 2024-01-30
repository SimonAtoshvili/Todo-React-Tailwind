import axios from 'axios'
import { useMyContext } from '../Context'
import { useState, useEffect } from 'react'

interface EditTodo {
    id: number,
    title: string,
    detail: string,
    done: boolean
}

export default function EditTask() {
    const { idNum, setEdit, count, setCount } = useMyContext()
    const [editTodo, setEditTodo] = useState<EditTodo | null>(null)
    const [title, setTitle] = useState<string | undefined>('')
    const [detail, setDetail] = useState<string | undefined>('')
    const [done, setDone] = useState<boolean | undefined>(undefined)

    const edited = {
        id: idNum,
        title: title,
        detail: detail,
        done: done
    }

    console.log(editTodo);
    

    useEffect(() => {
        axios.get(`http://localhost:3000/todos/${idNum}`).then((data2) => {
            setEditTodo(data2.data)
            setTitle(data2.data.title)
            setDetail(data2.data.detail)
            setDone(data2.data.done)
        }
        )
    }, [])
    return (
        <div className="w-[95%] pt-[40px] my-0 mx-auto flex flex-col items-center">
            <input
                type="text"
                placeholder="Title"
                className="w-[90%] mb-[40px] border-b-[1px] border-solid border-[#8B8787] py-[6px] text-[18px] focus:outline-purple-500 pl-[10px]"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Detail"
                className="w-[90%] mb-[40px] border-b-[1px] border-solid border-[#8B8787] py-[6px] text-[18px] focus:outline-purple-500 pl-[10px]"
                value={detail}
                onChange={(event) => {
                    setDetail(event.target.value)
                }}
            />
            <div>
                <div className="flex gap-[10px] mb-[40px] ">
                    <p className="text-[18px]" onClick={() => { setDone(false) }}>Undone</p>
                    <div className="w-[60px] h-[30px] border-solid border-[2px] border-purple-500 p-[3px] rounded-[15px] relative" onClick={() => { setDone(!done) }}>
                        <div className="w-[20px] h-[20px] rounded-full bg-black absolute top-[50%] transform translate-y-[-50%]" style={done ? { right: '3px' } : { left: '3px' }}></div>
                    </div>
                    <p className="text-[18px]" onClick={() => { setDone(true) }}>Done</p>
                </div>
            </div>
            <div className='w-[100%] flex justify-between items-center'>
                <button
                    style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    className='w-[40%] py-[26px] bg-purple-500 rounded-[25px] text-[20px] text-white '
                    onClick={() => {
                        if (title && detail) {
                            axios.put(`http://localhost:3000/todos/${idNum}`, edited)
                                .then(() => {
                                    setCount(count + 1)
                                    setEdit(false)
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });
                        }
                    }}
                >
                    Update
                </button>
                <button
                    style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    className='w-[40%] py-[26px] bg-purple-500 rounded-[25px] text-[20px] text-white '
                    onClick={() => { setEdit(false) }}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
