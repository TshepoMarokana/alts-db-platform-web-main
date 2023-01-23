import axios from "axios";
import { configs } from "../../configs/mainConfig";
import { Offering } from "../../../store/features/offeringsSlice";
import { FilterData } from "../../pages";

const {
  connections: { base_url, offering_url, offering_ids_premium, offering_ids_nonpremium, filter_fields_url }
} = configs;

type AxiosApi = {
  url?: string,
  offering_url?: string,
  offering_ids_premium?: string,
  offering_ids_nonpremium?: string,
  filter_fields_url?: string,
  timeout: number,
  headers: {},
  getOfferings(url_params?: any): Promise<{data: {count: number, rows: Array<Offering>}, pagination?: {count: number | string,limit: number | string,offset: number | string}}>,
  getOffering(id?: string | string[]): Promise<Offering>,
  getOfferingIds(isPremium: boolean): Promise<{data: Array<string>}>,
  getFilterData(): Promise<{data: Array<FilterData>}>,
  updateOfferings(subUrl: string, data: {}): Promise<Array<Offering>>,
}
const AxiosApiService: AxiosApi = {
  url: base_url,
  offering_url: offering_url,
  offering_ids_premium: offering_ids_premium,
  offering_ids_nonpremium: offering_ids_nonpremium,
  filter_fields_url: filter_fields_url,
  timeout: 0,
  headers: {},

  async getOfferings(url_params) {
    debugger
    try {
      let requestUrl = base_url;
      // let requestUrl: string = `${base_url}?offset=${offset}&limit=${limit}`;
      if(url_params && url_params.offset) {
        requestUrl += `?offset=${url_params.offset}`;
      } else {
        requestUrl += '?offset=0';
      }

      if(url_params && url_params.limit) {
        requestUrl += `&limit=${url_params.limit}`;
      } else {
        requestUrl += '&limit=25';
      }

      if(url_params && url_params.filter.length > 0) {
        url_params.filter.forEach((item: any) => {
          const keys = Object.keys(item);
          requestUrl += `&${keys[0]}=${item[keys[0]]}`;          
        })
      }      
      
      const response = await axios({
        method: 'get',
        url: requestUrl
      });
      const {
        data
      } = response;
      return data;
    } catch(error) {
      console.error(error);
      
    }
  },  
    
    // try {      
    //   if(filter_url) {
    //     const response = await axios({
    //       method: 'get',
    //       url: `${base_url}${filter_url}`
    //     });
    //     const {
    //       data = {},
    //     } = response;        
    //     return data;  
    //   } else {
    //     const response = await axios({
    //       method: 'get',
    //       url: base_url
    //     });
    //     const {
    //       data = {},
    //     } = response;
    //     return data;
    //   }     
    // } catch(error) {
    //   console.error("this error occured using axios getOfferings", error);
    //   return error
    // }

  async getOffering(id) {
    try {
      const response = await axios({
        method: 'get',
        url: `${this.offering_url}/${id}`
      });
      const {
        data = {},
      } = response;
      return data;
    } catch (error) {
      return error;
    }
  },

  async getOfferingIds(isPremium) {
    if(isPremium) {
      try {
        const response = await axios({
          method: 'get',
          url: offering_ids_premium
        });
        const {
          data = {}
        } = response;
        return data;
      } catch(error) {
        console.error(error,'error')
        return error
      }
    } else {
      try {
        const response = await axios({
          method: 'get',
          url: offering_ids_nonpremium
        });
        const {
          data = {}
        } = response;
        return data;
      } catch(error) {
        console.error(error,'error')

        return error
      }
    }
  },

  async getFilterData() {
    try {
      const response = await axios({
        method: 'get',
        url: this.filter_fields_url
      });
      const {
        data
      } = response;
      return data;
    }
    catch(error) {
      console.error(error,'error')

      return error;
    }
  },

  async updateOfferings(subUrl,item) {
    try {
      const response = await axios({
        method: 'patch',
        url: `${this.url}/${subUrl}`,
        data: item
      });
      const {
        data = {},
      } = response;
      return data
    } catch (error) {
      console.error("this error occured using axios updateOfferings", error);
      return error
    }
  }

}

export default AxiosApiService;
