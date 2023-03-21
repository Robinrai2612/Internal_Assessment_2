/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBook: OnCreateBookSubscription;
  onUpdateBook: OnUpdateBookSubscription;
  onDeleteBook: OnDeleteBookSubscription;
  onCreateReview: OnCreateReviewSubscription;
  onUpdateReview: OnUpdateReviewSubscription;
  onDeleteReview: OnDeleteReviewSubscription;
};

export type CreateBookInput = {
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  id?: string | null;
};

export type ModelBookConditionInput = {
  isbn?: ModelStringInput | null;
  title?: ModelStringInput | null;
  author?: ModelStringInput | null;
  published_year?: ModelIntInput | null;
  publisher?: ModelStringInput | null;
  and?: Array<ModelBookConditionInput | null> | null;
  or?: Array<ModelBookConditionInput | null> | null;
  not?: ModelBookConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Book = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: ModelReviewConnection | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelReviewConnection = {
  __typename: 'ModelReviewConnection';
  items: Array<Review | null>;
  nextToken?: string | null;
};

export type Review = {
  __typename: 'Review';
  id: string;
  book: Book;
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type UpdateBookInput = {
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  id: string;
};

export type DeleteBookInput = {
  id: string;
};

export type CreateReviewInput = {
  id?: string | null;
  reviewer_name: string;
  comment: string;
  bookReviewsId?: string | null;
};

export type ModelReviewConditionInput = {
  reviewer_name?: ModelStringInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelReviewConditionInput | null> | null;
  or?: Array<ModelReviewConditionInput | null> | null;
  not?: ModelReviewConditionInput | null;
  bookReviewsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateReviewInput = {
  id: string;
  reviewer_name?: string | null;
  comment?: string | null;
  bookReviewsId?: string | null;
};

export type DeleteReviewInput = {
  id: string;
};

export type SearchableBookFilterInput = {
  isbn?: SearchableStringFilterInput | null;
  title?: SearchableStringFilterInput | null;
  author?: SearchableStringFilterInput | null;
  published_year?: SearchableIntFilterInput | null;
  publisher?: SearchableStringFilterInput | null;
  id?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableBookFilterInput | null> | null;
  or?: Array<SearchableBookFilterInput | null> | null;
  not?: SearchableBookFilterInput | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableBookSortInput = {
  field?: SearchableBookSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableBookSortableFields {
  isbn = 'isbn',
  title = 'title',
  author = 'author',
  published_year = 'published_year',
  publisher = 'publisher',
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type SearchableBookAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableBookAggregateField;
};

export enum SearchableAggregateType {
  terms = 'terms',
  avg = 'avg',
  min = 'min',
  max = 'max',
  sum = 'sum',
}

export enum SearchableBookAggregateField {
  isbn = 'isbn',
  title = 'title',
  author = 'author',
  published_year = 'published_year',
  publisher = 'publisher',
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type SearchableBookConnection = {
  __typename: 'SearchableBookConnection';
  items: Array<Book | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: 'SearchableAggregateResult';
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: 'SearchableAggregateScalarResult';
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: 'SearchableAggregateBucketResult';
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: 'SearchableAggregateBucketResultItem';
  key: string;
  doc_count: number;
};

export type ModelBookFilterInput = {
  isbn?: ModelStringInput | null;
  title?: ModelStringInput | null;
  author?: ModelStringInput | null;
  published_year?: ModelIntInput | null;
  publisher?: ModelStringInput | null;
  and?: Array<ModelBookFilterInput | null> | null;
  or?: Array<ModelBookFilterInput | null> | null;
  not?: ModelBookFilterInput | null;
};

export type ModelBookConnection = {
  __typename: 'ModelBookConnection';
  items: Array<Book | null>;
  nextToken?: string | null;
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null;
  reviewer_name?: ModelStringInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelReviewFilterInput | null> | null;
  or?: Array<ModelReviewFilterInput | null> | null;
  not?: ModelReviewFilterInput | null;
  bookReviewsId?: ModelIDInput | null;
};

export type ModelSubscriptionBookFilterInput = {
  isbn?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  author?: ModelSubscriptionStringInput | null;
  published_year?: ModelSubscriptionIntInput | null;
  publisher?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBookFilterInput | null> | null;
  or?: Array<ModelSubscriptionBookFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  reviewer_name?: ModelSubscriptionStringInput | null;
  comment?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionReviewFilterInput | null> | null;
  or?: Array<ModelSubscriptionReviewFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateBookMutation = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBookMutation = {
  book: any;
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBookMutation = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateReviewMutation = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type UpdateReviewMutation = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type DeleteReviewMutation = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type SearchBooksQuery = {
  author: any;
  __typename: 'SearchableBookConnection';
  items: Array<{
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: 'SearchableAggregateResult';
    name: string;
    result:
      | (
          | {
              __typename: 'SearchableAggregateScalarResult';
              value: number;
            }
          | {
              __typename: 'SearchableAggregateBucketResult';
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetBookQuery = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListBooksQuery = {
  filter(arg0: (book: any) => boolean): unknown;
  __typename: 'ModelBookConnection';
  items: Array<{
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetReviewQuery = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type ListReviewsQuery = {
  __typename: 'ModelReviewConnection';
  items: Array<{
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      isbn?: string | null;
      title?: string | null;
      author?: string | null;
      published_year?: number | null;
      publisher?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    reviewer_name: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    bookReviewsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateBookSubscription = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBookSubscription = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBookSubscription = {
  __typename: 'Book';
  isbn?: string | null;
  title?: string | null;
  author?: string | null;
  published_year?: number | null;
  publisher?: string | null;
  reviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      reviewer_name: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      bookReviewsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReviewSubscription = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type OnUpdateReviewSubscription = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

export type OnDeleteReviewSubscription = {
  __typename: 'Review';
  id: string;
  book: {
    __typename: 'Book';
    isbn?: string | null;
    title?: string | null;
    author?: string | null;
    published_year?: number | null;
    publisher?: string | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  reviewer_name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  bookReviewsId?: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async CreateBook(
    input: CreateBookInput,
    condition?: ModelBookConditionInput
  ): Promise<CreateBookMutation> {
    const statement = `mutation CreateBook($input: CreateBookInput!, $condition: ModelBookConditionInput) {
        createBook(input: $input, condition: $condition) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookMutation>response.data.createBook;
  }
  async UpdateBook(
    input: UpdateBookInput,
    condition?: ModelBookConditionInput
  ): Promise<UpdateBookMutation> {
    const statement = `mutation UpdateBook($input: UpdateBookInput!, $condition: ModelBookConditionInput) {
        updateBook(input: $input, condition: $condition) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookMutation>response.data.updateBook;
  }
  async DeleteBook(
    input: DeleteBookInput,
    condition?: ModelBookConditionInput
  ): Promise<DeleteBookMutation> {
    const statement = `mutation DeleteBook($input: DeleteBookInput!, $condition: ModelBookConditionInput) {
        deleteBook(input: $input, condition: $condition) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookMutation>response.data.deleteBook;
  }
  async CreateReview(
    input: CreateReviewInput,
    condition?: ModelReviewConditionInput
  ): Promise<CreateReviewMutation> {
    const statement = `mutation CreateReview($input: CreateReviewInput!, $condition: ModelReviewConditionInput) {
        createReview(input: $input, condition: $condition) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReviewMutation>response.data.createReview;
  }
  async UpdateReview(
    input: UpdateReviewInput,
    condition?: ModelReviewConditionInput
  ): Promise<UpdateReviewMutation> {
    const statement = `mutation UpdateReview($input: UpdateReviewInput!, $condition: ModelReviewConditionInput) {
        updateReview(input: $input, condition: $condition) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReviewMutation>response.data.updateReview;
  }
  async DeleteReview(
    input: DeleteReviewInput,
    condition?: ModelReviewConditionInput
  ): Promise<DeleteReviewMutation> {
    const statement = `mutation DeleteReview($input: DeleteReviewInput!, $condition: ModelReviewConditionInput) {
        deleteReview(input: $input, condition: $condition) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReviewMutation>response.data.deleteReview;
  }
  async SearchBooks(
    filter?: SearchableBookFilterInput,
    sort?: Array<SearchableBookSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableBookAggregationInput | null>
  ): Promise<SearchBooksQuery> {
    const statement = `query SearchBooks($filter: SearchableBookFilterInput, $sort: [SearchableBookSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableBookAggregationInput]) {
        searchBooks(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchBooksQuery>response.data.searchBooks;
  }
  async GetBook(id: string): Promise<GetBookQuery> {
    const statement = `query GetBook($id: ID!) {
        getBook(id: $id) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookQuery>response.data.getBook;
  }
  async ListBooks(
    filter?: ModelBookFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBooksQuery> {
    const statement = `query ListBooks($filter: ModelBookFilterInput, $limit: Int, $nextToken: String) {
        listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBooksQuery>response.data.listBooks;
  }
  async GetReview(id: string): Promise<GetReviewQuery> {
    const statement = `query GetReview($id: ID!) {
        getReview(id: $id) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReviewQuery>response.data.getReview;
  }
  async ListReviews(
    filter?: ModelReviewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReviewsQuery> {
    const statement = `query ListReviews($filter: ModelReviewFilterInput, $limit: Int, $nextToken: String) {
        listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            book {
              __typename
              isbn
              title
              author
              published_year
              publisher
              id
              createdAt
              updatedAt
            }
            reviewer_name
            comment
            createdAt
            updatedAt
            bookReviewsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReviewsQuery>response.data.listReviews;
  }
  OnCreateBookListener(
    filter?: ModelSubscriptionBookFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateBook'>>
  > {
    const statement = `subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
        onCreateBook(filter: $filter) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateBook'>>
    >;
  }

  OnUpdateBookListener(
    filter?: ModelSubscriptionBookFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateBook'>>
  > {
    const statement = `subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
        onUpdateBook(filter: $filter) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateBook'>>
    >;
  }

  OnDeleteBookListener(
    filter?: ModelSubscriptionBookFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteBook'>>
  > {
    const statement = `subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
        onDeleteBook(filter: $filter) {
          __typename
          isbn
          title
          author
          published_year
          publisher
          reviews {
            __typename
            items {
              __typename
              id
              reviewer_name
              comment
              createdAt
              updatedAt
              bookReviewsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteBook'>>
    >;
  }

  OnCreateReviewListener(
    filter?: ModelSubscriptionReviewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateReview'>>
  > {
    const statement = `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
        onCreateReview(filter: $filter) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateReview'>>
    >;
  }

  OnUpdateReviewListener(
    filter?: ModelSubscriptionReviewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateReview'>>
  > {
    const statement = `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
        onUpdateReview(filter: $filter) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateReview'>>
    >;
  }

  OnDeleteReviewListener(
    filter?: ModelSubscriptionReviewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteReview'>>
  > {
    const statement = `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
        onDeleteReview(filter: $filter) {
          __typename
          id
          book {
            __typename
            isbn
            title
            author
            published_year
            publisher
            reviews {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          reviewer_name
          comment
          createdAt
          updatedAt
          bookReviewsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteReview'>>
    >;
  }
}
