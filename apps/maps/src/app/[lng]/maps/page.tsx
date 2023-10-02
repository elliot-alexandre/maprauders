import { mergeData } from "@/app/_actions/common";
import { getMapsConfig } from "@/app/_actions/mapConfig";
import { getMenuItems } from "@/app/_actions/menu";
import { Header } from "@/components/common/Header";
import MapCard from "@/components/menu/MapCard";
import supabase from "@/utils/supabase";
import Link from "next/link";

export default async function Maps({ params }: { params: any }) {
  const { lng } = params;

  let items = await getMenuItems(lng);
  const mapsConfig = getMapsConfig();
  items = mergeData(mapsConfig, items);
  const { data, error } = await supabase
    .from("maps")
    .select(
      `
  id,
  name,
  created_at,
  updated_at,
  in_progress,
  map_conifg,
  total_level,
  content_id,

  junction_i18n (
    id,
    i18n (
      local_id,
      short_text,
      long_text
    )
  )
  `
    )
    .eq("junction_i18n.i18n.local_id", "fc2e5927-70e4-4e69-a655-2ba557b61932");

  console.log(JSON.stringify(data, null, 2));
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true} />
      <main className="flex flex-col items-center justify-between pt-2">
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item: any) => (
              <Link
                key={item.id}
                href={`/${lng}/maps/${item.id}`}
                as={`/${lng}/maps/${item.id}`}
              >
                <MapCard
                  lng={lng}
                  title={item.title}
                  description={item.description}
                  href={`/images/maps/${item.id}/card.webp`}
                  inProgress={item.inProgress}
                />
              </Link>
            ))}
          </div>
          <pre>
            {data ? (
              <code>{JSON.stringify(data, null, 2)}</code>
            ) : (
              <code></code>
            )}
          </pre>
        </div>
      </main>
    </div>
  );
}
function useSWR(
  arg0: string,
  fetcher: (url: any) => Promise<any>
): { data: any; error: any } {
  throw new Error("Function not implemented.");
}
