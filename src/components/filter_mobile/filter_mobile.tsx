import { FC } from 'react';
import FilterOfferings from '../filterOfferings/index'

type FilterItem = {
    filterFields: Array<{
        header: string,
        urlKey: string,
        withDropdown: string | boolean,
        content: []
    }>,
    close:boolean,
    setClose:any,
    clickCategory(categoryName: string, id: string): any,
    selectDropdownItem(selectedList: any, selectedItem: any): any,
    removeDropdownItem(removedList: any, removedItem: any): any,
    resetCategories(): void;
    focusInput(categoryName: string, id: string): any;
    onchangeInput(categoryName: string, id: string): any;
}

const Filter_mobile: FC<FilterItem> = ({close,setClose,filterFields, clickCategory, resetCategories, focusInput, onchangeInput, selectDropdownItem, removeDropdownItem}) => {

    return (

        <div id="offcanvas" className="ct-panel ct-header active" data-behaviour="right-side">
            <div className="ct-panel-inner filter_mobile_container">
                <div className="ct-panel-actions">
                    <button className="ct-toggle-close" data-type="type-1" aria-label="Close drawer" onClick={()=>setClose(false)}>
                        <svg className="" width="12" height="12" viewBox="0 0 15 15" >
                            <path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"></path>
                        </svg>
                    </button>
                </div>
                <div className="ct-panel-content" data-device="desktop"></div>
                <div className="ct-panel-content" data-device="mobile">
                    <FilterOfferings color='#3eaf7c' filterFields={filterFields} clickCategory={clickCategory} resetCategories={resetCategories} focusInput={focusInput} onchangeInput={onchangeInput} selectDropdownItem={selectDropdownItem} removeDropdownItem={removeDropdownItem}/>

                </div>
            </div>
        </div>
    );
};

export default Filter_mobile;
