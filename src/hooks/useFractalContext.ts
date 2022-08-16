import { useContext } from "react";
import { FractalContext } from "../components/FractalContext/Context";
import type { FractalContextValue } from "../components/FractalContext/Context";

/**
 * A hook to access the value of the `FractalContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `FractalContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
export function useFractalContext(): FractalContextValue | null {
  const contextValue = useContext(FractalContext);

  if (process.env.NODE_ENV !== "production" && !contextValue) {
    throw new Error(
      "could not find react-redux context value; please ensure the component is wrapped in a <FractalProvider>"
    );
  }

  return contextValue;
}
