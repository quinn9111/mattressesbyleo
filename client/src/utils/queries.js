import { gql } from '@apollo/client';

export const QUERY_MATTRESSES = gql`
  query getMattresses($vendor: ID) {
    mattress(vendor: $vendor) {
      _Id
      name
      description
      price
      size
      vendor {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($mattresses: [ID]!) {
    checkout(mattresses: $mattresses) {
      session
    }
  }
`;

export const QUERY_ALL_MATTRESSES = gql`
  {
    mattresses {
        _Id
        name
        description
        price
        size
        vendor {
          name
        }
      }
    }
`;

export const QUERY_VENDORS= gql`
  {
    vendors {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      carts {
        _id
        purchaseDate
        mattresses {
            _Id
            name
            description
            price
            size
        }
      }
    }
  }
`;
