import {FC} from "react";

type data = {
    video?:string
}
const OfferingVideo: FC<data> = ({video}) =>{

    return(
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3c10b85 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section" id='video'
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bbbab02"
                    data-id="bbbab02" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-1ee2453 elementor-widget elementor-widget-heading"
                            data-id="1ee2453" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">Offering Video</h2>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-4744abc elementor-aspect-ratio-169 elementor-widget elementor-widget-video"
                            data-id="4744abc" data-element_type="widget"
                            data-settings="{&quot;youtube_url&quot;:&quot;https:\/\/www.youtube.com\/watch?v=tc1tM1ohY-w&quot;,&quot;modestbranding&quot;:&quot;yes&quot;,&quot;video_type&quot;:&quot;youtube&quot;,&quot;controls&quot;:&quot;yes&quot;,&quot;aspect_ratio&quot;:&quot;169&quot;}"
                            data-widget_type="video.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-wrapper elementor-fit-aspect-ratio elementor-open-inline">
                                    <iframe className="elementor-video" frameBorder="0" allowFullScreen={true}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            title="Origin Investments Growth Fund IV - Alts Expo 2021" width="640" height="360"
                                            src={video}
                                            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                                            id="widget2" data-gtm-yt-inspected-4="true"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )




}
export default OfferingVideo