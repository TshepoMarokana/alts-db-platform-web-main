import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useMediaQuery } from "@mui/material";

// div-gpt-ad-1651090639500-0
const AdSlot: FC<{id: string}> = ({id}) => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    // const smallScreen = useMediaQuery('(max-width:700px)');
    // const desktop = useMediaQuery('(min-width:700px)');



    useEffect(()=>{
        if(window) {
            const { googletag } = window;
            // router.events.on('routeChangeComplete', googletag.cmd.push(function () {  googletag.destroySlots()  }));
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function() {
                var responsiveAdSlot =
                    googletag.defineSlot('/21834511768/AltsDb_top_leaderboard', [
                        [300, 250],
                        [728, 90],
                        [320, 50]
                    ], id).addService(googletag.pubads());
                    // DEFINE SLOTI LOGICY HASKANAL KAROXA SRANIC LINI
                var mapping =
                    googletag.sizeMapping()
                    .addSize([768, 0], [728, 90])
                    .addSize([0, 0], [
                        [300, 250],
                        [320, 50]
                    ])
                    .build();
                    //MAPPINGI MASN EL NAYEL
                responsiveAdSlot.defineSizeMapping(mapping);
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
            });
            googletag.cmd.push(function() { window.googletag.display(id)})
        }    
        setMounted(true);
        return () => {
            setMounted(false);
            if(window) {
                const {googletag} = window;
                // googletag.cmd.push(function () {  googletag.destroySlots()  })
                router.events.off('routeChangeComplete', googletag.cmd.push(function () {  googletag.destroySlots()  }))
                //ES EVENTI HETA PETQ XAXAL JOGEL VONCA ASHXATUM
            }
            
        }
    }, [mounted])

    return (
            <div className="heading adv_container"
                id={id}
                data-google-query-id="CIzkpZac9_sCFYiIgwcdriYGxg"
            >
            </div>

    )
}

export default AdSlot;
