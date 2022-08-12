export function includesHelper<T extends U, U>(
  source: ReadonlyArray<T>,
  el: U
) {
  return source.includes(el as T)
}

export function upperFirst(raw: string): string {
  return raw[0].toUpperCase() + raw.slice(1)
}
