/** @format */
import {
  ChronologyMovement,
  ChronologyCategory,
  OperationTypes,
} from '../types';

export interface ChronologyData {
  movements: ChronologyMovement[];
  categories: ChronologyCategory[];
  operationTypes: OperationTypes[];
  totalRetrieved: number;
}

export interface ChronologyState {
  readonly data: ChronologyData | null;
  readonly isLoaded: boolean;
  readonly isLoading: boolean;
  readonly errors: string[] | null;
}

export interface ChronologyAction {
  type: EChronologyActionTypes;
  payload?: ChronologyState;
  errors?: string[] | null;
  params?: ChronologyParams;
}

export interface ChronologyApiResponse {
  status: string;
  payload: ChronologyData;
  errors: [];
}

export enum EChronologyActionTypes {
  GET_CHRONOLOGY = 'trigger/GET_CHRONOLOGY',
  GET_CHRONOLOGY_REQUEST = 'event/GET_CHRONOLOGY_REQUEST',
  GET_CHRONOLOGY_SUCCESS = 'event/GET_CHRONOLOGY_SUCCESS',
  GET_CHRONOLOGY_FAILURE = 'event/GET_CHRONOLOGY_FAILURE',
}

type lang = 'it' | 'eng';
type productType =
  | 'DEBIT_CARD'
  | 'ACCOUNT'
  | 'DEPOSIT'
  | 'CREDIT_CARD'
  | 'PREPAID_CARD';
type bankProfile = '-1' | '1' | '2' | '3' | '4';

export interface ProductInfo {
  productType: productType;
  bankProfile: bankProfile;
  productId: string;
  productParent: string | null;
}

export interface ChronologyParams {
  lang?: lang;
  products: ProductInfo[];
  filters?: {
    categories?: string[];
    operationTypes?: string[];
    amountMax?: string;
    amountMin?: string;
    fromDate?: string;
    toDate?: string;
    income?: boolean;
    outcome?: boolean;
  };
  pageNumber: number;
  pageSize: number;
  useCache?: boolean;
}

export interface GroupedMovements {
  category: string | null;
  movements: ChronologyMovement[];
}
