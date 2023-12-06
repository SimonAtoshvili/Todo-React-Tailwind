import { useMyContext } from "../Context"


export default function Footer(props: { setAdd: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { filter, setFilter } = useMyContext()
    return (
        <footer className="relative flex justify-between items-center py-[12px] px-[90px] w-full h-[100px] bg-white">
            <div className="flex flex-col item-center">
                <div onClick={() => { setFilter(false) }}>
                    <svg width="30" height="30" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Vector">
                            <path id="Vector-65" d="M6.25 0.625C5.83579 0.625 5.5 0.960786 5.5 1.375C5.5 1.78921 5.83579 2.125 6.25 2.125V0.625ZM18.75 2.125C19.1642 2.125 19.5 1.78921 19.5 1.375C19.5 0.960786 19.1642 0.625 18.75 0.625V2.125ZM1.25 0.625C0.835786 0.625 0.5 0.960786 0.5 1.375C0.5 1.78921 0.835786 2.125 1.25 2.125V0.625ZM2.5 2.125C2.91421 2.125 3.25 1.78921 3.25 1.375C3.25 0.960786 2.91421 0.625 2.5 0.625V2.125ZM1.25 6.875C0.835786 6.875 0.5 7.21079 0.5 7.625C0.5 8.03921 0.835786 8.375 1.25 8.375V6.875ZM2.5 8.375C2.91421 8.375 3.25 8.03921 3.25 7.625C3.25 7.21079 2.91421 6.875 2.5 6.875V8.375ZM1.25 13.125C0.835786 13.125 0.5 13.4608 0.5 13.875C0.5 14.2892 0.835786 14.625 1.25 14.625V13.125ZM2.5 14.625C2.91421 14.625 3.25 14.2892 3.25 13.875C3.25 13.4608 2.91421 13.125 2.5 13.125V14.625ZM6.25 6.875C5.83579 6.875 5.5 7.21079 5.5 7.625C5.5 8.03921 5.83579 8.375 6.25 8.375V6.875ZM18.75 8.375C19.1642 8.375 19.5 8.03921 19.5 7.625C19.5 7.21079 19.1642 6.875 18.75 6.875V8.375ZM6.25 13.125C5.83579 13.125 5.5 13.4608 5.5 13.875C5.5 14.2892 5.83579 14.625 6.25 14.625V13.125ZM18.75 14.625C19.1642 14.625 19.5 14.2892 19.5 13.875C19.5 13.4608 19.1642 13.125 18.75 13.125V14.625ZM6.25 2.125H18.75V0.625H6.25V2.125ZM1.25 2.125H2.5V0.625H1.25V2.125ZM1.25 8.375H2.5V6.875H1.25V8.375ZM1.25 14.625H2.5V13.125H1.25V14.625ZM6.25 8.375H18.75V6.875H6.25V8.375ZM6.25 14.625H18.75V13.125H6.25V14.625Z" fill={`${filter ? "#8B8787" : "#9333EA"}`} />
                        </g>
                    </svg>
                </div>
                <p
                    className="text-[12px] text-center font-[700] tracking-[1.5px]"
                    style={!filter ? { color: '#9333EA' } : { color: '#8B8787' }}
                >
                    All
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div onClick={() => { setFilter(true) }}>
                    <svg width="30" height="30" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Vector">
                            <path id="Vector-17" d="M1.25 6.625L7.08375 12.25L18.75 1" stroke={`${!filter ? "#8B8787" : "#9333EA"}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                </div>
                <p
                    className="text-[12px] text-center font-[700] tracking-[1.5px]"
                    style={filter ? { color: '#9333EA' } : { color: '#8B8787' }}
                >
                    Completed
                </p>
            </div>
            <div
                className="absolute top-[-100px] right-[22px] w-[70px] h-[70px] bg-purple-500 rounded-[50%] flex justify-center items-center text-[40px] text-[#fff]"
                onClick={() => { props.setAdd(true) }}
            >
                +
            </div>
        </footer>
    )
}
