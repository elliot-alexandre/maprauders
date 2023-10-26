import supabase from "../supabase";

export async function GetAllMaps(localId: string) {
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
    .eq("junction_i18n.i18n.local_id", `${localId}`);

  return { data, error };
}

export async function GetMapByName(mapName: string, localId: string) {
  let { data, error } = await supabase
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
    .eq("junction_i18n.i18n.local_id", `${localId}`)
    .eq("name", `${mapName}`);

  const result = data?.[0];
  return { result, error };
}
