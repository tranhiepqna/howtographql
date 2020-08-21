# howtographql

## Getting started 

### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/tranhiepqna/howtographql.git

# Installing packages
npm install
```



### 2. Setup Prisma 
```bash

#Create your first migration by running flowing command
npx prisma migrate save --name="init" --experimental

#Run the command below to apply the migration

npx prisma migrate up --experimental

#Finally, Re-generating PrismaClient

npx prisma generate
```

### 3. Start Server
After re-generating PrismaClient, start the API with command `npm start server` or `yarn run server`

## References

- **[graphql-node Tutorial](https://www.howtographql.com/graphql-js/0-introduction/)**
- **[React + Apollo Tutorial](https://www.howtographql.com/graphql-js/0-introduction/)**