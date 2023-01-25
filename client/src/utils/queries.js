import { gql } from '@apollo/client';

export const QUERY_MATTRESSES = gql`
  query getMattresses($vendor: ID) {
    mattress(vendor: $vendor) {
      mattress_Id
      name
      description
      price
      image
      size
      vendor {
        vendor_id
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
        mattress_Id
        name
        description
        price
        image
        size
        vendor {
          name
        }
      }
    }
  }
`;

export const QUERY_VENDORS= gql`
  {
    vendors {
      vendor_id
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
            mattress_Id
            name
            description
            price
            image
            size
        }
      }
    }
  }
`;
