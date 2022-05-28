import { timestampValue } from './utils';

export class Nanoflake {
  constructor(private readonly epoch: number, private readonly value: bigint) {}

  public toString(): string {
    return this.value.toString();
  }

  public creationTimeMillis(): number {
    return this.epoch + Number(timestampValue(this.value));
  }

  public creationTime(): Date {
    return new Date(this.creationTimeMillis());
  }
}
