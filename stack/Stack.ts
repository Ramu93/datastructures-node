export interface Stack {
  push: (value: string) => void
  pop: () => string | undefined
  peek: () => string | undefined
  size: () => number
}
