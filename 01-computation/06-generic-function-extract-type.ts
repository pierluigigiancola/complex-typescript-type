{
  // Possiamo legare il tipo generico a una specifico parametro in ingresso
  // e fare computazione sul tipo più specifico nel momento in cui
  // la funzione è utilizzata

  const getValuesSubset = <
    T extends Record<string, unknown>,
    K extends keyof T
  >(
    obj: T,
    keys: K[]
  ): Pick<T, K> => {
    const result = {} as Pick<T, K>;

    keys.forEach((key) => {
      result[key] = obj[key];
    });

    return result;
  };

  const obj = {
    a: 1,
    b: "2",
    c: true,
  };

  type Prettify<T> = {
    [K in keyof T]: T[K];
  };
  const result = getValuesSubset(obj, ["a"]);
  type Result = Prettify<typeof result>;

  const obj2 = {
    d: 1,
    e: "2",
    f: true,
  };
  const result2 = getValuesSubset(obj2, ["d"]);
  type Result2 = Prettify<typeof result2>;
}
