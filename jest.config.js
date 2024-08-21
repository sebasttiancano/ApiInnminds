/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node", // Utiliza Node.js como entorno de pruebas
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest", // Configura ts-jest para transformar archivos .ts, .tsx, .js, y .jsx
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Define las extensiones de archivo que Jest manejará
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"], // Especifica los patrones para encontrar archivos de prueba
  preset: "ts-jest", // Configura ts-jest como el preset para manejar TypeScript
  verbose: true, // Habilita salida detallada en la consola
  collectCoverage: true, // Activa la recolección de cobertura de código
  coverageDirectory: "coverage", // Define el directorio para almacenar informes de cobertura
  coverageReporters: ["json", "lcov", "text"], // Especifica los formatos de informe de cobertura
};
