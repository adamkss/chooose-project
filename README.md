This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
yarn
```

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

We are using Next.js API routes in order to create a Node.js server for getting the data.
The endpoint which returns the data (in JSON format) lives under [http://localhost:3000/api/trips](http://localhost:3000/api/trips). This endpoint is called client-side in our components via `axios`.