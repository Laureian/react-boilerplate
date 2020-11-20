import { useState } from 'react';

export type UseLocalStorageFunction = (value: any) => void;
export type UseLocalStorage = (
  key: string,
  initialValue: unknown
) => [any, UseLocalStorageFunction];


/**
 * Store data in browser local storage
 *
 * cc: https://usehooks.com/useLocalStorage/
 *
 * @param key string
 * @param initialValue any
 * @returns Array [value, setValue]
 */
export const useLocalStorage: UseLocalStorage = (
  key: string,
  initialValue: unknown
) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      // eslint-disable-next-line no-console
      console.error('[Error] useLocalStorage:', error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  // eslint-disable-next-line @typescript-eslint/ban-types
  const setValue = (value: Function | unknown) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      // eslint-disable-next-line no-console
      console.error('[Error] useLocalStorage:', error);
    }
  };

  return [storedValue, setValue];
};
