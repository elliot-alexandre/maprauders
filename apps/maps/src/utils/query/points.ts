import supabase from "../supabase";

export async function GetAllLevelByMap(mapId: string, localId: string) {
  const { data, error } = await supabase
    .from("levels")
    .select(
      `
        id,
        name,
        map_id,

        sections(
            id,
            name,
            level_id
        )
    `
    )
    .eq("map_id", `${mapId}`);

  return { data, error };
}
export async function GetAllSectionByMap(mapId: string, localId: string) {
  const { data, error } = await supabase
    .from("sections")
    .select(
      `
        id,
        map_id,
        level_id

    `
    )
    .eq("map_id", `${mapId}`);

  let ids: any[] = [];
  data?.forEach((item) => ids.push(item.id));

  return { ids, error };
}

export async function GetAllPointsByMap(sectionIdArray: any, localId: string) {
  console.log(sectionIdArray);
  const { data, error } = await supabase
    .from("points")
    .select(
      `
        id,
        created_at,
        updated_at,
        position,
        category_id,
        tag_id,
        section_id,
        resource_id,
        content_id
    )
    `
    )
    .in("section_id", sectionIdArray);

  return { data, error };
}
