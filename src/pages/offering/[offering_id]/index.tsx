import { FC } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import AxiosApiService from "../../../utils/axiosApi";
import { Offering } from "../../../../store/features/offeringsSlice";

const OfferingPage: FC<{ offeringData: { data: Offering } }> = () => {
  const router = useRouter();
  return <main className="site-main hfeed" id="main">
      <div data-elementor-type="wp-page" data-elementor-id="2952" className="elementor elementor-2952">
        <div>Karlen Div ID is {router?.query?.offering_id}</div>
      </div>
  </main>
};
export const getStaticProps: GetStaticProps = async (context) => {
  // let data = null;
  // try {
  //   data = await AxiosApiService.getOffering(context?.params?.offering_id);
  //   console.log(data);
  // }catch (err){
  //   console.log(err);
  // }
  console.log("getStaticProps has been called################################")
  return {
    props: {
      offeringData: {},
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const responseNonPremium = await AxiosApiService.getOfferingIds(false); //false for nonpremiums
  const responsePremium = await AxiosApiService.getOfferingIds(true); //true for premiums
  console.log("getStaticPaths has been called*****************************")
  // const ids = responseNonPremium?.data.concat(responsePremium?.data);

  const paths = responsePremium?.data?.map((item: string) => {
    return {
      params: { offering_id: item },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default OfferingPage;
