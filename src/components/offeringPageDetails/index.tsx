import { FC } from "react";
import {useMediaQuery} from "@mui/material";
import {IMAGES_URL} from '../../constants/configs'
// import {useMediaQuery} from "@mui/material";

type FilterItem = {
  profileImage?: string;
  request_info_button: boolean;
  OfferingJoinStates?: Array<{
    State?: {
      name?: string,
      abbreviation?: string
    };
    createdAt?: string;
    updatedAt?: string;
    state_id?: string | number;
    id?: string | number;
    offering_id?: string;
  }>;
  OfferingJoinStrategies?: Array<{
    Strategy?: {
      name?: string
    };
    createdAt?: string;
    updatedAt?: string;
    strategy_id?: string,
    id?: string | number;
    offering_id?: string;
  }>;
  OfferingJoinSectors?: Array<{
    Sector?: {name?: string},
    id?: string | number;
    offering_id?: string;
    sector_id?: string;
    createdAt?: string;
    updatedAt?: string}>;
  structure_name?: string; 
  asset_class_name?: string;
  name?: string;
  description?: string;
  offering_webpage?: string;
  portfolio_type_name?: string;
  investor_requirement_name?: string;
  fundraising_status_name?: string;
  target_irr?: string;
  target_equity_multiple?: string;
  target_cash_on_cash?: string;
  minimum_investment?: number;
  estimated_hold_period?: string;
  estimated_first_distribution?: string;

}

const OfferingPageDetails: FC<FilterItem> = ({
  profileImage,
  request_info_button,
  OfferingJoinStates,
  OfferingJoinStrategies,
  OfferingJoinSectors,
  structure_name,
  asset_class_name,
  name,
  description,
  offering_webpage,
  portfolio_type_name,
  investor_requirement_name,
  fundraising_status_name,
  target_irr,
  target_equity_multiple,
  target_cash_on_cash,
  minimum_investment,
  estimated_hold_period,
  estimated_first_distribution
}) => {
  if(!OfferingJoinSectors) {
    OfferingJoinSectors = [];
  }
  if(!OfferingJoinStrategies) {
    OfferingJoinStrategies=[]
  }
  if(!OfferingJoinStates) {
    OfferingJoinStates=[]
  }

  const state_name = OfferingJoinStates.map((el)=>el.State?.abbreviation).join(', ');
  const strategy_name = OfferingJoinStrategies?.map((el)=>el.Strategy?.name).join(', ') || [];
  const sector_name = OfferingJoinSectors?.map((el)=>el.Sector?.name).join(', ') || [];


  const data =[
    {text1:'Target IRR',text2: target_irr},
    {text1:'Target Equity Multiple',text2: target_equity_multiple},
    {text1:'Target Cash on Cash',text2: target_cash_on_cash},
    {text1:'Minimum Investment',text2: minimum_investment  && Number(minimum_investment).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits:0
      }) },
    {text1:'Estimated Hold',text2: estimated_hold_period},
    {text1:'Estimated First Distribution',text2: estimated_first_distribution},
    {text1:'Strategy',text2:strategy_name?.length>0 ? strategy_name : undefined},
    {text1: 'Sector', text2: sector_name?.length>0 ? sector_name : undefined},
    {text1:'Geography',text2:state_name?.length>0 ? state_name : undefined},
  ]
  //     .btn_text:hover{
  //   transform: scale(1.1);
  // }
// const middle = useMediaQuery("(max-width: 1200px)")
  const small = useMediaQuery("(max-width: 1000px)")

  return (

    <div className='page_main_container' style={{background: `no-repeat url(${`${IMAGES_URL}/${profileImage}`})`, backgroundSize: '100% 100%'}}>
      {/*<img src={`https://altsdb-public-assets.s3.amazonaws.com/${profileImage}`} className='page_details'/>*/}
      <article className={small ? 'offering_details_ctn_mobile': 'offering_details_container'}>
        <div>
          <p>{structure_name} | {asset_class_name}</p>
             {name && <h1>{name}</h1>}
             {description && <p className='offer_description'>{description}</p>}
        </div>

        <div className='offering_info'>
          {fundraising_status_name && <h6 className="elementor-heading-title elementor-size-default single_page_h6"
          >{fundraising_status_name.toUpperCase()} TO NEW INVESTORS</h6>}
          {data.map((el, index)=>{
            if(el.text1 && el.text2 && el.text1 !== 'null' && el.text2 !== 'null') {
              return  <div key={index} className='info_detail'>
                         <span  >{el.text1}</span>
                         <h6 className="elementor-post__title">
                             <a  >{el.text2}</a>
                         </h6>
                    </div>
               }
             return
          })}
          {request_info_button &&
              <div
                  className="elementor-element elementor-element-a3b88e9 elementor-align-center elementor-widget elementor-widget-button"
                  data-id="a3b88e9" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a href="#request_info"
                       className="elementor-button-link elementor-button elementor-size-lg elementor-animation-grow"
                       role="button">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">Request Information</span>
</span>
                    </a>
                  </div>
                </div>
              </div>
          }
          {/*{request_info_button && <div  >*/}

          {/*  <a href="#request_info"  >Request Information</a>*/}
          {/*</div>*/}
          {/*}*/}
        </div>
      </article>
    </div>
  );
};

export default OfferingPageDetails;
