import supabase from "../supabase";

export async function GetAllTags(localId: string) {
  const { data, error } = await supabase
    .from("tags")
    .select(
      `
        id,
        name,
        created_at,
        updated_at,

        resource_id,
        content_id,
    
        junction_i18n (
          id,
          i18n (
            local_id,
            short_text,
            long_text
          )
        ),
    `
    )
    .eq("junction_i18n.i18n.local_id", `${localId}`);

  return { data, error };
}

export async function GetTagById(id: string, localId: string) {
  const { data, error } = await supabase
    .from("tags")
    .select(
      `
        id,
        name,
        created_at,
        updated_at,

        resource_id,
        content_id,
    
        junction_i18n (
          id,
          i18n (
            local_id,
            short_text,
            long_text
          )
        ),
    `
    )
    .eq("junction_i18n.i18n.local_id", `${localId}`)
    .eq("id", `${name}`);

  const result = data?.[0];
  return { result, error };
}
