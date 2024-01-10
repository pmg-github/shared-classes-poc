# shared-classes-poc
Proof of concept for shared classes used across both frontend and backend projects


# Installation steps
1. Add this project as an npm git dependency to the project you want to use it in.

```bash
# npm
npm install --save shared-classes-poc@git+https://github.com/pmg-github/shared-classes-poc.git#main
```


2. Whenever you need to use a class, just import the class from 'shared-classes-poc' (ensure typescript!):

```ts
import { Grocery } from 'shared-classes-poc';
```


# Frontend usage
In nuxt3 projects when fetching we can ensure the class of the reveived object as follows:

```ts
const data: Grocery[] = await $fetch<Grocery[]>('/api/groceries');
```


You can also ensure classes of state variables as follows: 

```ts
const groceryList: Ref = useState<Grocery[]>('groceryList', () => []);
```