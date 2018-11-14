/// <reference types="react" />
import * as React from 'react';
export interface ITourState {
    foundTarget: boolean;
    style: React.CSSProperties;
}
export interface ITourProps {
    tour: ITour;
    stepIndex: number;
}
export interface ITour {
    id: string;
    steps: ITourStep[];
    currentStep: number;
}
export interface ITourStep {
    target: string;
    title: string;
    content: string;
    placement: string;
    showNext: boolean;
    showBack: boolean;
    offset?: number;
    align?: string;
    order?: number;
}
/**
 * The currently active Tour
 */
export declare let current: ITour;
/**
 * Register tours that can be started later
 * @param tours
 */
export declare const addTours: (tours: ITour[]) => void;
/**
 * Kick off a tour and render the first step
 * @param id Id of the Tour to start
 * @param containerSelector Selector for the top level container that the `.mw-tours` container will be appended to
 * @param getElement Function that provides the target node / element that `step` should be rendered next to
 */
export declare const start: (id: string, containerSelector: string, flowKey: string, getElement?: (step: ITourStep) => any) => ITour;
/**
 * Increment the `currentStep` of the tour. If the `currentStep` before the incrementing is the last step then call `done`
 * @param tour The tour to progress, defaults to `current`
 */
export declare const next: (tour?: ITour) => void;
/**
 * Decrement the `currentStep` of the tour
 * @param tour The tour to progress, defaults to `current`
 */
export declare const previous: (tour?: ITour) => void;
/**
 * Move the `currentStep` of the tour to the provided `index` and re-render
 * @param tour The tour to move, defaults to `current`
 */
export declare const move: (tour: ITour, index: any) => void;
/**
 * Either re-render the current step, or move through the tour until a matching target node is found,
 * or if no target nodes can be found unmount the `.mw-tours` node
 * @param tour The tour to move, defaults to `current`
 */
export declare const refresh: (tour?: ITour) => void;
/**
 * Reset `current` to null and unmount the `.mw-tours` node
 * @param tour The tour to move, defaults to `current`
 */
export declare const done: (tour?: ITour) => void;
/**
 * Re-render the tour in the `.mw-tours` container
 * @param tour The tour to move, defaults to `current`
 */
export declare const render: (tour?: ITour) => void;
/**
 * Get the target element for the provided step. No default implementation is provided
 */
export declare let getTargetElement: (step: ITourStep) => any;
