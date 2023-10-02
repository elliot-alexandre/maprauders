alter table "public"."maps" add column "content_id" uuid;

alter table "public"."maps" add constraint "maps_content_id_fkey" FOREIGN KEY (content_id) REFERENCES junction_i18n(id) not valid;

alter table "public"."maps" validate constraint "maps_content_id_fkey";


