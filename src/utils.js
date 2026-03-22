export const UPDATE_INTERVAL_MS = 50; // Update loop runs every 50ms (~20 FPS)
export const GRAVITY = 2;             // Vertical acceleration per frame
export const WALK_SPEED = 3;          // Horizontal pixels per frame

export const State = {
    FALLING: 'FALLING',
    WALKING: 'WALKING',
    RUNNING: 'RUNNING',
    IDLE: 'IDLE',
    JUMPING: 'JUMPING',
    DRAGGING: 'DRAGGING',
    SLEEP: 'SLEEP'
};

/**
 * Utility to check if a window is maximized
 */
export function isWindowMaximized(window) {
    return window && window.maximized_horizontally && window.maximized_vertically;
}
