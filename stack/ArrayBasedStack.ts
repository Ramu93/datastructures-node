import {Stack} from "./Stack";

export class AStack implements Stack{
  private data: string[] = []

  push(value: string) {
    this.data.push(value)
  }

  pop(): string | undefined {
    return this.data.pop()
  }

  peek(): string | undefined {
    const {data} = this
    return data && data[data.length - 1]
  }

  size(): number {
    return this.data.length
  }
}
