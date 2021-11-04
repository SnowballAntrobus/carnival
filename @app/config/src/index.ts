// @ts-ignore
const packageJson = require("../../../package.json");

export const fromEmail = '"Starter" <no-reply@example.org>';
export const awsRegion = "us-east-1";
export const projectName = packageJson.name.replace(/[-_]/g, " ");
export const companyName = projectName; // For copyright ownership
