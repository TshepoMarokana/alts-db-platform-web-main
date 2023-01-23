import { FC } from "react";
import Multiselect from 'multiselect-react-dropdown';
// import {useMediaQuery} from "@mui/material";

type FilterItemType = {
  header: string;
  urlKey?: string;
  content: [];
  clickCategory(categoryName: string, id: string): any;
  selectDropdownItem(selectedList: any, selectedItem: any): any,
  removeDropdownItem(removedList: any, removedItem: any): any,
  focusInput(categoryName: string, id: string): any;
  onchangeInput(categoryName: string, id: string): any;
};

const FilterSectionDropdown: FC<FilterItemType> = ({header, content, selectDropdownItem,removeDropdownItem}) => {
    
  const dropdownContent = content?.map(item => {
    const keys = Object.keys(item);
    return {
      name: keys[0],
      id: item[keys[0]],
      selected: item[keys[1]]
    }
  })?.sort((item1, item2) => {
    if(item1?.name < item2?.name) {
      return -1
    } else {
      return 1
    }
  });

  const preselectedItems = content?.filter(item => {
    // return item['selected'] === true;
    return item['selected'] === true 
  }).map(item => {
    const keys = Object.keys(item);
    return {
      name: keys[0],
      id: item[keys[0]],
      selected: item[keys[1]]
    }
  })?.sort((item1, item2) => {
    if(item1?.name < item2?.name) {
      return -1
    } else {
      return 1
    }
  });
  // const mobile = useMediaQuery("(max-width: 1000px)")
  
  return (
    <div className='filter_section'>
      <p className="widget-title" >{header.toUpperCase()}</p>
      {/* {content.map(item => {
      const keys = Object.keys(item);      
      return <FilterItem key={item[keys[0]]} id={item[keys[0]]} value={keys[0]} checked={item[keys[1]]} clickCategory={clickCategory}/>
<<<<<<< HEAD
    })} */}
      
      {/* <input className={styles.input_dropdown} list="myList" onChange={(e) => selectDropdownItem(e.target.value)}></input>
      <datalist className="datalist_dropdown" id="myList">
        {content.map(item => {
          const keys = Object.keys(item);      
          return <FilterDropdownItem 
            key={item[keys[0]]} 
            id={item[keys[0]]} 
            value={keys[0]} 
            checked={item[keys[1]]} 
            // selectDropdownItem={selectDropdownItem}
            />
        })}  
      </datalist> */}
      {preselectedItems.length > 0 ? (
        <Multiselect
        options={dropdownContent}
        selectedValues={preselectedItems}
        onSelect={selectDropdownItem}
        onRemove={removeDropdownItem}
        displayValue="name"
        customCloseIcon={<span >&#x2715;</span>}
        singleSelect={false}

      />
      ): (
        <Multiselect 
        options={dropdownContent}
        // selectedValues={preselectedItems}
        onSelect={selectDropdownItem}
        onRemove={removeDropdownItem}
        displayValue="name"
        singleSelect={false}
      />
      )}
      

    </div>
  );
};

export default FilterSectionDropdown;
