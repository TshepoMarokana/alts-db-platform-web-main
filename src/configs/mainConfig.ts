import { BASE_URL } from '../constants/configs';

type Configs = {
  connections: {
    base_url?: string,
    offering_url?: string,
    offering_ids_premium?: string,
    offering_ids_nonpremium?: string,
    filter_fields_url?: string,
  }
  navigation: string[];
};

export const configs: Configs = {
  connections: {
    base_url: BASE_URL+"/offerings",
    offering_url: BASE_URL+"/offerings",
    offering_ids_premium: BASE_URL+"/premiumids",
    offering_ids_nonpremium: BASE_URL+"/nonpremiumids",
    filter_fields_url:  BASE_URL+"fields"
  },
  navigation: [
    "About",
    "Advisors",
    "News",
    "Podcast",
    "Webinars",
    "Alts Expo",
  ],
};
