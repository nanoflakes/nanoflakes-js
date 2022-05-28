import { timestampValue } from './utils';

export class Nanoflake {
  constructor(
    public readonly epoch: number,
    public readonly value: bigint,
  ) {}

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
