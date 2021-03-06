/**
 * @module event
 */
import VidarObject from './object';
export interface Event {
    target: VidarObject;
    type: string;
}
/**
 * Listen for an event or category of events
 *
 * @param target - a vidar object
 * @param type - the id of the type (can contain subtypes, such as
 * "type.subtype")
 * @param listener
 */
export declare function subscribe(target: VidarObject, type: string, listener: <T extends Event>(T: any) => void): void;
/**
 * Remove an event listener
 *
 * @param target - a vidar object
 * @param type - the id of the type (can contain subtypes, such as
 * "type.subtype")
 * @param listener
 */
export declare function unsubscribe(target: VidarObject, listener: <T extends Event>(T: any) => void): void;
/**
 * Emits an event to all listeners
 *
 * @param target - a vidar object
 * @param type - the id of the type (can contain subtypes, such as
 * "type.subtype")
 * @param event - any additional event data
 */
export declare function publish(target: VidarObject, type: string, event: Record<string, unknown>): Event;
