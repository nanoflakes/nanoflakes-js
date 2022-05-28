/**
 * A generator of nanoflakes.
 */
import { Nanoflake } from './nanoflake';

export interface NanoflakeGenerator {
  /**
   * Gets the next nanoflake.
   *
   * @return a new, generated nanoflake.
   */
  next(): Nanoflake;

  /**
   * Gets this nanoflake generator's epoch.
   *
   * @return the epoch in milliseconds.
   */
  epochMillis(): number;

}
