export interface Book {
  id: string;
  filter(arg0: (values: { _id: string; }) => boolean): unknown;
  _id: string;
  isbn: string;
  title: string;
  author: string;
  published_year: number;
  publisher: string;
}
