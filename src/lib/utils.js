import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Classnames utility function
 * @param  {...any} args 
 * @returns 
 */
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}