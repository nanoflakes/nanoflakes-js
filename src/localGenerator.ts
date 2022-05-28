import { NanoflakeGenerator } from './generator';
import { Nanoflake } from './nanoflake';
import { GENERATOR_ID_SHIFT, MAX_SEQUENCE, TIMESTAMP_SHIFT } from './utils';

export class NanoflakeLocalGenerator implements NanoflakeGenerator {
  private readonly epoch: number;
  private readonly generatorId: number;
  private sequence: number = 0;
  private lastTimestamp: number = -1;

  constructor(epoch: number, generatorId: number) {
    this.epoch = epoch;
    this.generatorId = generatorId;
    this.sequence = 0;
  }

  next(): Nanoflake {
    let timestamp = Date.now();

    if (timestamp <= this.lastTimestamp) {
      throw new Error(`Clock moved backwards. Refusing to generate nanoflakes for ${this.lastTimestamp - timestamp} milliseconds`);
    }

    if (this.lastTimestamp !== timestamp) {
      this.sequence = 0;
    } else {
      this.sequence = (this.sequence + 1) & MAX_SEQUENCE;
      if (this.sequence === 0) {
        timestamp = NanoflakeLocalGenerator.tillNextMillis(timestamp);
      }
    }

    //const value = (timestamp << TIMESTAMP_SHIFT) | (this.generatorId << GENERATOR_ID_SHIFT) | this.sequence;
    // using bigint
    const value = BigInt(timestamp) << BigInt(TIMESTAMP_SHIFT) | BigInt(this.generatorId) << BigInt(GENERATOR_ID_SHIFT) | BigInt(this.sequence);
    return new Nanoflake(this.epoch, value);
  }

  epochMillis(): number {
    return this.epoch;
  }

  private static tillNextMillis(lastTimestamp: number): number {
    let timestamp = Date.now()
    while (timestamp <= lastTimestamp) {
      timestamp = Date.now();
    }
    return timestamp;
  }
}
