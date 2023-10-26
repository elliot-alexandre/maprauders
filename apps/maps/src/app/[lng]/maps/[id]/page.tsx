import {
  OutputCategory,
  getCategoriesFilteredAndCounted,
} from "@/app/_actions/category";
import { Label, getLabels, getMapLabels } from "@/app/_actions/label";
import { getMapConfigById } from "@/app/_actions/mapConfig";
import { MapPoint, Point, getMapPoints, getPoints } from "@/app/_actions/point";
import { Header } from "@/components/common/Header";
import { getLocal } from "@/utils";
import { GetAllCategories } from "@/utils/query/categories";
import { GetMapByName } from "@/utils/query/maps";
import { GetAllPointsByMap, GetAllSectionByMap } from "@/utils/query/points";

export default async function MapPage({ params }: { params: any }) {
  const { lng, id } = params;

  let localId = await getLocal(lng);

  const map = await GetMapByName(id, localId);
  const map_id = map.result?.id;
  const sections = await GetAllSectionByMap(map_id, localId);
  const points2 = await GetAllPointsByMap(sections.ids, localId);
  const categories2 = await GetAllCategories(localId);

  const points: Point[] = await getPoints(id);
  const labels: Label[] = await getLabels(id);
  const categories: OutputCategory[] = await getCategoriesFilteredAndCounted(
    id,
    points
  );
  const mapPoints: { [tag: string]: MapPoint[] } = await getMapPoints(
    id,
    points,
    lng
  );
  const mapLabels = await getMapLabels(id, labels, lng);
  const mapConfig: any = getMapConfigById(id);
  return (
    <div>
      <Header lng={lng} themeSwitcher={false} />
      {/* <TagSelectorMap
        lng={lng}
        mapConfig={map?.result?.map_conifg}
        categories={categories}
        points={mapPoints}
        labels={mapLabels}
      /> */}

      <pre>
        <code>{JSON.stringify(categories2, null, 2)}</code>
      </pre>
    </div>
  );
}
