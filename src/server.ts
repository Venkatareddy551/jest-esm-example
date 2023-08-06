import { startApolloServer } from "./index.js";

startApolloServer().catch((error:Error | undefined) => {
  if(error) {
    console.log(error)
  }
})