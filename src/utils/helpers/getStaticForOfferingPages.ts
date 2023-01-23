import { GetStaticPaths, GetStaticProps } from "next";
// import { getOfferings } from "../../../store/selectors";
import AxiosApiService from "../axiosApi";

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await AxiosApiService.getOffering(context?.params?.offering_id);
    return {
        props: {
            data
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await AxiosApiService.getOfferings();
    const ids = response?.data?.rows?.map(item => item.id);
    const paths = ids?.map(item => {
        return {
            params: {offering_id: item}
        }
    })

    return {
        paths,
        fallback: true
    }
}

