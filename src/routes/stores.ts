import { writable } from 'svelte/store'

export const screenWidth = writable(0);
export const nothing: number = -1;
export const words : number = 0;
export const about : number = 1;
export const projects : number = 2;
export const skills : number = 3;
export const contact : number = 4;

export const visible = writable(nothing);