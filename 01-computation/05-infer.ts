{
  // Infer permette di "chiedere" a typescript qual è il tipo di un tipo

  type ApiCall = Promise<{ data: string }>;

  type InferPromise<T> = T extends Promise<infer U> ? U : never;

  type ApiCallData = InferPromise<ApiCall>;

  type F = (a: string, b: number, c: boolean) => void;

  type InferFunction<T> = T extends (...args: infer U) => void ? U : never;

  type FArgs = InferFunction<F>;

  // Infer unito ai String Template Literal Types ci permette di computare una stringa
  type Hello = "hello";

  type UppercaseDashed<T extends string> =
    T extends `${infer First}${infer Rest}`
      ? Rest extends ""
        ? Capitalize<First>
        : `${Capitalize<First>}-${UppercaseDashed<Rest>}`
      : T;

  type HelloDashed = UppercaseDashed<Hello>;
}
