import { FC, memo } from "react";
import FilterItem from "./filterItem";
// import {useMediaQuery} from "@mui/material";

type FilterItemType = {
  header: string,
  urlKey?: string,
  content: [];
  clickCategory(categoryName: string, id: string): any
};

const FilterSection: FC<FilterItemType> = ({ header, content = [],clickCategory}) => {
  content.sort((item1, item2) => {
    const keys1 = Object.keys(item1);
    const keys2 = Object.keys(item2);
    if(keys1[0] < keys2[0]) {
      return -1
    } else {
      return 1
    }
  })
  // const mobile = useMediaQuery("(max-width: 1000px)")
  
  return (
  <div className="filter_section" >
    <p  className="widget-title" >{header.toUpperCase()}</p>
    {content.map(item => {
      const keys = Object.keys(item);
      return <FilterItem key={item[keys[0]]} id={item[keys[0]]} value={keys[0]} checked={item[keys[1]]} clickCategory={clickCategory}/>
    })}

  </div>
  )
};

export default memo(FilterSection);
