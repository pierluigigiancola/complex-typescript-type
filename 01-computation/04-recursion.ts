{
  type Test = {
    a: string;
    b: number;
    c: boolean;
    d: {
      e: string;
      f: number;
      g: boolean;
    };
  };

  type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
  };

  type ReadOnlyTest = ReadOnly<Test>;

  type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
  };

  type DeepReadonlyTest = DeepReadonly<Test>;
}
