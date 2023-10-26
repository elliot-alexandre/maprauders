export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          color: string
          content_id: string | null
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          color?: string
          content_id?: string | null
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          color?: string
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          }
        ]
      }
      i18n: {
        Row: {
          created_at: string | null
          id: number
          junction_i18n_id: string | null
          local_id: string | null
          long_text: string | null
          short_text: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          junction_i18n_id?: string | null
          local_id?: string | null
          long_text?: string | null
          short_text?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          junction_i18n_id?: string | null
          local_id?: string | null
          long_text?: string | null
          short_text?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "i18n_junction_i18n_id_fkey"
            columns: ["junction_i18n_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "i18n_local_id_fkey"
            columns: ["local_id"]
            referencedRelation: "locales"
            referencedColumns: ["id"]
          }
        ]
      }
      junction_i18n: {
        Row: {
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      labels: {
        Row: {
          color: string
          content_id: string | null
          created_at: string
          id: number
          name: string
          position: Json | null
          rotation: number
          section_id: number | null
          size: number
          updated_at: string
        }
        Insert: {
          color?: string
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          position?: Json | null
          rotation?: number
          section_id?: number | null
          size?: number
          updated_at?: string
        }
        Update: {
          color?: string
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          position?: Json | null
          rotation?: number
          section_id?: number | null
          size?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "labels_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labels_section_id_fkey"
            columns: ["section_id"]
            referencedRelation: "sections"
            referencedColumns: ["id"]
          }
        ]
      }
      levels: {
        Row: {
          created_at: string
          id: number
          map_id: number
          name: string
          updated_at: string
          value: number
        }
        Insert: {
          created_at?: string
          id?: number
          map_id: number
          name: string
          updated_at?: string
          value: number
        }
        Update: {
          created_at?: string
          id?: number
          map_id?: number
          name?: string
          updated_at?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "levels_map_id_fkey"
            columns: ["map_id"]
            referencedRelation: "maps"
            referencedColumns: ["id"]
          }
        ]
      }
      locales: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          value?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      maps: {
        Row: {
          content_id: string | null
          created_at: string
          id: number
          in_progress: boolean
          map_conifg: Json
          name: string
          total_level: number
          updated_at: string
        }
        Insert: {
          content_id?: string | null
          created_at?: string
          id?: number
          in_progress?: boolean
          map_conifg?: Json
          name?: string
          total_level?: number
          updated_at?: string
        }
        Update: {
          content_id?: string | null
          created_at?: string
          id?: number
          in_progress?: boolean
          map_conifg?: Json
          name?: string
          total_level?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "maps_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          }
        ]
      }
      points: {
        Row: {
          category_id: number | null
          content_id: string | null
          created_at: string
          id: number
          name: string
          position: Json | null
          resource_id: number | null
          section_id: number | null
          tag_id: number | null
          updated_at: string
        }
        Insert: {
          category_id?: number | null
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          position?: Json | null
          resource_id?: number | null
          section_id?: number | null
          tag_id?: number | null
          updated_at?: string
        }
        Update: {
          category_id?: number | null
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          position?: Json | null
          resource_id?: number | null
          section_id?: number | null
          tag_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "points_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "points_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "points_resource_id_fkey"
            columns: ["resource_id"]
            referencedRelation: "resources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "points_section_id_fkey"
            columns: ["section_id"]
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "points_tag_id_fkey"
            columns: ["tag_id"]
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      rel_tags_categories: {
        Row: {
          category_id: number
          tag_id: number
        }
        Insert: {
          category_id: number
          tag_id: number
        }
        Update: {
          category_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "rel_tags_categories_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rel_tags_categories_tag_id_fkey"
            columns: ["tag_id"]
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      resources: {
        Row: {
          content_id: string | null
          created_at: string
          id: number
          name: string
          path: string
          updated_at: string
        }
        Insert: {
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          path?: string
          updated_at?: string
        }
        Update: {
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          path?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resources_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          }
        ]
      }
      sections: {
        Row: {
          created_at: string
          id: number
          level_id: number
          map_id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          level_id: number
          map_id: number
          name?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          level_id?: number
          map_id?: number
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sections_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sections_map_id_fkey"
            columns: ["map_id"]
            referencedRelation: "maps"
            referencedColumns: ["id"]
          }
        ]
      }
      tags: {
        Row: {
          content_id: string | null
          created_at: string
          id: number
          name: string
          resource_id: number | null
          updated_at: string
        }
        Insert: {
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          resource_id?: number | null
          updated_at?: string
        }
        Update: {
          content_id?: string | null
          created_at?: string
          id?: number
          name?: string
          resource_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tags_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "junction_i18n"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_resource_id_fkey"
            columns: ["resource_id"]
            referencedRelation: "resources"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      blog_post_status: "PENDING" | "RELEASED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

