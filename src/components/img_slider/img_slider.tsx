import { FC } from 'react';
import {useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'
import { IMAGES_URL } from "../../constants/configs";

const Img_slider: FC<{imgs: Array<string>}> = ({imgs}) => {
    const middle = useMediaQuery('(max-width:1000px)');
    const small = useMediaQuery('(max-width:750px)');
    const images = [...imgs,...imgs]
    const [open,setOpen]=useState(false)
    const [index,setInd]=useState(0)
    const lightBox = (index: number)=>{
        setOpen(true)
        setInd(index)
    }
return(
        <div >
        <Splide options={{
            type: 'slide',
            rewind: images.length > 3,
            perPage: small ? 1 : middle ? 2 : images.length === 1 ? 1 : images.length === 2 ? 2 : 3,
            padding: '5%',
            gap:'80px',
            width:'100%',
            height:'220px',
            rewindByDrag:true,
        }} aria-label="My Favorite Images">
            {images.map((el,index)=>{
                return  <SplideSlide key={index} onClick={()=>lightBox(index)}>
                        <img src={`${IMAGES_URL}/${el}`} alt="Image 1" />
                </SplideSlide>
            })}
        </Splide>
            {open &&
            <Lightbox
                mainSrc={`${IMAGES_URL}/${images[index]}`}
                nextSrc={`${IMAGES_URL}/${images[(index + 1) % images.length]}`}
                prevSrc={`${IMAGES_URL}/${images[(index + images.length - 1) % images.length]}`}
                onCloseRequest={() => setOpen(false)}
                onMovePrevRequest={() => setInd((index + images.length - 1) % images.length)}
                onMoveNextRequest={() => setInd((index + 1) % images.length) }
                zoomInLabel='aria-label'
            />
            }
    </div>
    )
};

export default Img_slider;
