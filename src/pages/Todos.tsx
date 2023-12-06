import { useMyContext } from '../Context'
import {useEffect} from 'react'
import Pencil from '/assets/pencil.svg'
import Trash from '/assets/trash.svg'
import axios from 'axios'

interface Data {
    id: number,
    title: string,
    detail: string,
    done: boolean
}

interface Props {
    data: Data[] | null,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
}


const Todos: React.FC<Props> = ({ data, setEdit }) => {
    const { count, setCount, setIdNum, filter, setFilter } = useMyContext()

    useEffect(() => {
        setFilter(false)
    }, [])
    return (
        <>
            {
                data ?
                    <div style={{ height: 'calc(100% - 100px)' }} className="bg-[#dab6fb] flex flex-col items-center gap-[21px] pt-[22px] pb-[120px] overflow-y-auto">
                        {(filter ? data.filter((element) => element.done == true) : data).map((item, index) => (
                            <div
                                style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                                key={index}
                                className='flex justify-between items-center w-[95%] h-[85px] py-[22px] pl-[19px] pr-[25px] bg-white rounded-[15px] '
                            >
                                <div>
                                    <h2 className='text-purple-500 font-semibold font-[13px] uppercase mb-[5px]'>
                                        {item.title}
                                    </h2>
                                    <p className='font-[10px]'>
                                        {item.detail}
                                    </p>
                                </div>
                                <div className='flex items-center gap-[40px] '>
                                    <img
                                        src={Pencil}
                                        alt="pencil"
                                        className='w-[25px] h-25px '
                                        onClick={() => {
                                            setEdit(true)
                                            setIdNum(item.id)
                                        }}
                                    />
                                    <img
                                        src={Trash}
                                        alt="trash"
                                        className='w-[25px] h-25px'
                                        onClick={() => {
                                            axios.delete(`http://localhost:3000/todos/${item.id}`)
                                                .then(() => {
                                                    setCount(count + 1)
                                                })
                                                .catch(error => {
                                                    console.error('Error:', error);
                                                });
                                        }}
                                    />
                                    <div
                                        className={item.done ? 'bg-purple-500 rounded-full' : 'rounded-full'}
                                        onClick={() => {
                                            const updatedDoneState = !item.done
                                            const obj = {
                                                id: item.id,
                                                title: item.title,
                                                detail: item.detail,
                                                done: updatedDoneState
                                            }
                                            axios.put(`http://localhost:3000/todos/${item.id}`, obj)
                                                .then(() => {
                                                    setCount(count + 1);
                                                    
                                                })
                                                .catch(error => {
                                                    console.error('Error:', error);
                                                });
                                        }}
                                    >
                                        <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Vector">
                                                <path id="Vector-59" fillRule="evenodd" clipRule="evenodd" d="M1.20834 8.50017C1.20859 5.02152 3.6661 2.02747 7.07795 1.34905C10.4898 0.670623 13.9058 2.49678 15.2368 5.71072C16.5678 8.92465 15.4432 12.6313 12.5507 14.5637C9.6582 16.4962 5.80341 16.1163 3.34376 13.6564C1.97634 12.2889 1.2082 10.4341 1.20834 8.50017Z" stroke={item.done ? "#FFF" : "#B3B7EE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path id="Vector-60" d="M4.85419 8.50015L7.2844 10.9304L12.1459 6.06995" stroke={item.done ? "#FFF" : "#B3B7EE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div >
                    : null
            }
        </>
    )
}

export default Todos;
