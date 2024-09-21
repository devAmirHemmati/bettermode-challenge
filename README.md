# BetterMode hiring challenge

I've developed this project for `BetterMode hiring challenge` using **Next.js -SSR-** and **Graphql**

## How to Run the Project

1. First, clone the project using the following command

```
git clone https://github.com/devAmirHemmati/bettermode-challenge.git
```

2. Next, install the dependencies **(Node v20.16.0 was used)**

```
npm install
```

`// or`

```
yarn install
```

3. Now, you can run your project on port **3000** using the following command - [localhost:3000](http://localhost:3000/)

```
npm run dev
```

> graphql-code runs automatically buy this command

## Graphql

You can find all mutations and queries in the `./src/gql` directory. Simply declare your queries and mutations in these `.gql` files. The corresponding types, hooks, and other utilities will be generated automatically when you call

```
npm run generate
```

`or`

```
npm run dev
```

## Storybook

I document whole UI components using storybook and we can test and maintain components in this environment.
For checking ui components, you just need to run following commands on port 6006 - [localhost:6006](http://localhost:6006/)

```
npm run storybook
```

## Developer tools

I have integrated **eslint**, **prettier**, **husky**, **lint-staged**, so `Pre-commit hooks` are activated, so before committing, any Prettier or ESLint issues will be automatically fixed.

## Technologies used

- TypeScript
- Next.js
- Apollo-client
- Graphql-codegen
- Tailwind.css
- Storybook
- Eslint, Prettier, Husky, Lint-staged

## Code Structure

```
└── BetterModel/
    ├── public
    ├── src
    └── app/
        ├── layout.tsx
        ├── page.tsx
        ├── globals.css
        ├── posts/
        │   ├── client.tsx
        │   ├── index.tsx
        │   ├── usePostList.ts
        │   ├── new/
        │   │   ├── page.tsx
        │   │   └── index.tsx
        │   └── [id]/
        │       └── page.tsx
        ├── configs/
        ├── data/
        ├── gql/
        ├── hooks
        ├── utils
        ├── components
        └── assets/
```

## Developer

Amirreza Hemmati <hemati.dev@gmail.com> | [Linkedin](https://www.linkedin.com/in/devamirhemmati/)
