import { FC, ReactElement } from 'react';
import { Skeleton } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import style from './index.module.css'
type FilterItemOfferingsSkeleton = {
    skeletonCount?: number
}

export const OfferingsSkeleton: FC<FilterItemOfferingsSkeleton> = ({skeletonCount = 1}) => {
    const smallScreen = useMediaQuery("(max-width:900px)");
    const mediumScreen = useMediaQuery("(max-width: 1400px)");
    const largeScreen = useMediaQuery("(min-width: 1400px)");

    const singleSkeleton = (
        <>
            {largeScreen && (
                <div className={style.main_container_skeleton}>
                    <div className={style.filter_container_skeleton}>
                        <div>
                        <Skeleton variant="text" sx={{ fontSize: '40px' }} animation='wave'/>
                        <div className={style.search_button_container_skeleton}>
                            <Skeleton variant="text" sx={{ fontSize: '30px' }} width={'40%'} animation='wave'/>
                            <Skeleton variant="rounded" width={'40%'} height={60} animation='wave' />
                        </div>
                        <Skeleton variant="rounded" width={'100%'} height={50}  animation='wave'/>
                        <Skeleton variant="text" sx={{ fontSize: '30px',width:'50%',marginTop:'20px',marginBottom:'14px' }} animation='wave'/>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <Skeleton variant="text" sx={{ fontSize: '30px',width:'50%',marginTop:'20px',marginBottom:'14px' }} animation='wave'/>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <Skeleton variant="text" sx={{ fontSize: '30px',width:'50%',marginTop:'20px',marginBottom:'14px' }} animation='wave'/>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        <div className={style.select_container_skeleton}>
                            <Skeleton variant="rounded" width={'25px'} height={25} sx={{marginRight:'7px'}} animation='wave'/>
                            <Skeleton variant="rounded" height={25}  width={'70%'} animation='wave'/>
                        </div>
                        </div>
                    </div>
                    <div className={style.offerings_container_skeleton}>
                        <div className={style.offering_container_skeleton}>
                            <div className={style.offering_image_ctn_skeleton}>
                                <Skeleton variant="rounded"  width={'100%'} height={170} animation='wave'/>
                                <Skeleton variant="rounded"  width={'90%'} height={40} animation='wave' sx={{marginTop:'30px'}} />
                            </div>
                            <div className={style.offering_detail_ctn_skeleton}>
                                <Skeleton variant="text" sx={{ fontSize: '30px',width:'50%',marginBottom:'19px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '20px',width:'90%',marginBottom:'10px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%',marginBottom:'10px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%',marginBottom:'10px',height:'40%' }} animation='wave'/>
                            </div>
                        </div>
                        <div className={style.offering_container_skeleton}>
                            <div className={style.offering_image_ctn_skeleton}>
                                <Skeleton variant="rounded"  width={'100%'} height={170} animation='wave'/>
                                <Skeleton variant="rounded"  width={'90%'} height={40} animation='wave' sx={{marginTop:'30px'}} />
                            </div>
                            <div className={style.offering_detail_ctn_skeleton}>
                                <Skeleton variant="text" sx={{ fontSize: '30px',width:'50%',marginBottom:'19px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '20px',width:'90%',marginBottom:'10px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%',marginBottom:'10px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%',marginBottom:'10px',height:'40%' }} animation='wave'/>
                            </div>
                        </div>
                        <div className={style.offering_container_skeleton}>
                            <div className={style.offering_image_ctn_skeleton}>
                                <Skeleton variant="rounded"  width={'100%'} height={170} animation='wave'/>
                                <Skeleton variant="rounded"  width={'90%'} height={40} animation='wave' sx={{marginTop:'30px'}} />
                            </div>
                            <div className={style.offering_detail_ctn_skeleton}>
                                <Skeleton variant="text" sx={{ fontSize: '30px',width:'50%',marginBottom:'19px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '20px',width:'90%',marginBottom:'10px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%',marginBottom:'10px' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%' }} animation='wave'/>
                                <Skeleton variant="text" sx={{ fontSize: '12px',width:'90%',marginBottom:'10px',height:'40%' }} animation='wave'/>
                            </div>
                        </div>
                    </div>

                </div>
            )
            }
            {/*{mediumScreen && (*/}
            {/*    <div className="premium_offering_skeleton" style={{width: '305px', height: '600px', margin: '10px'}}>*/}
            {/*        <Skeleton variant="rounded" width={300} height={160} />*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }}/>*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }}/>*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }}/>*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }} />*/}
            {/*        <Skeleton variant='rounded' width={100} height={18}  sx={{ fontSize: '1rem', margin: '20px auto' }}/>*/}
            {/*    </div>*/}
            {/*)*/}
            {/*}*/}
            {/*{smallScreen && (*/}
            {/*    <div className="premium_offering_skeleton" style={{width: '305px', height: '600px', margin: '10px'}}>*/}
            {/*        <Skeleton variant="rounded" width={300} height={160} />*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }}/>*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }}/>*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }}/>*/}
            {/*        <Skeleton variant="text" sx={{width: '250px', margin: '20px auto', height: '20px' }} />*/}
            {/*        <Skeleton variant='rounded' width={100} height={18}  sx={{ fontSize: '1rem', margin: '20px auto' }}/>*/}
            {/*    </div>*/}
            {/*)*/}
            {/*}*/}
        </>

    );

    const skeletons: Array<ReactElement> = [];
    for(let i = 0; i < skeletonCount; i++) {
        skeletons.push(singleSkeleton);
    }

    return (
        <>
            {(largeScreen || mediumScreen) && (<div className='premium_offering_skeletons_container' style={{display: 'flex'}}>
                {skeletons && skeletons}
            </div>)}
            {smallScreen && (
                <div className='premium_offering_skeletons_container' style={{display: 'block'}}>
                    {skeletons && skeletons}
                </div>
            )}
        </>
    )
}

// export const NonPremiumOfferingSkeleton: FC<FilterItemOfferingsSkeleton> = ({skeletonCount=1}) => {
//     const smallScreen = useMediaQuery("(max-width:900px)");
//     const mediumScreen = useMediaQuery("(max-width: 1400px)");
//     const largeScreen = useMediaQuery("(min-width: 1400px)");
//
//     const singleSkeleton = (
//         <>
//             {largeScreen && (
//                 <div className='nonpremium_offering_skeleton' style={{display: 'flex', margin: '20px'}}>
//                     <Skeleton variant="rounded" width={400} height={210} />
//                     <Skeleton variant="text" sx={{width: '400px', margin: '20px', height: '30px' }}/>
//                     <Skeleton variant="text" sx={{width: '170px', margin: '20px auto', height: '37px' }}/>
//                 </div>
//             )}
//             {mediumScreen && (
//                 <div className='nonpremium_offering_skeleton' style={{display: 'flex', margin: '20px'}}>
//                     <Skeleton variant="rounded" width={400} height={210} />
//                     <Skeleton variant="text" sx={{width: '400px', margin: '20px', height: '30px' }}/>
//                     <Skeleton variant="text" sx={{width: '170px', margin: '20px auto', height: '37px' }}/>
//                 </div>
//             )}
//             {smallScreen && (
//                 <div className='nonpremium_offering_skeleton' style={{display: 'flex', margin: '20px'}}>
//                     <Skeleton variant="rounded" width={400} height={210} />
//                     <Skeleton variant="text" sx={{width: '400px', margin: '20px', height: '30px' }}/>
//                     <Skeleton variant="text" sx={{width: '170px', margin: '20px auto', height: '37px' }}/>
//                 </div>
//             )}
//         </>
//
//     );
//
//     const skeletons: Array<ReactElement> = [];
//     for(let i = 0; i < skeletonCount; i++) {
//         skeletons.push(singleSkeleton);
//     }
//
//     return (
//         <div className='nonpremium_offering_skeletons_container'>
//             {skeletons && skeletons}
//         </div>
//     )
// }
//
// export const OfferingPagesSkeleton: FC = () => {
//     const smallScreen = useMediaQuery("(max-width:900px)");
//     const mediumScreen = useMediaQuery("(min-width: 900px)");
//
//     return (
//         <>
//             {mediumScreen && (
//                 <div style={{display: 'flex', }}>
//                     <div className='offering_pages_skeleton' style={{display: 'flex', margin: '150px auto'}}>
//                         <div>
//                             <Skeleton variant="text" sx={{width: '350px', margin: '20px', height: '30px'}}/>
//                             <Skeleton variant="text" sx={{width: '320px', margin: '20px', height: '40px'}}/>
//                             <Skeleton variant="rounded" width={600} height={100} sx={{ margin: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '600px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '600px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '600px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '600px', margin: '20px', height: '20px'}}/>
//                         </div>
//                         <div>
//                             <Skeleton variant="rounded" width={350} height={45} />
//                             <Skeleton variant='text' sx={{width: '320px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '320px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '320px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '320px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant="rounded" width={140} height={35} sx={{margin: '20px auto'}}/>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {smallScreen && (
//                 <div style={{display: 'flex', }}>
//                     <div className='offering_pages_skeleton' style={{display: 'block', margin: '150px auto'}}>
//                         <div>
//                             <Skeleton variant="text" sx={{width: '300px', margin: '20px', height: '30px'}}/>
//                             <Skeleton variant="text" sx={{width: '280px', margin: '20px', height: '40px'}}/>
//                             <Skeleton variant="rounded" width={600} height={100} sx={{ margin: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '500px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '500px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '500px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '500px', margin: '20px', height: '20px'}}/>
//                         </div>
//                         <div>
//                             <Skeleton variant="rounded" width={350} height={45} />
//                             <Skeleton variant='text' sx={{width: '280px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '280px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '280px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant='text' sx={{width: '280px', margin: '20px', height: '20px'}}/>
//                             <Skeleton variant="rounded" width={120} height={35} sx={{margin: '20px auto'}}/>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//
//     )
// }
