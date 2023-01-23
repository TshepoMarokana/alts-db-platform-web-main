import { createSlice } from "@reduxjs/toolkit";

import { fetchOfferings } from "../../async/middleware/fetchOfferings";

export type Offering = {
  AssetClass?: {
    name?: string
  };
  Structure?: {
    name?: string
  };
  FundraisingStatus?: {
    name?: string
  };
  InvestorRequirement?: {
    name?: string
  };
  OfferingJoinSectors?: Array<{
    Sector?: {
      name?: string;
    };
    id?: string | number;
    offering_id?: string;
    sector_id?: string;
    createdAt?: string;
    updatedAt?: string
  }>;
  OfferingJoinStates?: Array<{
    State?: {
      name?: string,
      abbreviation?: string
    };
    createdAt?: string;
    updatedAt?: string;
    state_id?: string | number;
    id?: string | number;
    offering_id?: string;
  }>;
  OfferingJoinStrategies?: Array<{
    Strategy?: {
      name?: string
    };
    createdAt?: string;
    updatedAt?: string;
    strategy_id?: string,
    id?: string | number;
    offering_id?: string;
  }>;
  PortfolioType?: {
    name?: string
  };
  Sponsor?: {
    contact_city?: string | number;
    contact_email?: string;
    contact_name?: string;
    contact_phone?: string | number;
    contact_state?: string | number;
    contact_street?: string | number;
    contact_title?: string | number;
    contact_zip?: string | number;
    createdAt?: string;
    description?: string | number;
    leadership_1_image?: string;
    leadership_1_linkedin?: string;
    leadership_1_name?: string;
    leadership_1_title?: string;
    leadership_2_image?: string;
    leadership_2_linkedin?: string;
    leadership_2_name?: string;
    leadership_2_title?: string;
    logo?: string;
    name?: string;
    sponsor_id?: string;
    updatedAt?: string;
    video?: string;
  }
  id: string;
  name?: string;
  description?: string;
  offering_webpage?: string;
  sponsor_id?: number;
  structure_id?: number;
  structure_name?: string;
  sector_name?: string;
  offering_type_id?: number;
  security_type_id?: number;
  fundraising_status_id?: number;
  asset_class_id?: number;
  asset_class_name?: string;
  investor_requirement_id?: number;
  state_abbreviation?: string;
  portfolio_type_id?: number;
  target_irr?: string;
  target_cash_on_cash?: string;
  target_return_on_cost?: string;
  target_equity_multiple?: string;
  minimum_investment?: number;
  offering_size?: number;
  offering_fees?: number;
  estimated_hold_period?: string;
  estimated_first_distribution?: string;
  deck?: string;
  video?: string;
  profile_image?: string;
  images?:string[];
  premium_status_id?: number | string;
  is_real?: number;
  strategy_name?: string;
  portfolio_type_name?: string;
  investor_requirement_name?: string;
  fundraising_status_name?: string;
  offering_webinar?: string | number;
  sponsor_name?: string;
  sponsor_logo?: string; 
  sponsor_contact_name?: string;
  sponsor_contact_title?: string;
  sponsor_contact_email?: string;
  sponsor_contact_phone?: string | number;
  sponsor_description?: string;
  sponsor_leadership_1_image?: string;
  sponsor_leadership_1_name?: string;
  sponsor_leadership_1_title?: string;
  sponsor_leadership_1_linkedin?: string;
  sponsor_video?: string;

};

const initialState: {
  loading: boolean;
  error: boolean | null;
  // offerings: Array<Offering>
  offerings: {
    data: {
      count: number,
      rows: Array<Offering>
    },
    pagination?: {
      count?: number | string,
      limit?: number | string,
      offset?: number | string
    }
  }
} = {
  loading: false,
  error: false,
  offerings: {
    data: {
      count: 0,
      rows: []
    }
  }
}

export const offeringsData = createSlice({
  name: 'offerings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOfferings.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.offerings = {
        data: {
          count: 0,
          rows: []
        }
      };
      return state;
    });
    builder.addCase(fetchOfferings.fulfilled, (state, action) => {

      state.loading = false;
      state.error = false;
      state.offerings = {
        data: {
          count: action.payload?.data?.count,
          rows: action.payload?.data?.rows
        },
        pagination: {
          count: action?.payload?.pagination?.count,
          limit: action?.payload?.pagination?.limit,
          offset: action?.payload?.pagination?.offset
        }
      }
      console.log(state?.offerings,'state')
      return state;
    });
    builder.addCase(fetchOfferings.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.offerings = {
        data: {
          count: 0,
          rows: []
        }
      };
      return state;
    });
  },
});
