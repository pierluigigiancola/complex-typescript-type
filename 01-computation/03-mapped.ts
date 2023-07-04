{
  // Mapped types permettono di iterare su una union e generare un nuovo tipo

  type Test = {
    a: string;
    b: number;
    c: boolean;
  };

  // nessuna modifica
  type Prettify<T> = {
    [K in keyof T]: T[K];
  };

  type PrettifyTest = Prettify<Test>;

  // aggiungiamo readonly
  type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
  };

  type ReadOnlyTest = ReadOnly<Test>;

  // aggiungiamo optional
  type Optional<T> = {
    [K in keyof T]?: T[K];
  };

  type OptionalTest = Optional<Test>;

  // cambiamo il tipo delle proprietà
  type ChangeType<T> = {
    [K in keyof T]: string;
  };

  type ChangeTypeTest = ChangeType<Test>;

  // rinominiamo le proprietà
  type Rename<T> = {
    [K in keyof T as `new_${string & K}`]: T[K];
  };

  type RenameTest = Rename<Test>;

  // escludiamo alcune proprietà
  type Exclude<T, ExcludedKey extends keyof T> = {
    [K in keyof T as K extends ExcludedKey ? never : K]: T[K];
  };

  type ExcludeTest = Exclude<Test, "a" | "b">;
}
