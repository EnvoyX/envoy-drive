import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["envoy-drive_*"],
  dbCredentials: {
    host: "svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com",
    user: "muhamad hanif-97403",
    password: "O[]@A-nmLm[9Yq6jI2:o",
    port: 3333,
    database: "db_muhamadhanif_44fa1",
    ssl: {},
  },
} satisfies Config;
