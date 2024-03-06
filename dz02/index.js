import { env, stderr } from "node:process";

if (env) {

const envValues = {
  OPERATING_MODE: env.OPERATING_MODE,
  HOST: env.HOST,
  PORT: env.PORT,
  LOGIN: env.LOGIN,
  PASSWORD: env.PASSWORD,
  DB: env.DB,
};

if (env.OPERATING_MODE === "dev") {
  console.log(
    "You use develop mode\nThe values of enviromental variables are:\n",
    envValues
  );
} else if (env.OPERATING_MODE === "prod") {
  console.log(
    "You use production mode\nThe values of enviromental variables are:\n",
    envValues
  );
}
}
else {
stderr.write("Ups\n")
process.exit(1)
}