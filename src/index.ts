/**
 * @onecoach/ui-workout
 *
 * Workout-specific UI components for OneCoach.
 * Provides visual editors for workout programs and live session tracking.
 *
 * @packageDocumentation
 */

// =============================================================================
// Builder Components - Visual editors for workout program elements
// =============================================================================
export {
  WarmupEditor,
  SupersetEditor,
  CircuitEditor,
  CardioEditor,
  ElementTypeSelector,
} from './builder';

// Re-export types from builder
export type { WorkoutElementType } from '@onecoach/schemas/workout';

// =============================================================================
// Live Session Components - Real-time workout tracking UI
// =============================================================================
export {
  LiveWarmupCard,
  LiveCardioCard,
  LiveSupersetCard,
  LiveCircuitCard,
} from './live';

// Re-export props types for consumers
export type {
  LiveWarmupCardProps,
  LiveCardioCardProps,
  LiveSupersetCardProps,
  LiveCircuitCardProps,
} from './live';
