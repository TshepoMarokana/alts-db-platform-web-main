import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { useAppSelelctor, useAppDispatch } from "../../store/hooks/hooks";
import { fetchOfferings } from "../../store/async/middleware/fetchOfferings";
import AxiosApiService from "../utils/axiosApi";
import FilterOfferings from "../components/filterOfferings";
import HorizontalOfferings from "../components/offerings/horizontalOfferingsPremium";
import Advertisement from "../components/advertisement /advertisement";
import Filter_mobile from '../components/filter_mobile/filter_mobile'
import { getOfferings, getOfferingsCount} from "../../store/selectors";
import {Offering} from "../../store/features/offeringsSlice"
  import {OfferingsSkeleton} from '../components/skeletons/filterSkeleton';

export type FilterData = {
  header: string,
  content: {
    [key: string]: string
  },
  urlKey: string,
  withDropdown: string | boolean,
}

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const [fetchOfferingsParameters, setFetchOfferingsParameters] = useState<any>();
  const [filterData, setFilterData] = useState<{data: Array<FilterData>}>();
  const [categories, setCategories] = useState<any>();
  const [click, setClick] = useState(false);
  const [hidden,setHidden] = useState(false)
  const [showMore,setShowMore] = useState(false)
  const router = useRouter();
  // const [show,setShow] = useState(false)
  const [number,setNumber]=useState(25)
  const [offers,setOffers]=useState<any>()
  // const [loading,setLoading] = useState(false)

  // const { data } = useAppSelelctor(
  //   (state) => getOfferingsDividedByStatus(state),
  // );
  const count = useAppSelelctor<any>((state) =>
      getOfferingsCount(state)
  );
  useEffect(() => {
    // @ts-ignore
    debugger;
    // @ts-ignore
    dispatch(fetchOfferings(fetchOfferingsParameters)).then(el=>setOffers(el?.payload?.data.rows));

  }, [fetchOfferingsParameters]);

  useEffect(() => {
    AxiosApiService.getFilterData().then(data => {
      setFilterData(data);
      const filterFieldsInitial = data?.data?.map(item => {
        const newObj: any = {
          header: item.header,
          urlKey: item.urlKey,
          withDropdown: item.withDropdown,
          content: []
        }
        for(let key in item.content) {
          newObj.content.push({
            [key]: item.content[key],
            selected: false
          });
        }
        return newObj;
      });
      setCategories(filterFieldsInitial)
    });
  },[])

  const openFilter = (): void => {
    setClick(true);
  };

  useEffect(() => {
    const newFilterParameters: any = [];
    categories?.map((item:any) => {
      let count = 0;
      const res = item.content.map((item2: any) => {
      const id = Object.values(item2)[0];
        if(item2.selected === true && count > 0) {
          newFilterParameters[newFilterParameters.length -1][item.urlKey] += `,${id}`;
        }
        if(item2.selected === true && count === 0) {
          newFilterParameters.push({[item.urlKey]: id})
          count++;
        }
      })
      return res;
    })
    setFetchOfferingsParameters((state: any) => {
      return {
        ...state,
        filter: newFilterParameters,
        limit:25,
        }
     }
    )
    setNumber(25)
  },[categories])

  const toggleShowMore = () =>{
    setShowMore(!showMore)
    setNumber((prevState) => prevState + 25)
    if(number + 25 > count){
      setHidden(true)
    }
    else{
      setHidden(false)
    }
  }

  useEffect(()=>{
    if(showMore){
      setFetchOfferingsParameters((state: any)=>{
        if(state.limit) {
          return {
            ...state,
            limit:number,
          }
        }
        else{
          return {
            ...state,
            limit:50,
          }
        }
      })
      setShowMore(false)
    }
  },[showMore])


  const smallScreen = useMediaQuery("(max-width:1000px)");
  useEffect(() => {
    if (smallScreen) {
      setClick(false);
    }
  }, [smallScreen]);


  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      resetCategories()
    })
  })

  const clickCategory = (categoryName: string, id: string): void => {
    setCategories((state: any) => {

      const newState = [...state];
      const newState2 = newState.map(item => {
        const res = item.content.map((item2: any) => {
          if(item2[categoryName] === id) {
            item2.selected = !item2.selected;
            return item2
          } else {
            return item2
          }
        })
        return {
          header: item.header,
          urlKey: item.urlKey,
          withDropdown: item.withDropdown,
          content: res
        };
      })
      return newState2;
    })
  };

  const selectDropdownItem = (selectedList: any, selectedItem: any): void => {
  const {name} = selectedItem;

    setCategories((state: any) => {
      const newState = [...state];
      const newState2 = newState.map(item => {
      const res = item.content.map((item2: any) => {
          if(item2[name]) {
            item2.selected = true;
            return item2
          } else {
            return item2
          }
        })
        return {
          header: item.header,
          urlKey: item.urlKey,
          withDropdown: item.withDropdown,
          content: res
        };
      })
      return newState2;
    })
  }

  const removeDropdownItem = (removedList: any, removedItem: any): void => {
    const {name} = removedItem;
    setCategories((state: any) => {
    const newState = [...state];
    const newState2 = newState.map(item => {
        const res = item.content.map((item2: any) => {
          if(item2[name]) {
            item2.selected = false;
            return item2
          } else {
            return item2
          }
        })
        return {
          header: item.header,
          urlKey: item.urlKey,
          withDropdown: item.withDropdown,
          content: res
        };
      })
      return newState2;
    })
  }

  const focusInput = () => {};
  const onchangeInput = () => {};

  const resetCategories = (): void => {
    const filterFieldsInitial = filterData?.data.map((item: any) => {
      const newObj: any = {
        header: item.header,
        urlKey: item.urlKey,
        content: [],
        withDropdown: item.withDropdown
      }
      for(let key in item.content) {
        newObj.content.push({
          [key]: item.content[key],
          selected: false
        });
      }
      return newObj;
    });

    setCategories(filterFieldsInitial)
  }
  const offerings = useAppSelelctor<Array<Offering>>((state) =>
  getOfferings(state)
  );
  // const offeringsStatus = useAppSelelctor<any>((state) =>
  //     getOfferingsStatus(state)
  // );
  // console.log(showMore,'show')
  console.log(offers,'offers')
  // if((offers?.length !== 0 ) && (filterData !== undefined)) {
    return (

        <main id="main" className="site-main hfeed">
          <Advertisement id="div-gpt-ad-1651090639500-0"/>
          <div data-elementor-type="wp-page" data-elementor-id="2952" className="elementor elementor-2952">
            {(offers?.length !== 0) && (filterData !== undefined)  ?
                <div className={smallScreen ? 'main_container_mobile' : "main_container"}>
                  {!smallScreen ? <FilterOfferings
                          filterFields={categories}
                          setState={setOffers}
                          clickCategory={clickCategory}
                          resetCategories={resetCategories}
                          focusInput={focusInput}
                          onchangeInput={onchangeInput}
                          selectDropdownItem={selectDropdownItem}
                          removeDropdownItem={removeDropdownItem}/>
                      :
                      <>
                        {!click ?
                            <button onClick={openFilter} className='filter_mobile_btn'>
                              <span>Filter</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="white"
                                   viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                              </svg>
                            </button>
                            :
                            <Filter_mobile
                                close={click}
                                setClose={setClick}
                                filterFields={categories}
                                clickCategory={clickCategory}
                                resetCategories={resetCategories}
                                focusInput={focusInput}
                                onchangeInput={onchangeInput}
                                selectDropdownItem={selectDropdownItem}
                                removeDropdownItem={removeDropdownItem}/>
                        }
                      </>
                  }
                  <div>
                    <>
                      <HorizontalOfferings premiumOfferings={offers}/>
                      {(!hidden && offerings?.length > 24) &&
                          <div
                              className="elementor-element elementor-element-a3b88e9 elementor-align-center elementor-widget elementor-widget-button"
                              data-id="a3b88e9" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              {/*{(show) ?*/}
                              {/*    <ThreeDots*/}
                              {/*        height="80"*/}
                              {/*        width="80"*/}
                              {/*        radius="9"*/}
                              {/*        color="#4fa94d"*/}
                              {/*        ariaLabel="three-dots-loading"*/}
                              {/*        wrapperStyle={{}}*/}
                              {/*        visible={true}*/}
                              {/*    />*/}
                              {/*    :*/}
                                  <button onClick={toggleShowMore}
                                          className="elementor-button-link elementor-button elementor-size-lg elementor-animation-grow"
                                          role="button">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Show more</span>
                        </span>
                                  </button>
                              {/*}*/}
                        {/*      <div className="elementor-button-wrapper">*/}
                        {/*        <button onClick={toggleShowMore}*/}
                        {/*                className="elementor-button-link elementor-button elementor-size-lg elementor-animation-grow"*/}
                        {/*                role="button">*/}
                        {/*<span className="elementor-button-content-wrapper">*/}
                        {/*    <span className="elementor-button-text">Show more</span>*/}
                        {/*</span>*/}
                        {/*        </button>*/}
                        {/*      </div>*/}
                            </div>
                          </div>
                      }
                    </>
                  </div>
                </div>
                :
                <OfferingsSkeleton />
            }
          </div>
          <Advertisement id="div-gpt-ad-1651090639500-1"/>
        </main>
    );
  // }
  //  else {
  //   return (
  //       <>
  //         <main id="main" className="site-main hfeed">
  //           <Advertisement id="div-gpt-ad-1651090639500-0" />
  //           <div data-elementor-type="wp-page" data-elementor-id="2952"  className="elementor elementor-2952">
  //               <OfferingsSkeleton />
  //           </div>
  //           <Advertisement id="div-gpt-ad-1651090639500-0" />
  //         </main>
  //       </>
  //   )
  // }

};

export default HomePage;
