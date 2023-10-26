import supabase from "../supabase";

export async function GetAllCategories(localId: string) {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
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
        ),
        rel_tags_categories(
            tag_id,
            tags(
              id,
              name
              )
        )
    `
    )
    .eq("junction_i18n.i18n.local_id", `${localId}`);

  const result = data?.map((item: any) => {
    item.tags = [];
    item.rel_tags_categories.map((tag: any) => {
      return item.tags.push(tag.tag_id);
    });
    delete item.rel_tags_categories;
    return { ...item };
  });

  return { result, error };
}
