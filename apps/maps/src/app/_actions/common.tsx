import { promises as fs } from "fs";
import path from "path";

export function getJSONFile(filePath: string): Promise<any[]> {
  return fs.readFile(filePath).then((res) => {
    return JSON.parse(res.toString());
  });
}

export function mergeData(data: any[], dataText: any[]) {
  return data.map((item, i) => Object.assign({}, item, dataText[i]));
}

export const resourcesPath = path.resolve(process.cwd(), "resources");
