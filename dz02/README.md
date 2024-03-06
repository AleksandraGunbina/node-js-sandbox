# The quadratic equations solver
This program should displaying the values of environment variables for different modes (development or production).

## Prepare
1. If you don't have the Node.js installed, do it.
2. Copy programm
- If you use a git:
-   clone repository by using "git clone" command in terminal.
-   link to repository: https://github.com/AleksandraGunbina/node-js-sandbox
- Else:
-   copy files to your catalog

## Start programm
Go to terminal:
- go to the project directory: .../node-js-sandbox/dz02
- start programm with following commands:
```bash
npm run dev
```
or
```bash
npm run prod
```

## Short description of result
Depending on the selected mode, the program will output the values of the environment variable. An example for a "dev" mode
- Example:
```
node run dev
```
- Result:
```
You use develop mode
The values of enviromental variables are:
 {
  OPERATING_MODE: 'dev',
  HOST: 'https://dev-host',
  PORT: '8000',
  LOGIN: 'devLogin',
  PASSWORD: 'dEvPass123*',
  DB: 'devDB'
}
```