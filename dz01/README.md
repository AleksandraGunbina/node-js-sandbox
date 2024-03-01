# The quadratic equations solver
This program is developed for solving of quadratic equations (complete and incomplete equations).
The instructions for running the program are given below


## Prepare
1. If you don't have the Node.js installed, do it.
2. Copy programm
-If you use a git:
-   clone repository by using "git clone" command in terminal.
-   link to repository: https://github.com/AleksandraGunbina/node-js-sandbox
- Else:
-   copy files to your catalog

## Start programm
Go to terminal:
- go to the project directory: .../node-js-sandbox/dz01
- start programm with following command: node index.js a b c
- Example:
```
node index.js 1 2 3
```
- a - first coefficient of equation (the quadratic coefficient). It cannot be equal to zero. if a = 0 - the equation is of linear type
- b - second coefficient of equation (the linear coefficient)
- c - third coefficient of equation (constant coefficient or free term)

## Operating modes
1. If the discriminant > 0, then the equation has two different solutions
- Example:
```
node index.js 1 3 1
```
- Result:
```
Исходное уравнение:
 1x^2+3x+1
Уравнение имеет два решения: -2.618033988749895 и -0.3819660112501051
```
2. If the discriminant = 0, then the equation has one solution (two identical solutions)
- Example:
```
node index.js 1 2 1
```
- Result:
```
Исходное уравнение:
 1x^2+2x+1
Уравение иммет одно (два одинаковых) решение: -1
```
3. If the discriminant < 0, then the equation has no solutions
- Example:
```
node index.js 1 1 1
```
- Result:
```
Исходное уравнение:
 1x^2+1x+1
Уравнение не имеет решений
```

## Result codes
1. 0 - success result (equation have solutions)
2. 1 - no coefficients
3. The codes associated with the data entry error start with 4:
- 40 - Too many coefficients have been entered (more than 3)
- 41 - The quadratic coefficient equal 0
- 42 - One of coefficient is not a number
4. 50 - Equation have no solutions
