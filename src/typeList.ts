/*eslint-disable @typescript-eslint/no-unused-vars*/
//TypeScriptの基本型

//boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

//string　文字
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple　あまり使わない。
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

// void
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

// object obj2はあまり使うことはなさそう
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "AAAA" };
