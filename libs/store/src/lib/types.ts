import { ProductInfo } from './chronology';

export interface TypeExtraArguments {
  PUBLIC_SITE_URL: string;
  BASE_URL: string;
}

export interface ChronologyMovement {
  bankProfileId: string;
  tppUid: string;
  sobjectId: string;
  propBankTransactionCode: string;
  descriptionStructured: string;
  valueDate: number;
  accountId: string;
  amount: number;
  beneficiaryIban: string | null;
  beneficiaryName: string | null;
  bookingDate: string | null;
  bookingNumber: string | null;
  bookingTotalAmount: string | null;
  category: string | null;
  chargedAccountNumber: string | null;
  chargedProductNumber: string | null;
  contactName: string | null;
  createdDate: number | null;
  creditor: string | null;
  cro: string | null;
  currency: string | null;
  emittente: string | null;
  executer: string | null;
  executionDate: string | null;
  expiry: string | null;
  fiscalCode: string | null;
  formattedDebitCardNumber: string | null;
  formattedDebitCardPAN: string | null;
  hasSplit: string | null;
  isIncome: boolean;
  mcc: string | null;
  memo: string | null;
  merchant: string | null;
  mobileNumber: string | null;
  movUpdateDate: string | null;
  movementId: string | null;
  numeroRiBa: string | null;
  oldCategory: string | null;
  oldSubCategory: string | null;
  operationType: string | null;
  paymentDescription: string | null;
  paymentType: string | null;
  piva: string | null;
  productInfo: ProductInfo;
  receivingAccountNumber: string | null;
  receivingProductNumber: string | null;
  recurrent: string | null;
  recurrentTag: string | null;
  reference: string | null;
  sender: string | null;
  status: string | null;
  subCategory: string | null;
  telcoOperator: string | null;
  typology: string | null;
  userId: string | null;
  vehicleLicensePlate: string | null;
  vehicleType: string | null;
}
export interface ChronologyCategory {
  alias: string;
  label: string;
}
export interface OperationTypes {
  alias: string;
  label: string;
}

export interface CategoryImage {
  id: string;
  name: string | null;
  url: string;
}

export interface Subcategory {
  name: string;
  alias: string;
}

export interface Category {
  _id: string;
  alias: string;
  typeId: number;
  name: string;
  shortName: string;
  description: string;
  color: string;
  alphaColor: string;
  textColor: string;
  urlCompletedBackground: string;
  images: CategoryImage[];
  usedForProjects: boolean;
  usedForMovements: boolean;
  subcategories: Subcategory[];
  entrance: boolean;
}
export interface CategoriesObj {
  [key: string]: Category;
}
