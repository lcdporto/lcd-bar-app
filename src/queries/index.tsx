/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Scalars
// ====================================================

/** The `DateTime` scalar type represents a DateTimevalue as specified by[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type DateTime = any;

// ====================================================
// Types
// ====================================================

export interface Query {
  allPayments?: PaymentType[] | null;

  allUsers?: UserType[] | null;

  allProducts?: ProductType[] | null;

  product?: ProductType | null;
}

export interface PaymentType {
  id: string;

  barcode: number;

  pin: number;

  name: string;
}

export interface UserType {
  id: string;

  password: string;

  lastLogin?: DateTime | null;
  /** Define se este utilizador tem todas as permissões sem explicitamente as atribuir. */
  isSuperuser: boolean;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;

  firstName: string;

  lastName: string;

  email: string;
  /** Define se o utilizador pode usar a administração do site. */
  isStaff: boolean;
  /** Defina se este utilizador deva ser tratado como ativo. Não selecione em vez de remover as contas. */
  isActive: boolean;

  dateJoined: DateTime;
}

export interface ProductType {
  id: number;

  name: string;

  quantity: number;

  price: number;
}

export interface Mutations {
  createProduct?: CreateProduct | null;

  createPayment?: CreatePayment | null;
}

export interface CreateProduct {
  ok?: boolean | null;

  product?: ProductType | null;
}

export interface CreatePayment {
  payment?: PaymentType | null;
}

// ====================================================
// Arguments
// ====================================================

export interface ProductQueryArgs {
  id?: number | null;
}
export interface CreateProductMutationsArgs {
  name?: string | null;

  quantity?: number | null;
}
export interface CreatePaymentMutationsArgs {
  barcode?: number | null;

  pin?: number | null;
}

// ====================================================
// END: Typescript template
// ====================================================

// ====================================================
// Documents
// ====================================================

export type ProductDetailsVariables = {
  id?: number | null;
};

export type ProductDetailsQuery = {
  __typename?: "Query";

  product?: ProductDetailsProduct | null;
};

export type ProductDetailsProduct = {
  __typename?: "ProductType";

  id: number;

  name: string;

  price: number;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const ProductDetailsDocument = gql`
  query productDetails($id: Int) {
    product(id: $id) {
      id
      name
      price
    }
  }
`;
export class ProductDetailsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ProductDetailsQuery, ProductDetailsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ProductDetailsQuery, ProductDetailsVariables>
        query={ProductDetailsDocument}
        {...this["props"] as any}
      />
    );
  }
}
export function ProductDetailsHOC<
  TProps = any,
  OperationOptions = ReactApollo.OperationOption<
    TProps,
    ProductDetailsQuery,
    ProductDetailsVariables
  >
>(operationOptions: OperationOptions) {
  return ReactApollo.graphql<
    TProps,
    ProductDetailsQuery,
    ProductDetailsVariables
  >(ProductDetailsDocument, operationOptions);
}
