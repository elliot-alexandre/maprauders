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
          color: string | null
          created_at: string
          id: number
          name: string | null
          tags: Json | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: number
          name?: string | null
          tags?: Json | null
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: number
          name?: string | null
          tags?: Json | null
        }
        Relationships: []
      }
      labels: {
        Row: {
          color: string | null
          created_at: string
          id: number
          position: string | null
          rotation: string | null
          size: number | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: number
          position?: string | null
          rotation?: string | null
          size?: number | null
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: number
          position?: string | null
          rotation?: string | null
          size?: number | null
        }
        Relationships: []
      }
      maps: {
        Row: {
          created_at: string
          id: number
          in_progress: boolean
          map_conifg: Json | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          in_progress?: boolean
          map_conifg?: Json | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          in_progress?: boolean
          map_conifg?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      points: {
        Row: {
          category: string | null
          created_at: string
          id: number
          position: string | null
          resource: string | null
          tag: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          position?: string | null
          resource?: string | null
          tag?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          position?: string | null
          resource?: string | null
          tag?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
