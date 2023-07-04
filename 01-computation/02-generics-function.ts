// I type generici sono "funzioni"
{
  type IsString<T> = T extends string ? true : false;

  type TestTrue = IsString<"ciao">;
  // ^?

  type TestFalse = IsString<1>;
  // ^?

  type A = {
    a: string;
  };

  type B = {
    b: string;
  };

  type AB = A & B;
  // ^?

  type Prettify<T> = {
    [K in keyof T]: T[K];
  };

  type PrettifyAB = Prettify<AB>;
  // ^?

  // Proprietà distributiva di union
  // passando una union come parametro ad un tipo generico
  // il tipo generico viene applicato ad ogni membro della union

  type Union = A | B;

  type PrettifyUnion = Prettify<Union>;
}
