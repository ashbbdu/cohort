import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const productsSelector = atom({
  key: "productsAtom",
  default: selector({
    key: "getProducts",
    get: async () => {
      const products = await fetch("https://fakestoreapi.com/products/");
      const json = await products.json();
      return json;
    },
  }),
});

export const poductByIdAtomFamily = atomFamily({
  key: "productById",
  // default :  async (id) => {
  // const products = await fetch(`https://fakestoreapi.com/products/${id}`);
  // const json = await products.json()
  // return json;
  //   }
  default: selectorFamily({
    key: "UserInfo/Default",
    get:
      (id) =>
      async ({ get }) => {
        // throw new Error();
        const products = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await products.json();
        return json;
      },
  }),
});

// export const productSelector = atom({
//   key : "productAtom",
//   default : selector({
//     key: 'getProductById',
//     get : async () => {
//       const products = await fetch("https://fakestoreapi.com/products/1");
//       const json = await products.json()
//       return json;
//     }
//   })
// })
