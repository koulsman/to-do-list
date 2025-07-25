import { atomWithStorage } from "jotai/utils";

export const loggedUserAtom = atomWithStorage('loggedUser', null);
export const isLoggedInAtom = atomWithStorage('isLoggedIn', false);
