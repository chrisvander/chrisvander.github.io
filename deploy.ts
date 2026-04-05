import { $ } from "bun";
console.log(`curl -X POST ${Bun.env.DEPLOY_HOOK}`)
const out = await $`curl -X POST ${Bun.env.DEPLOY_HOOK}`.text();
console.log(out);
