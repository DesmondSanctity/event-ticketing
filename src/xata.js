// Generated by Xata Codegen 0.18.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "ticket",
    columns: [
      { name: "email", type: "email" },
      {
        name: "firstname",
        type: "string",
        notNull: true,
        defaultValue: "firstname",
      },
      {
        name: "lastname",
        type: "string",
        notNull: true,
        defaultValue: "lastname",
      },
      {
        name: "imageurl",
        type: "string",
        notNull: true,
        defaultValue: "imageurl",
      },
      { name: "ticketid", type: "string", unique: true },
      {
        name: "jobtitle",
        type: "string",
        notNull: true,
        defaultValue: "software engr",
      },
      { name: "iscoming", type: "bool", notNull: true, defaultValue: "true" },
      { name: "company", type: "string", notNull: true, defaultValue: "Xata" },
      {
        name: "country",
        type: "string",
        notNull: true,
        defaultValue: "Nigeria",
      },
    ],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Desmond-Obisi-s-workspace-cktogf.us-east-1.xata.sh/db/event-ticketing",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
