# 타입스크립트

## 타입스크립트 개념

- 타입스크립트는 자바스크립트의 상위 집합 언어로, 정적 타입을 지원합니다. 이는 코드의 안정성과 가독성을 높이고, 개발 시 오류를 줄이는 데 도움을 줍니다.

## 기본 사용 방법

- .ts 또는 .tsx (React 컴포넌트용) 확장자를 사용합니다.
- 변수, 함수 매개변수, 반환 값 등에 타입을 명시합니다.

## 주요 변수 타입
- 기본 타입
  - number: 모든 숫자 (정수, 소수)
  - string: 문자열
  - boolean: true 또는 false
  - null: 의도적으로 값이 없음을 나타냄
  - undefined: 값이 할당되지 않은 상태


- 복합 타입
  - array: 배열. 
    - 예: number[] 또는 Array<number>
  - tuple: 고정된 요소 수와 타입을 가진 배열. 
    - 예: [string, number]
  - object: 객체
  - enum: 열거형


- 특수 타입
  - any: 어떤 타입이든 허용
  - void: 주로 함수에서 반환값이 없음을 나타냄
  - never: 절대 발생하지 않는 타입
  - unknown: any와 비슷하지만 더 안전한 타입


- 유니온 타입:

  - 예: string | number (문자열 또는 숫자)


- 교차 타입:

  - 예: Type1 & Type2 (Type1과 Type2의 모든 속성을 가진 타입)


- 리터럴 타입:

  - 예: "red" | "green" | "blue" (특정 문자열만 허용)


- 함수 타입:

  - 예: (param: string) => void


- 제네릭 타입:

  - 예: Array<T>, Promise<T>


- 인덱스 타입:

  - 예: { [key: string]: number }


- 조건부 타입:

  - 예: T extends U ? X : Y


- 매핑된 타입:

  - 예: { [P in keyof T]: number }


- 템플릿 리터럴 타입 (TypeScript 4.1+):

  - 예: ${string}_id

## 주요 용어 설명

- interface: 객체의 구조를 정의하는 데 사용됩니다.
```ts
interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 30 };
```

- type: 객체의 구조, 함수, 또는 복합 타입을 정의할 때 사용됩니다.
```ts
type ID = string | number;
type Point = { x: number; y: number };
```

- union: 여러 타입 중 하나를 가질 수 있음을 나타냅니다.
```ts
let result: string | number;
```

- Intersection Types: 여러 타입을 결합하여 모든 속성을 갖는 타입을 생성할 수 있습니다.
```ts
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Worker = Person & Employee;  // Worker는 name과 employeeId를 모두 가져야 함

const worker: Worker = {
  name: 'Alice',
  employeeId: 1234,
};
```

- Optional Properties: 인터페이스나 타입에서 특정 속성을 선택적으로 만들 수 있습니다.
```ts
interface User {
  id: number;
  name: string;
  age?: number;  // age는 선택 사항
}

const user1: User = { id: 1, name: 'Alice' };
const user2: User = { id: 2, name: 'Bob', age: 30 };
```

- Readonly: 키워드를 사용하여 읽기 전용 속성을 정의할 수 있습니다.
```ts
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: 'Alice' };
user.name = 'Bob';  // name은 변경 가능
user.id = 2;  // 오류: id는 읽기 전용
```

- generic: 재사용 가능한 컴포넌트를 만들 때 사용됩니다.
```ts
function identity<T>(arg: T): T {
  return arg;
}
```

- enum:
  숫자 또는 문자열 값 집합에 이름을 부여합니다.

```ts
enum Color {
  Red,
  Green,
  Blue,
}
```

- any: 모든 타입을 허용합니다. 타입 검사를 비활성화합니다.

```ts
let notSure: any = 4;
```

- void: 주로 함수에서 반환 값이 없음을 나타냅니다.
```ts
function logMessage(message: string): void {
  console.log(message);
}
```
- null과 undefined: 각각 '값이 없음'과 '값이 할당되지 않음'을 나타냅니다.
- never: 절대 발생하지 않는 타입을 나타냅니다.
```ts
function throwError(message: string): never {
  throw new Error(message);
}
```