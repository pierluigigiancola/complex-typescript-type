type MyString = string;

type PrimaLettera<T extends string> = T extends `${infer Prima}${infer Resto}`
  ? Prima
  : T;

Qual è il tipo di PrimaLettera<MyString>?
4. "MyString"
3. "M"
1. "s"
2. "string"


type HttpResponse = {
    data: any,
    status: any,
    headers: any
}

Qual è il tipo di keyof HttpResponse?

2. "data" & "status" & "headers"
3. "data" & "status" | "headers"
1. "data" | "status" | "headers"
4. "data" | "status" & "headers"


type HttpResponse = {
    data: any,
    status: any,
    headers: any
}
type Getters = {
    [K in keyof HttpResponse as `get${Capitalize<K>}`]: any
}

Qual è il tipo di Getters<HttpResponse>?

2. { getdata: any, getstatus: any, getheaders: any }
4. "getdata" | "getstatus" | "getheaders"
1. { getData: any, getStatus: any, getHeaders: any }
3. "getData" | "getStatus" | "getHeaders"


type Merge = string & number;

Qual è il tipo risultante di Merge?

1. boolean
2. (string | number)[]
4. never
3. string | number

const obj = {
    a: 1,
    b: "2"
}

Qual è il tipo di obj?

2. { a: 1, b: "2" }
1. { a: number, b: string }
4. { a: 1 | "2", b: 1 | "2" }
3. { a: string | number, b: string | number }
