import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../app";
import { Offering } from "../features/offeringsSlice";


export const getOfferings = (state: RootState) => {
  return state.offerings.offerings.data.rows
};
export const getOfferingsStatus = (state: RootState) => {
    return state.offerings.loading
}
export const getOfferingsCount = (state: RootState) => {
    return state.offerings.offerings.data.count
};

export const getOfferingsDividedByStatus = createSelector(
  getOfferings,
  (items) => {
    if(items?.length > 0) {    
    const {
        data
      // premiumOfferings,
      // nonPremiumOfferings,
    }: { data: Array<Offering> } =
      items?.reduce<{
        data: Array<Offering>;
        // nonPremiumOfferings: Array<Offering>;
      }>(
        (acc, item) => {
          if (item.premium_status_id && item.premium_status_id === 'ef960bef-b341-45ce-9047-c4d33c6047bf') { // ANKAP BANA MXAC TEMPORARY
            acc?.data.push(item);
            return acc;
          } else if (item.premium_status_id && item.premium_status_id === '11ad9ee6-1eba-4556-a9ea-462512d0c58f') { 
            acc?.data.push(item);
            return acc;
          } else {
            return acc;
          }
        },
        { data:[]}
      );
      return {data}
    } else {
      return { data: []}
    }
  }
);
