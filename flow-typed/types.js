
// @flow

export type Show = {
  title: string,
  description: string,
  poster: string,
  imdbID: string,
  trailer: string,
  year: string,
  rating: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
}
