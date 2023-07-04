// utilizziamo la keyword extends per fare un confronto tra due tipi
{
  type World = string;

  type Hello = "hello";

  type WorldHello = World extends Hello ? true : false;
  // ^?

  type HelloWorld = Hello extends World ? true : false;
  // ^?

  type A = {
    a: string;
  };

  type B = {
    a: string;
    b: string;
  };

  type AB = A extends B ? true : false;
  // ^?

  type BA = B extends A ? true : false;
  // ^?

  // Accesso sicuro dopo un check
  type SafeAccess<T> = T extends { a: any } ? T["a"] : never;

  type SafeAccessA = SafeAccess<A>;
  type SafeAccessB = SafeAccess<{ b: string }>;
}
