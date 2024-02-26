import { W as componentSizes } from "./ssr.js";
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
export {
  isValidComponentSize as i
};
