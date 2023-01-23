import {FC} from "react";


const OfferingDeck: FC = () => {

    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-e59550a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            id="pdf" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c60264a"
                    data-id="c60264a" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-5bb2b9f elementor-widget elementor-widget-heading"
                            data-id="5bb2b9f" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">Offering Deck</h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-17b045a elementor-hidden-mobile elementor-widget elementor-widget-html"
                            data-id="17b045a" data-element_type="widget" data-widget_type="html.default">
                            <div className="elementor-widget-container">
                                <iframe
                                    src="https://opportunitydb.com/wp-content/uploads/2022/07/Origin-QOZ-Fund-II-Pitch-Day-July-2022.pdf"
                                    style={{aspectRatio: 4 / 3}} data-gtm-yt-inspected-4="true"></iframe>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-e3f5a9f elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-text-editor"
                            data-id="e3f5a9f" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>
                                    <a href="https://opportunitydb.com/wp-content/uploads/2022/07/Origin-QOZ-Fund-II-Pitch-Day-July-2022.pdf">Open
                                        PDF</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferingDeck