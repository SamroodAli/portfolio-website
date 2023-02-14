import {
  createSlice,
  CreateSliceOptions,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

type createStateReturnType<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
> = {
  [K in `${Name}Reducer`]: Slice<State, CaseReducers>["reducer"];
} & {
  [K in `${Name}Actions`]: Slice<State, CaseReducers>["actions"];
};

// a custom utility to create a slice and export it's action and reducer
export function createState<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
): createStateReturnType<State, CaseReducers, Name> {
  if (!options.name) throw new Error("create slice name not given");

  const slice = createSlice(options);

  return {
    [`${options.name}Reducer`]: slice.reducer,
    [`${options.name}Actions`]: slice.actions,
  } as createStateReturnType<State, CaseReducers, Name>;
}
