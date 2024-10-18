import { randomUUID } from 'node:crypto'

export class UniqueEntityID {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  public equals(uu_id: UniqueEntityID) {
    return uu_id.toValue() === this.value
  }
}
