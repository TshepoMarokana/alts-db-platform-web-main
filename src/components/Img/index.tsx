import { FC, useState } from "react";

type FilterItem = {
    src: string;
    id?: string;
    className?: string;
    clickable?: boolean;
}

const Img: FC<FilterItem> = ({src, className, id, clickable = false}) => {
    const [clicked, setClicked] = useState(false);

    const toggleImg = (): void => {
        setClicked(state => !state)
    }

    if(!clickable) {
        return <img src={src} alt="" className={className} id={id}/>
    }
    
    if(!clicked) {
        return <img src={src} alt="" className={className} id={id} onClick={toggleImg}/>
    }

    if(clicked) {
        return (
            <div >
                <div >
                </div>
                <div >
                    <img src={src} alt="" />
                </div>
            </div>
        )
    }
    return null;
}

export default Img;
