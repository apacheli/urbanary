export interface AutocompleteExtraData {
  results: AutocompleteExtraPreview[];
}

export interface AutocompleteExtraPreview {
  preview: string;
  term: string;
}

export interface Word {
  definition: string;
  parmalink: string;
  thumbs_up: number;
  sound_urls: string[];
  author: string;
  word: string;
  defid: number;
  current_vote: string;
  written_on: string;
  example: string;
  thumbs_down: number;
}

export interface WordList {
  list: Word[];
}

export const BASE_URL = "https://api.urbandictionary.com/v0";

export const request = async <T>(path: string): Promise<T> =>
  (await fetch(`${BASE_URL}/${path}`)).json();

/**
 * Get the autocompletions for a term
 * @param term The term to get autocompletions for
 */
export const autocomplete = (term: string) =>
  request<string[]>(`autocomplete?term=${term}`);

/**
 * Get the autocompletions for a term along with extra preview definitions
 * @param term The term to get autocompletion extras for
 */
export const autocompleteExtra = (term: string) =>
  request<AutocompleteExtraData>(`autocomplete-extra?term=${term}`);

/**
 * Get the definition of a word
 * @param term The term to define
 */
export const define = (term: string) =>
  request<WordList>(`define?term=${term}`);

/**
 * Look up the definition a word by searching with an ID
 * @param defid The definition's ID
 * @returns 
 */
export const defineDefid = async (defid: number) =>
  (await request<WordList>(`define?defid=${defid}`)).list[0];

/**
 * Get a random word
 */
export const random = () => request<WordList>("random");

/**
 * Get the words of the day
 */
export const wordsOfTheDay = () => request<WordList>("words_of_the_day");
