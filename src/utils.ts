/**
 * How much of the nanoflake is occupied by the timestamp of the ID, in bits.
 */
import { NanoflakeLocalGenerator } from './localGenerator';

export const TIMESTAMP_BITS = 14;
/**
 * How much of an nanoflake is occupied by the generator ID, in bits.
 */
export const GENERATOR_ID_BITS = 10;
/**
 * How much of an nanoflake is occupied by sequence number, in bits.
 */
export const SEQUENCE_BITS = 12;
/**
 * The maximum ID possible for a generator.
 */
export const MAX_GENERATOR_ID = 1023;
/**
 * The max sequence value of a snowflake.
 */
export const MAX_SEQUENCE = 4095;
/**
 * The value used for generator id-based shifts.
 */
export const GENERATOR_ID_SHIFT = SEQUENCE_BITS;
/**
 * The value used for timestamp-based shifts.
 */
export const TIMESTAMP_SHIFT = SEQUENCE_BITS + GENERATOR_ID_SHIFT;

/**
 * Creates a local generator.
 * @param epoch base epoch
 * @param generatorId the generator id.
 * @return a new local nanoflake generator.
 */
export function localGenerator(epoch: number, generatorId: number) {
  return new NanoflakeLocalGenerator(epoch, generatorId);
}

/**
 * Gets the timestamp of a nanoflake.
 * @param value the nanoflake.
 * @return the raw timestamp.
 */
export function timestampValue(value: bigint) {
  return value >> BigInt(TIMESTAMP_SHIFT);
}

/**
 * Gets the generator ID of a nanoflake.
 * @param id the nanoflake.
 * @return the generator ID.
 */
export function generatorValue(id: bigint) {
  return id >> BigInt(GENERATOR_ID_SHIFT) & BigInt(MAX_GENERATOR_ID);
}

/**
 * Gets the sequence ID of a nanoflake.
 * @param id the nanoflake.
 * @return the sequence ID.
 */
export function sequenceValue(id: bigint) {
  return id & BigInt(MAX_SEQUENCE);
}
