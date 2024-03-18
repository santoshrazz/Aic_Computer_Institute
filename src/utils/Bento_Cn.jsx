import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    const mergedClasses = clsx(...inputs);
    return twMerge(mergedClasses);
}
