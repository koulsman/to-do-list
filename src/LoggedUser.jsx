import { atomWithStorage } from "jotai/utils";

export const loggedUserAtom = atomWithStorage('loggedUser', '');
export const isLoggedInAtom = atomWithStorage('isLoggedIn', false);
