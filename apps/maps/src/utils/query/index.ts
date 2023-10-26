import supabase from "../supabase";

export async function GetAllCategoriesTags(localId: string) {
  const { data, error } = await supabase
    .from("rel_tags_categories")
    .select(
      `
    category_id,
    tag_id,
    categories (
        id,
        name,
        color,
        created_at,
        updated_at,
    
        content_id,
    
        junction_i18n (
          id,
          i18n (
            local_id,
            short_text,
            long_text
          )
        )
    ),

    tags (
        id,
        name,
        created_at,
        updated_at,
    
        content_id,
    
        junction_i18n (
          id,
          i18n (
            local_id,
            short_text,
            long_text
          )
        )
    )
    `
    )
    .eq("categories.junction_i18n.i18n.local_id", `${localId}`)
    .eq("tags.junction_i18n.i18n.local_id", `${localId}`);
  return { data, error };
}
