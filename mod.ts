export interface AutocompleteExtraData {
  results: AutocompleteExtraPreview[];
}

export interface AutocompleteExtraPreview {
  preview: string;
  term: string;
}

export interface UncacheableEntry {
  defid: number;
  up: number;
  down: number;
  current: string;
}

export interface UncacheableEntryList {
  thumbs: UncacheableEntry[];
}

export interface Word {
  definition: string;
  permalink: string;
  thumbs_up: number;
  sound_urls?: string[];
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

export const request = async <T>(path: string): Promise<T> => {
  const response = await fetch(BASE_URL + path);
  if (response.ok) {
    return response.json();
  }
  throw new Error(await response.text());
};

/**
 * Get the autocompletions for a term.
 * @param term The term to get autocompletions for.
 */
export const autocomplete = (term: string) =>
  request<string[]>(`/autocomplete?term=${term}`);

/**
 * Get the autocompletions for a term with extra preview definitions.
 * @param term The term to get autocompletion extras for.
 */
export const autocompleteExtra = (term: string) =>
  request<AutocompleteExtraData>(`/autocomplete-extra?term=${term}`);

/**
 * Get the definition of a word.
 * @param term The term to define.
 * @param page The page to start searching from.
 */
export const define = (term: string, page = 1) =>
  request<WordList>(`/define?term=${term}&page=${page}`);

/**
 * Look up the definition of a word by searching with it's ID.
 * @param defid The definition's ID.
 */
export const defineDefid = async (defid: number) =>
  (await request<WordList>(`/define?defid=${defid}`)).list[0];

/** Get a random list of definitions. */
export const random = () => request<WordList>("/random");

/**
 * I have no idea what this does.
 * @param ids A list of definition IDs.
 */
export const uncacheable = (ids: number[]) =>
  request<UncacheableEntryList>(`/uncacheable?ids=${ids.join(",")}`);

/**
 * Get the words of the day.
 * @param page The page to start searching from.
 */
export const wordsOfTheDay = (page = 1) =>
  request<WordList>(`/words_of_the_day?page=${page}`);
