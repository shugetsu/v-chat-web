declare type ElRef<T extends HtmlElement = HTMLDivElement> = Nullable<T>

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
