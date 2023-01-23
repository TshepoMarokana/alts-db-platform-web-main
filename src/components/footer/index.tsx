import { FC } from 'react';

const Footer: FC = () => {
    // const followData = [
    //     {icon1:<FaFacebook fill={'white'} size={15}/>},
    //     {icon1:<FaTwitter fill={'white'} size={15}/>},
    //     {icon1:<GrLinkedin fill={'white'} size={15}/>},
    //     {icon1:<svg width="15px" height="15px" fill='white' viewBox="0 0 20 20" aria-hidden="true">
    //     <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"> </path></svg>}
    // ]
    // const contactData = [
    //     {icon1:<svg width="15" height="15" fill='white' viewBox="0 0 20 20"><path d="M9.3,0C4.4,0,0.4,4,0.4,8.9s4,8.9,8.9,8.9c0.8,0,1.5-0.1,2.2-0.3v-3.9c-0.6,1.7-1.4,2.7-2.2,2.7c-0.9,0-2-1.5-2.5-3.7h4.8v-1.5h-5c-0.1-0.7-0.1-1.4-0.1-2.2c0-0.8,0.1-1.5,0.2-2.2h5.6c0.1,0.7,0.2,1.4,0.2,2.2c0,0.2,0,0.4,0,0.6c0.4-0.4,0.9-0.6,1.5-0.6c0-0.8,0-1.5-0.1-2.2h2.8c0.2,0.7,0.3,1.4,0.3,2.2c0,0.5-0.1,1-0.2,1.5l1.3,0.9c0.2-0.8,0.3-1.6,0.3-2.4C18.1,4,14.2,0,9.3,0zM9.3,1.5c0.9,0,2,1.5,2.5,3.7h-5C7.3,2.9,8.3,1.5,9.3,1.5zM6.3,2.1C5.9,2.9,5.5,4,5.2,5.2H2.8C3.6,3.8,4.9,2.7,6.3,2.1zM12.2,2.1c1.5,0.6,2.7,1.7,3.5,3.1h-2.3C13.1,4,12.7,2.9,12.2,2.1zM2.2,6.7h2.8C4.9,7.4,4.8,8.1,4.8,8.9c0,0.8,0.1,1.5,0.1,2.2H2.2C2,10.4,1.9,9.7,1.9,8.9C1.9,8.1,2,7.4,2.2,6.7z M13.7,10.4c-0.4,0-0.7,0.3-0.8,0.7c0,0,0,0.1,0,0.1v6.6c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2l0,0l1.4-1.6l1.5,3c0.2,0.4,0.6,0.5,1,0.3c0.4-0.2,0.5-0.6,0.3-1l-1.5-3l2.2-0.4l0,0c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.1-0.5-0.3-0.6l0,0l-5.1-3.6C14.1,10.4,13.9,10.4,13.7,10.4zM2.9,12.6h2.3c0.3,1.2,0.7,2.3,1.1,3.1C4.9,15.1,3.7,14,2.9,12.6z"> </path></svg>,
    //     title:'Website:', link:'https://altsdb.com',text:'www.altsdb.com'},
    //     {icon1:<svg width="15" height="15" viewBox="0 0 15 15" fill='white'><path d="M12.8 2.2C11.4.8 9.5 0 7.5 0S3.6.8 2.2 2.2C.8 3.6 0 5.5 0 7.5 0 11.6 3.4 15 7.5 15c1.6 0 3.3-.5 4.6-1.5.3-.2.4-.7.1-1-.2-.3-.7-.4-1-.1-1.1.8-2.4 1.3-3.7 1.3-3.4 0-6.1-2.8-6.1-6.1 0-1.6.6-3.2 1.8-4.3C4.3 2 5.9 1.4 7.5 1.4c1.6 0 3.2.6 4.3 1.8 1.2 1.2 1.8 2.7 1.8 4.3v.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V4.8c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7-.4-.4-1.1-.7-1.9-.7-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1 0 1.9-.5 2.5-1.2.5.7 1.3 1.2 2.2 1.2 1.5 0 2.7-1.2 2.7-2.7v-.7c.1-2-.7-3.9-2.1-5.3zM7.5 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"> </path></svg>,
    //     title:'Email:',link:'info@altsdb.com',text:'info@altsdb.com'},
    //     {icon1:<svg width="15" height="15" viewBox="0 0 20 20" fill='white'><path d="M10,0C6.1,0,3,3.1,3,7c0,4.5,6,11.8,6.2,12.1L10,20l0.8-0.9C11,18.8,17,11.5,17,7C17,3.1,13.9,0,10,0z M10,2c2.8,0,5,2.2,5,5c0,2.7-3.1,7.4-5,9.8C8.1,14.4,5,9.7,5,7C5,4.2,7.2,2,10,2zM10,4.5C8.6,4.5,7.5,5.6,7.5,7S8.6,9.5,10,9.5s2.5-1.1,2.5-2.5S11.4,4.5,10,4.5z"> </path></svg>,
    //     title:'Headquarters:',name:'Fort Worth, TX'},
    // ]
    // const menuData = [
    //     {name:'Website Homepage',link:'https://altsdb.com/'},
    //     {name:'About Us',link:'https://altsdb.com/about/'},
    //     {name:'Advertise',link:'https://altsdb.com/advertise'},
    //     {name:'Advisor Resources',link:'https://altsdb.com/advisors/'},
    //     {name:'Event Calendar',link:'https://altsdb.com/events/'},
    //     {name:'Guides',link:'https://altsdb.com/guides/'},
    //     {name:'News',link:'https://altsdb.com/news/'},
    //     {name:'Podcast',link:'https://altsdb.com/podcast/'},
    //     {name:'Press',link:'https://altsdb.com/press/'},
    //     {name:'Webinars',link:'https://altsdb.com/webinars/'},
    //     {name:'Privacy Policy',link:'https://altsdb.com/privacy/'},
    //     {name:'Website Terms Of Use',link:'https://altsdb.com/terms'},
    // ]
    // const guidesData=[
    //     {name:'Guides Homepage',link:'https://altsdb.com/guides/'},
    //     {name:'The Investor’s Guide to Alts',link:'https://altsdb.com/lp-alts-investorsguide/'},
    //     {name:'The Investor’s Guide to DSTs',link:'https://altsdb.com/lp-dsts-investorsguide/'},
    //     {name:'The Investor’s Guide to REITs',link:'https://altsdb.com/lp-reits-investorsguide/'}
    // ]
    // const podcastData=[
    //     {name:'Podcast Homepage',link:'https://altsdb.com/podcast/'},
    //     {name:'Listen on Apple Podcasts',link:'https://podcasts.apple.com/us/podcast/the-alternative-investment-podcast/id1587737147'},
    //     {name:'Listen on Google Podcasts',link:'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vYWx0ZXJuYXRpdmUtaW52ZXN0bWVudC1wb2RjYXN0'},
    //     {name:'Listen on Spotify',link:'https://open.spotify.com/show/2q2Zf0Tz75hBEc2IkGUqPn'},
    //     {name:'Watch on YouTube',link:'https://altsdb.com/'}
    // ]
    // const data =['Individual Investor','Investor - Family Office','Investor - Institutional','Financial Advisor - IBD or Registered Rep',
    //     'Financial Advisor - RIA','Financial Advisor - Hybrid RIA (Dual License)','Financial Advisor - Other','Fund/Project Sponsor',
    //     'Government','Legal Professional or Attorney','Lender or Banker','Managing BD or Distributor/Wholesaler','Media',
    //     'Real Estate Agent or Broker','Real Estate Developer','Tax Professional or CPA'
    // ]
    // const investorData =['Yes, I am an accredited investor.','Yes, I have clients who are accredited investors.','No']

    return (
        <footer id="footer" className="ct-footer" data-id="type-1" itemScope itemType="https://schema.org/WPFooter">
            <div data-row="top">
                <div className="ct-container">
                    <div data-column="widget-area-1">
                        <div className="ct-widget widget_media_image" id="media_image-3">
                            <a href="https://altsdb.com/">
                                <img
                                    width="1000" height="297"
                                    src="https://altsdb.com/wp-content/uploads/2022/05/2022-altsdb-logo-white.png"
                                    className="image wp-image-2031  attachment-full size-full"
                                    alt="AltsDb: The Alternative Investment Database"
                                    decoding="async" loading="lazy"
                                    srcSet="https://altsdb.com/wp-content/uploads/2022/05/2022-altsdb-logo-white.png 1000w, https://altsdb.com/wp-content/uploads/2022/05/2022-altsdb-logo-white-300x89.png 300w, https://altsdb.com/wp-content/uploads/2022/05/2022-altsdb-logo-white-768x228.png 768w"
                                    sizes="(max-width: 1000px) 100vw, 1000px"
                                />
                                </a>
                        </div>
                        <div className="ct-widget ct-socials-widget" id="blocksy_ct_socials-3">
                            <h2 className="widget-title">Follow AltsDb</h2>
                            <div className="ct-social-box" data-icon-size="small" data-color="default" data-icons-type="rounded:solid">
                                <a href="https://www.facebook.com/altsdb" data-network="facebook" aria-label="Facebook" rel="noopener">
                                    <span className="ct-icon-container">
                                      <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true">
                                         <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
                                      </svg>
                                    </span>
                                    <span className="ct-label" hidden={true}>Facebook</span>
                                </a>
                                <a href="https://twitter.com/altsdbcom" data-network="twitter" aria-label="Twitter" rel="noopener">
                                    <span className="ct-icon-container">
                                       <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true">
                                          <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"></path>
                                       </svg>
                                    </span>
                                    <span className="ct-label" hidden={true}>Twitter</span>
                                </a>
                                <a href="https://www.linkedin.com/company/altsdb" data-network="linkedin" aria-label="LinkedIn" rel="noopener">
                                    <span className="ct-icon-container">
                                       <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true">
                                         <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z"></path>
                                       </svg>
                                    </span>
                                    <span className="ct-label" hidden={true}>LinkedIn</span>
                                </a>
                                <a href="https://www.youtube.com/c/AltsDb" data-network="youtube" aria-label="YouTube" rel="noopener">
                                    <span className="ct-icon-container">
                                    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"></path>
                                    </svg>
                                    </span>
                                    <span className="ct-label" hidden={true}>YouTube</span> </a>
                            </div>
                        </div>
                        <div className="ct-widget ct-contact-info-widget" id="blocksy_ct_contact_info-3">
                            <h2 className="widget-title">Contact AltsDb</h2>
                            <ul data-icons-type="rounded:outline" data-icon-size="small" data-items-direction="vertical">
                                <li>
                                    <span className="ct-icon-container">
                                        <svg width="15" height="15" viewBox="0 0 20 20">
                                            <path d="M9.3,0C4.4,0,0.4,4,0.4,8.9s4,8.9,8.9,8.9c0.8,0,1.5-0.1,2.2-0.3v-3.9c-0.6,1.7-1.4,2.7-2.2,2.7c-0.9,0-2-1.5-2.5-3.7h4.8v-1.5h-5c-0.1-0.7-0.1-1.4-0.1-2.2c0-0.8,0.1-1.5,0.2-2.2h5.6c0.1,0.7,0.2,1.4,0.2,2.2c0,0.2,0,0.4,0,0.6c0.4-0.4,0.9-0.6,1.5-0.6c0-0.8,0-1.5-0.1-2.2h2.8c0.2,0.7,0.3,1.4,0.3,2.2c0,0.5-0.1,1-0.2,1.5l1.3,0.9c0.2-0.8,0.3-1.6,0.3-2.4C18.1,4,14.2,0,9.3,0zM9.3,1.5c0.9,0,2,1.5,2.5,3.7h-5C7.3,2.9,8.3,1.5,9.3,1.5zM6.3,2.1C5.9,2.9,5.5,4,5.2,5.2H2.8C3.6,3.8,4.9,2.7,6.3,2.1zM12.2,2.1c1.5,0.6,2.7,1.7,3.5,3.1h-2.3C13.1,4,12.7,2.9,12.2,2.1zM2.2,6.7h2.8C4.9,7.4,4.8,8.1,4.8,8.9c0,0.8,0.1,1.5,0.1,2.2H2.2C2,10.4,1.9,9.7,1.9,8.9C1.9,8.1,2,7.4,2.2,6.7z M13.7,10.4c-0.4,0-0.7,0.3-0.8,0.7c0,0,0,0.1,0,0.1v6.6c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2l0,0l1.4-1.6l1.5,3c0.2,0.4,0.6,0.5,1,0.3c0.4-0.2,0.5-0.6,0.3-1l-1.5-3l2.2-0.4l0,0c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.1-0.5-0.3-0.6l0,0l-5.1-3.6C14.1,10.4,13.9,10.4,13.7,10.4zM2.9,12.6h2.3c0.3,1.2,0.7,2.3,1.1,3.1C4.9,15.1,3.7,14,2.9,12.6z"></path></svg></span>
                                    <div className="contact-info">
                                        <span className="contact-title">Website: </span>
                                        <span className="contact-text">
                                            <a href="https://altsdb.com">www.altsdb.com</a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <span className="ct-icon-container">
                                        <svg width="15" height="15" viewBox="0 0 15 15">
                                            <path d="M12.8 2.2C11.4.8 9.5 0 7.5 0S3.6.8 2.2 2.2C.8 3.6 0 5.5 0 7.5 0 11.6 3.4 15 7.5 15c1.6 0 3.3-.5 4.6-1.5.3-.2.4-.7.1-1-.2-.3-.7-.4-1-.1-1.1.8-2.4 1.3-3.7 1.3-3.4 0-6.1-2.8-6.1-6.1 0-1.6.6-3.2 1.8-4.3C4.3 2 5.9 1.4 7.5 1.4c1.6 0 3.2.6 4.3 1.8 1.2 1.2 1.8 2.7 1.8 4.3v.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V4.8c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7-.4-.4-1.1-.7-1.9-.7-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1 0 1.9-.5 2.5-1.2.5.7 1.3 1.2 2.2 1.2 1.5 0 2.7-1.2 2.7-2.7v-.7c.1-2-.7-3.9-2.1-5.3zM7.5 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg></span>
                                    <div className="contact-info">
                                        <span className="contact-title">Email: </span>
                                        <span className="contact-text">
                                           <a href="mailto:info@altsdb.com">info@altsdb.com</a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <span className="ct-icon-container">
                                        <svg width="15" height="15" viewBox="0 0 20 20">
                                            <path d="M10,0C6.1,0,3,3.1,3,7c0,4.5,6,11.8,6.2,12.1L10,20l0.8-0.9C11,18.8,17,11.5,17,7C17,3.1,13.9,0,10,0z M10,2c2.8,0,5,2.2,5,5c0,2.7-3.1,7.4-5,9.8C8.1,14.4,5,9.7,5,7C5,4.2,7.2,2,10,2zM10,4.5C8.6,4.5,7.5,5.6,7.5,7S8.6,9.5,10,9.5s2.5-1.1,2.5-2.5S11.4,4.5,10,4.5z"></path></svg></span>
                                    <div className="contact-info">
                                            <span className="contact-title">Headquarters: </span>
                                            <span className="contact-text">Fort Worth, TX</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-column="widget-area-2">
                        <div className="ct-widget widget_nav_menu" id="nav_menu-13">
                            <h2 className="widget-title">AltsDb</h2>
                            <div className="menu-bottom-menu-container">
                                <ul id="menu-bottom-menu" className="widget-menu">
                                    <li id="menu-item-331" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-149 current_page_item menu-item-331">
                                        <a href="https://altsdb.com/" aria-current="page">Website Homepage</a>
                                    </li>
                                    <li id="menu-item-333" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-333">
                                        <a href="https://altsdb.com/about/">About Us</a>
                                    </li>
                                    <li id="menu-item-1532" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1532">
                                        <a href="https://altsdb.com/advertise/">Advertise</a>
                                    </li>
                                    <li id="menu-item-2603" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2603">
                                        <a href="https://altsdb.com/advisors/">Advisor Resources</a>
                                    </li>
                                    <li id="menu-item-3258" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3258">
                                        <a href="https://altsdb.com/events/">Event Calendar</a>
                                    </li>
                                    <li id="menu-item-334" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-334">
                                        <a href="https://altsdb.com/guides/">Guides</a>
                                    </li>
                                    <li id="menu-item-342" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-342">
                                        <a href="https://altsdb.com/news/">News</a>
                                    </li>
                                    <li id="menu-item-335" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-335">
                                        <a href="https://altsdb.com/podcast/">Podcast</a>
                                    </li>
                                    <li id="menu-item-3163" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3163">
                                        <a href="https://altsdb.com/press/">Press</a>
                                    </li>
                                    <li id="menu-item-1491" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1491">
                                        <a href="https://altsdb.com/webinars/">Webinars</a>
                                    </li>
                                    <li id="menu-item-332" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-332">
                                        <a href="https://altsdb.com/privacy/">Privacy Policy</a>
                                    </li>
                                    <li id="menu-item-336" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-336">
                                        <a href="https://altsdb.com/terms/">Website Terms Of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ct-widget widget_nav_menu" id="nav_menu-15">
                            <h2 className="widget-title">Directory</h2>
                            <div className="menu-footer-menu-directory-container">
                                <ul id="menu-footer-menu-directory" className="widget-menu">
                                    <li id="menu-item-2335" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2335">
                                        <a href="https://altsdb.com/directory/">Directory Home</a>
                                    </li>
                                    <li id="menu-item-2336" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2336">
                                        <a href="https://altsdb.com/membership/corporate/">AltsDb Corporate Membership</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-column="widget-area-3">
                        <div className="ct-widget widget_nav_menu" id="nav_menu-10">
                            <h2 className="widget-title">Guides</h2>
                            <div className="menu-guides-container">
                                <ul id="menu-guides" className="widget-menu">
                                    <li id="menu-item-344" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-344">
                                        <a href="https://altsdb.com/guides/">Guides Homepage</a>
                                    </li>
                                    <li id="menu-item-324" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-324">
                                        <a href="https://altsdb.com/lp-alts-investorsguide/">The Investor’s Guide to Alts</a>
                                    </li>
                                    <li id="menu-item-1804"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1804">
                                        <a href="https://altsdb.com/lp-dsts-investorsguide/">The Investor’s Guide to DSTs</a>
                                    </li>
                                    <li id="menu-item-1805"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1805">
                                        <a href="https://altsdb.com/lp-reits-investorsguide/">The Investor’s Guide to REITs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ct-widget widget_nav_menu" id="nav_menu-11">
                            <h2 className="widget-title">Podcast</h2>
                            <div className="menu-podcast-container">
                                <ul id="menu-podcast" className="widget-menu">
                                    <li id="menu-item-345" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-345">
                                        <a href="https://altsdb.com/podcast/">Podcast Homepage</a>
                                    </li>
                                    <li id="menu-item-325" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-325">
                                        <a href="https://podcasts.apple.com/us/podcast/the-alternative-investment-podcast/id1587737147">Listen on Apple Podcasts</a>
                                    </li>
                                    <li id="menu-item-326" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-326">
                                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vYWx0ZXJuYXRpdmUtaW52ZXN0bWVudC1wb2RjYXN0">Listen on Google Podcasts</a>
                                    </li>
                                    <li id="menu-item-327" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-327">
                                        <a href="https://open.spotify.com/show/2q2Zf0Tz75hBEc2IkGUqPn">Listen on Spotify</a>
                                    </li>
                                    <li id="menu-item-1741" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1741">
                                        <a href="https://www.youtube.com/channel/UCruzsb_L7UOlU5nz_TK69qw">Watch on YouTube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-column="widget-area-4">
                        <div className="widget_text ct-widget widget_custom_html" id="custom_html-1">
                            <h2 className="widget-title">Alts Newsletter</h2>
                            <div className="textwidget entry-content custom-html-widget">
                                <p>Subscribe to the AltsDb newsletter.</p>
                                <div id="mc_embed_signup">
                                    <form
                                        action="https://altsdb.us7.list-manage.com/subscribe/post?u=c9149ee96455276f89f51c5aa&amp;id=1ff6f1ff0f"
                                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                        className="validate" target="_blank" noValidate>
                                        <div id="mc_embed_signup_scroll">
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-EMAIL">Email Address </label>
                                                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-NAME">Name </label>
                                                <input type="text" value="" name="NAME" className="required" id="mce-NAME"/>
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-WHO">Who are you? </label>
                                                <select name="WHO" className="" id="mce-WHO">
                                                    <option value=""></option>
                                                    <option value="Individual Investor">Individual Investor</option>
                                                    <option value="Investor - Family Office">Investor - Family Office</option>
                                                    <option value="Investor - Institutional">Investor - Institutional</option>
                                                    <option value="Financial Advisor - IBD or Registered Rep">Financial Advisor - IBD or Registered Rep</option>
                                                    <option value="Financial Advisor - RIA">Financial Advisor - RIA</option>
                                                    <option value="Financial Advisor - Hybrid RIA (Dual License)">Financial Advisor - Hybrid RIA (Dual License)</option>
                                                    <option value="Financial Advisor - Other">Financial Advisor - Other</option>
                                                    <option value="Fund/Project Sponsor">Fund/Project Sponsor</option>
                                                    <option value="Government">Government</option>
                                                    <option value="Legal Professional or Attorney">Legal Professional or Attorney</option>
                                                    <option value="Lender or Banker">Lender or Banker</option>
                                                    <option value="Managing BD or Distributor/Wholesaler">Managing BD or Distributor/Wholesaler</option>
                                                    <option value="Media">Media</option>
                                                    <option value="Real Estate Agent or Broker">Real Estate Agent or Broker</option>
                                                    <option value="Real Estate Developer">Real Estate Developer</option>
                                                    <option value="Tax Professional or CPA">Tax Professional or CPA</option>
                                                </select>
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-ACCREDITED">Are you an accredited investor? </label>
                                                <select name="ACCREDITED" className="" id="mce-ACCREDITED">
                                                    <option value=""></option>
                                                    <option value="Yes, I am an accredited investor.">Yes, I am an accredited investor.</option>
                                                    <option value="Yes, I have clients who are accredited investors.">Yes, I have clients who are accredited investors.</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div id="mce-responses" className="clear">
                                                <div className="response" id="mce-error-response" ></div>
                                                <div className="response" id="mce-success-response"></div>
                                            </div>
                                            <div className='invest_section' aria-hidden="true">
                                                <input type="text" name="b_c9149ee96455276f89f51c5aa_1ff6f1ff0f" tabIndex={-1} value=""/>
                                                </div>
                                            <div className="clear">
                                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button footer_button" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-row="bottom">
                <div className="ct-container-fluid" data-columns-divider="md:sm">
                    <div data-column="copyright">
                        <div className="ct-footer-copyright" data-id="copyright">
                            <p>Copyright © 2022 AltsDb. All rights reserved.</p>
                            <p>Kingsbury Media: <a href="https://altsdb.com/">AltsDb</a> |&nbsp;<a
                                href="https://multifamilyinvestor.com/">MultifamilyInvestor.com</a> | <a
                                href="https://opportunitydb.com/">OpportunityDb</a></p></div>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
