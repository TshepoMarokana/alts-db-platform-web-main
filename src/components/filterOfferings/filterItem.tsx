import { FC, memo } from "react";

type FilterItem = {
  id: string;
  value:string;
  checked: boolean;
  clickCategory(categoryName: string, id: string): any
};
const FilterItem: FC<FilterItem> = ({ value, checked, id, clickCategory }) => {
    return (

    <div className='filter_item'>
      <input
        type="checkbox"
        value={value}
        name={value}
        checked={checked}
        onClick={() => clickCategory(value,id)}
        className='checkbox_filter'
        />
        <label htmlFor={value}>{value}</label>
    </div>
  )
};

export default memo(FilterItem);
