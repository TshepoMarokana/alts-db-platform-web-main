import { FC } from "react";
import { Offering } from "../../../../store/features/offeringsSlice";
import OfferingsItem from "../../offering/index";
type FilterItem = {
  premiumOfferings: Array<Offering>;
};
const HorizontalOfferings: FC<FilterItem> = ({ premiumOfferings }) => {
  return(
  <>
  <div >
    {premiumOfferings?.map(
      ({
        AssetClass: {
          name: asset_class_name
        } = {},
        Structure: {
          name: structure_name
        } = {},
         PortfolioType: {
           name: portfolio_name
         } = {},
        OfferingJoinSectors,
        OfferingJoinStates,
        OfferingJoinStrategies,
        id,
        profile_image,
        name,
        description,
        sector_name,
        state_abbreviation,
        target_irr,
        minimum_investment,

       }) => (
        <OfferingsItem
          key={id}
          offeringId = {id}
          offeringProfileImage={profile_image}
          assetClassName={asset_class_name}
          structureName={structure_name}
          offeringName={name}
          descriptionOffer={description}
          sectorName={sector_name}
          portfolioName={portfolio_name}
          OfferingJoinSectors={OfferingJoinSectors}
          OfferingJoinStrategies={OfferingJoinStrategies}
          path='offering'
          OfferingJoinStates={OfferingJoinStates}
          stateAbbreviation={state_abbreviation}
          targetIrr={target_irr}
          minimumInvestment={minimum_investment}
          minInvesment={minimum_investment}
        />
      )
    )}
  </div>
  </>
)};

export default HorizontalOfferings;
