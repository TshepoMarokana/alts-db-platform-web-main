import { FC } from "react";

const Iframe: FC<{src?: string}> = ({src}) => {
    if(src?.includes('youtube')) {        
        return (        
            <iframe  width="560" height="315" src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        )
    }

    if(src?.includes('pdf')) {
        return (
            <iframe src={src} ></iframe>
        )
    }
    
    return null;
}

export default Iframe;
