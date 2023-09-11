import * as mapsConfig from "../../../resources/maps.json";

export interface MapConfig {
  id: string;
  zoom: number;
  minZoom: number;
  maxZoom: number;
  padding: Array<number>;
  imageDimensions: Array<number>;
}

export function getMapsConfig(): MapConfig[] {
  return mapsConfig;
}

export function getMapConfigById(mapId: string): MapConfig | undefined {
  return getMapsConfig().find((mapConfig) => mapConfig.id === mapId);
}
