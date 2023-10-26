import { Header } from "@/components/common/Header";
import MapCard from "@/components/menu/MapCard";
import { getLocal } from "@/utils";
import { GetAllMaps } from "@/utils/query/maps";
import Link from "next/link";

export default async function Maps({ params }: { params: any }) {
  const { lng } = params;
  let localId = await getLocal(lng);
  const { data, error } = await GetAllMaps(localId);

  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true} />
      <main className="flex flex-col items-center justify-between pt-2">
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {error ? (
              <div>error</div>
            ) : (
              data?.map((item: any) => (
                <Link
                  key={item.id}
                  href={`/${lng}/maps/${item.name}`}
                  as={`/${lng}/maps/${item.name}`}
                >
                  <MapCard
                    lng={lng}
                    title={item.junction_i18n.i18n[0].short_text}
                    description={item.junction_i18n.i18n[0].long_text}
                    href={`/images/maps/${item.name}/card.webp`}
                    inProgress={item.in_progress}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
