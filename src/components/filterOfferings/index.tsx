import {FC, useEffect, useState} from "react";
import FilterSection from "./filterSection";
import FilterSectionDropdown from "./filterSectionDropdown";
import {useAppDispatch, useAppSelelctor} from "../../../store/hooks/hooks";
import {getOfferingsCount} from "../../../store/selectors";
import {fetchOfferings} from "../../../store/async/middleware/fetchOfferings";
// import {Offering} from "../../../store/features/offeringsSlice";
// import {useMediaQuery} from "@mui/material";

type FilterItem = {
    color?: string;
    setState?:any;
    filterFields: Array<{
      header: string,
      urlKey: string,
      content: [],
      withDropdown: string | boolean
    }>;
    clickCategory(categoryName: string, id: string): any,
    selectDropdownItem(selectedList: any, selectedItem: any): any,
    removeDropdownItem(removedList: any, removedItem: any): any,
    resetCategories(): void;
    focusInput(categoryName: string, id: string): any;
    onchangeInput(categoryName: string, id: string): any;

};

const FilterOfferings: FC<FilterItem> = ({color,setState,filterFields,clickCategory,resetCategories,focusInput,onchangeInput,selectDropdownItem,removeDropdownItem}) => {
    const [query,setQuery] = useState('')
    const dispatch = useAppDispatch()
    const [fetchOfferingsParameters, setFetchOfferingsParameters] = useState<any>();
    const offeringsCount = useAppSelelctor<any>((state) =>
        getOfferingsCount(state)
  );


    useEffect(()=>{
        if(query !== undefined) {
            setFetchOfferingsParameters((state: any) => {
                    return {
                        ...state,
                        filter: [{query:query}],
                    }
            })
        }

    },[query])

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchOfferings(fetchOfferingsParameters)).then((el)=>setState(el?.payload?.data.rows));
    }, [fetchOfferingsParameters]);


// console.log(filterFields && filterFields,'query')

  return (
    <div className='filter_container'>

          <h2 className="elementor-heading-title elementor-size-default">Filter Offerings</h2>
          <div className='filter_title'>
            {(offeringsCount > 0) ?
              <span className='result_text'>{offeringsCount} Results</span>
             : <span className='result_text'>0 Results</span>}
              <div className="elementor-element elementor-element-a3b88e9 elementor-align-center elementor-widget elementor-widget-button" data-id="a3b88e9" data-element_type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                          <a onClick={resetCategories} href="" className="elementor-button-link elementor-button elementor-size-lg elementor-animation-grow" role="button">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Reset</span>
                        </span>
                          </a>
                      </div>
                  </div>
              </div>

          </div>
        <div>
            <input type="text"  name="search" onChange={e=>setQuery(e.target.value)}  className="required email" id="mce-EMAIL" placeholder='Search'/>
        </div>
          {
            filterFields?.map(({ header, content, withDropdown }) => {
              if(withDropdown) {
                return <FilterSectionDropdown
                  key={header}
                  header={header}
                  content={content}
                  clickCategory={clickCategory}
                  focusInput={focusInput}
                  onchangeInput={onchangeInput}
                  selectDropdownItem={selectDropdownItem}
                  removeDropdownItem={removeDropdownItem}/>
              } else {
                return <FilterSection
                  key={header}
                  header={header}
                  content={content}
                  clickCategory={clickCategory}/>
              }
            }
            )
          }
        </div>
  );
};

export default FilterOfferings;
