import { FC } from "react";
import { Offering } from "../../../../store/features/offeringsSlice";
import OfferingsItem from "../../offering/index";
type FilterItem = {
  nonPremiumOfferings: Array<Offering>;
};

const VerticalOfferings: FC<FilterItem> = ({ nonPremiumOfferings }) => (
  <div >
    {nonPremiumOfferings?.map(
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
         OfferingJoinStrategies,
         OfferingJoinStates,
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
          offeringId={id}
          offeringProfileImage={profile_image}
          assetClassName={asset_class_name}
          structureName={structure_name}
          offeringName={name}
          descriptionOffer={description}
          sectorName={sector_name}
          stateAbbreviation={state_abbreviation}
          OfferingJoinStrategies={OfferingJoinStrategies}
          path='offering'
          portfolioName={portfolio_name}
          OfferingJoinSectors={OfferingJoinSectors}
          OfferingJoinStates={OfferingJoinStates}
          targetIrr={target_irr}
          minimumInvestment={minimum_investment}
          minInvesment={minimum_investment}
        />
      )
    )}
  </div>
);

export default VerticalOfferings;
