import { useState } from "react"
import axios from 'axios'
import { useMyContext } from "../Context"

export default function AddTask() {
    const { setCount, count, setAdd } = useMyContext();
    const [title, setTitle] = useState<string>('')
    const [detail, setDetail] = useState<string>('')
    const [done, setDone] = useState<boolean>(false)

    const Todo = {
        title: title,
        detail: detail,
        done: done
    }
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
            <div className="flex gap-[10px] mb-[40px] ">
                <p className="text-[18px]" onClick={() => { setDone(false) }}>Undone</p>
                <div className="w-[60px] h-[30px] border-solid border-[2px] border-purple-500 p-[3px] rounded-[15px] relative" onClick={() => { setDone(!done) }}>
                    <div className="w-[20px] h-[20px] rounded-full bg-black absolute top-[50%] transform translate-y-[-50%]" style={done ? { right: '3px' } : { left: '3px' }}></div>
                </div>
                <p className="text-[18px]" onClick={() => { setDone(true) }}>Done</p>
            </div>
            <button
                style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                className="w-[100%] py-[26px] bg-purple-500 text-[20px] rounded-[25px] text-white "
                onClick={() => {
                    if (title && detail) {
                        axios.post('http://localhost:3000/todos', Todo)
                            .then(() => {
                                setCount(count + 1)
                                setAdd(false)
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    }
                }}
            >
                ADD
            </button>
        </div >
    )
}


