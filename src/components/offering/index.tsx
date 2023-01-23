import {FC, memo} from "react";
import Link from "next/link";
import {useMediaQuery} from "@mui/material";
import { IMAGES_URL } from "../../constants/configs";

type FilterItem = {
  offeringId?: string;
  offeringProfileImage?: string;
  assetClassName?: string;
  structureName?: string;
  offeringName?: string;
  sectorName?: string;
  stateAbbreviation?: string;
  targetIrr?: string;
  descriptionOffer?: string;
  minimumInvestment?: number;
  link?: string;
  portfolioName?:string,
  path?: string;
  sector?:[],
  minInvesment?: number,
  OfferingJoinSectors?: Array<{
  Sector?: {name?: string}}>;
  OfferingJoinStrategies?:Array<{
  Strategy?:{name?:string}}>;
  OfferingJoinStates?: Array<{
  State?: {name?: string, abbreviation?: string}}>
}

const OfferingsItem: FC<FilterItem> = ({
  offeringId,
  offeringProfileImage,
  assetClassName,
  structureName,
  offeringName,
  descriptionOffer,
  portfolioName,
  minInvesment,
  OfferingJoinSectors,
  OfferingJoinStates,
  OfferingJoinStrategies,
  path,
}) => {
  if(!OfferingJoinStates) {
    OfferingJoinStates = [];
  }
  if(!OfferingJoinSectors) {
    OfferingJoinSectors = [];
  }
  if(!OfferingJoinStrategies) {
    OfferingJoinStrategies = [];
  }
  const state_name = OfferingJoinStates.slice(0,2).map((el)=>el.State?.abbreviation).join(' , ');
  const sector_name = OfferingJoinSectors.slice(0,2).map((el)=>el.Sector?.name);
  const strategy_name = OfferingJoinStrategies?.slice(0,2).map((el)=>el.Strategy?.name)
  const mobile_view = useMediaQuery('(max-width:800px)')
  sector_name.sort((a,b): any=> {
    if(a && b) {
      if(a?.length < b?.length) {
        return -1
      } else if(a?.length > b?.length) {
        return 1
      } else {
        return 0
      }
  }})

  // const mobile_view = useMediaQuery("(max-width: 750px)")

  return (
    <div className={mobile_view ? 'offering_mobile_container' : 'offering_container'}>
      <div className='offering_img'>
        { (mobile_view && offeringName) &&
          <Link href={`/${path}/${offeringId}`}>
            <h2 style={{cursor: 'pointer'}} className="elementor-heading-title elementor-size-default">{offeringName}</h2>
          </Link>  
        }
        <Link href={`/${path}/${offeringId}`}>
        <img
            className='offer_image'
          src={`${IMAGES_URL}/${offeringProfileImage}`}
          alt=""
          style={{cursor: 'pointer'}}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/offeringImage1.png";

          }}
        /></Link>
        {!mobile_view &&
            // <div >
            //   <Link href={`/${path}/${offeringId}`}>
                <div className="elementor-element elementor-element-a3b88e9 elementor-align-center elementor-widget elementor-widget-button" data-id="a3b88e9" data-element_type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a href={`/${path}/${offeringId}`} className="elementor-button-link elementor-button elementor-size-lg elementor-animation-grow" role="button">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Review Offering</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                // <button >Review Offering</button>
              // </Link>
            // </div>
        }
      </div>

      <div  >
        <div >
          {!mobile_view &&
          offeringName && 
          <Link href={`/${path}/${offeringId}`}>  
              <h2 style={{cursor: 'pointer'}} className="elementor-heading-title elementor-size-default">{offeringName}</h2>
           </Link>   
              }
             
              <p>
                  {structureName && <span >{structureName}&nbsp; | &nbsp;</span>}
                  {assetClassName && <span >{assetClassName}&nbsp; | &nbsp;</span>}
                  {portfolioName && <span >{portfolioName}</span>}
              </p>
            
        </div>
        <div  className={mobile_view ? 'offering_items_mobile' : 'offering_items'}>
          <div className={mobile_view ? 'item' : ''}>
            <h6  className="widget-title">Sector</h6>
            <div className='offering_item'>
              {OfferingJoinSectors.length === 2 ?
                  <div >
                    <span className='items'>{sector_name[0]},&nbsp;</span>
                    <span>{sector_name[1]}</span>
                  </div>
                  :
                   OfferingJoinSectors.length > 2 ?
                        <div>
                          <div>
                            <span >{sector_name[0]},&nbsp;</span>
                             <span>{sector_name[1]},&nbsp;</span>
                            <span  >and...</span>
                          </div>
                        </div>
                        :
                         <p  >{!sector_name[0] ? 'Unknown' : sector_name}</p>
              }
            </div>
          </div>
          <div  className={mobile_view ? 'item' : ''}>
            <h6  className="widget-title">State(s)</h6>
            <div >
              {OfferingJoinStates.length === 2 ?
                  <div >
                    <span >{state_name}&nbsp;</span>
                  </div>
                  : OfferingJoinStates.length >2 ?
                      <div  >
                          <span >{state_name}&nbsp;</span>
                          <span >,&nbsp;and...</span>
                      </div>
                  :
                  <p  >{!state_name ? 'Nationwide' : state_name}</p>
              }
            </div>
          </div>
          <div  className={mobile_view ? 'item' : ''}>
            <h6  className="widget-title">Strategy</h6>
            {strategy_name.length > 1 ?
                <div  >
                  <span>{strategy_name[0]},&nbsp;</span>
                  <span>{strategy_name[1]}</span>
                </div>
                :
                <p  >{strategy_name[0] === undefined ? 'Unknown' : strategy_name[0]}</p>
            }
          </div>
          <div  className={mobile_view ? 'item' : ''}>
            <h6  className="widget-title">Investment Min.</h6>
            <p>{minInvesment === null || undefined ? 'Unknown':Number(minInvesment).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits:0
              })}</p>
          </div>
        </div>
        <div className='offer_description'>
          <span><b>Fund Description:</b>&nbsp;
            {descriptionOffer &&
                descriptionOffer?.length >= 250 ? (<>{`${descriptionOffer.slice(0,250)}...`} <Link href={`/${path}/${offeringId}`}><a className="elementor-post__read-more">Read More</a></Link></>): descriptionOffer}
          </span>
        </div>
        {mobile_view &&
            <div className="elementor-element elementor-element-a3b88e9 elementor-align-center elementor-widget elementor-widget-button" data-id="a3b88e9" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a href={`/${path}/${offeringId}`} className="elementor-button-link elementor-button elementor-size-lg elementor-animation-grow" role="button">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Review Offering</span>
                        </span>
                  </a>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default memo(OfferingsItem);
