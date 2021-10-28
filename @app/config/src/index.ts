// @ts-ignore
const packageJson = require("../../../package.json");

export const awsRegion = "us-east-1";
export const projectName = packageJson.name.replace(/[-_]/g, " ");
