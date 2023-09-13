import { configPathI18n } from "../../../resources/params";
import { getJSONFile } from "./common";

export function getMenuItems(lng: string) {
  return getJSONFile(`${configPathI18n}/${lng}/maps.json`);
}
