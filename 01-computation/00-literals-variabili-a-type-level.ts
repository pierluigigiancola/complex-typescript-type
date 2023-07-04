// I tipi literals sono come variabili a type level
// Possiamo effetuare computazioni su di essi e generare nuovi tipi
{
  // string
  type World = string;
  let world = "world";

  // string literal
  type Hello = "hello";
  const hello = "hello";

  // string literal concatenation via template literal
  type HelloWorld = `${Hello} ${World}`;
  // ^?
  // object
  type TObj = {
    a: string;
    b: number;
  };
  const obj = {
    a: "hello",
    b: 42,
  };
  // object literal
  type TObjLiteral = {
    a: "hello";
    b: 42;
  };
  const objLiteral = {
    a: "hello",
    b: 42,
  } as const;

  // array
  type TArr = string[];
  const arr = ["hello", "world"];

  // tuple
  type TTuple = [string, number];
  const tuple: [string, number] = ["hello", 42];
  // tuple literal
  type TTupleLiteral = ["hello", 42];
  const tupleLiteral = ["hello", 42] as const;

  type MergeTuple = [...TTuple, ...TTupleLiteral];
  // ^?
  const mergeTuple = [...tuple, ...tupleLiteral] as const;
}
