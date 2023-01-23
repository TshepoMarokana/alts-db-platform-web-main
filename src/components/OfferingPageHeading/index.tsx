import { FC } from "react";

const OfferingPageHeading: FC = () => {
  return (
    <h1 className="offeringsPremium_heading">
      <a href="https://altsdb.com/" target='blank'><span>{`AltsDb`}</span></a>&nbsp;{'>'}&nbsp;
      <a><span>{`Platform Home`}</span></a>&nbsp;{'>'}&nbsp;
      <span>{`GTIS Partners`}</span>&nbsp;{'>'}&nbsp;
      <span>{`GTIS Opportunity Fund ||`}</span>
    </h1>
  );
};

export default OfferingPageHeading;
