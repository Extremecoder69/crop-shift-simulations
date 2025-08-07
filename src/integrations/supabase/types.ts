export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      ai_recommendations: {
        Row: {
          applied_date: string | null
          confidence_score: number | null
          created_at: string
          crop_id: string | null
          description: string
          expires_at: string | null
          feedback_notes: string | null
          feedback_rating: number | null
          id: string
          is_applied: boolean | null
          priority: string | null
          recommendation_type: string
          title: string
          user_id: string
        }
        Insert: {
          applied_date?: string | null
          confidence_score?: number | null
          created_at?: string
          crop_id?: string | null
          description: string
          expires_at?: string | null
          feedback_notes?: string | null
          feedback_rating?: number | null
          id?: string
          is_applied?: boolean | null
          priority?: string | null
          recommendation_type: string
          title: string
          user_id: string
        }
        Update: {
          applied_date?: string | null
          confidence_score?: number | null
          created_at?: string
          crop_id?: string | null
          description?: string
          expires_at?: string | null
          feedback_notes?: string | null
          feedback_rating?: number | null
          id?: string
          is_applied?: boolean | null
          priority?: string | null
          recommendation_type?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_crop_id_fkey"
            columns: ["crop_id"]
            isOneToOne: false
            referencedRelation: "crops"
            referencedColumns: ["id"]
          },
        ]
      }
      crops: {
        Row: {
          area_planted: number | null
          created_at: string
          crop_name: string
          expected_harvest_date: string | null
          fertilizer_used: string | null
          id: string
          irrigation_method: string | null
          location: string | null
          notes: string | null
          pesticide_used: string | null
          planted_date: string | null
          soil_type: string | null
          status: string | null
          updated_at: string
          user_id: string
          variety: string | null
        }
        Insert: {
          area_planted?: number | null
          created_at?: string
          crop_name: string
          expected_harvest_date?: string | null
          fertilizer_used?: string | null
          id?: string
          irrigation_method?: string | null
          location?: string | null
          notes?: string | null
          pesticide_used?: string | null
          planted_date?: string | null
          soil_type?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
          variety?: string | null
        }
        Update: {
          area_planted?: number | null
          created_at?: string
          crop_name?: string
          expected_harvest_date?: string | null
          fertilizer_used?: string | null
          id?: string
          irrigation_method?: string | null
          location?: string | null
          notes?: string | null
          pesticide_used?: string | null
          planted_date?: string | null
          soil_type?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
          variety?: string | null
        }
        Relationships: []
      }
      market_prices: {
        Row: {
          created_at: string
          crop_name: string
          id: string
          location: string
          market_name: string | null
          price_date: string
          price_per_unit: number
          quality_grade: string | null
          source: string | null
          unit: string
          variety: string | null
        }
        Insert: {
          created_at?: string
          crop_name: string
          id?: string
          location: string
          market_name?: string | null
          price_date?: string
          price_per_unit: number
          quality_grade?: string | null
          source?: string | null
          unit?: string
          variety?: string | null
        }
        Update: {
          created_at?: string
          crop_name?: string
          id?: string
          location?: string
          market_name?: string | null
          price_date?: string
          price_per_unit?: number
          quality_grade?: string | null
          source?: string | null
          unit?: string
          variety?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          crops_grown: string[] | null
          email: string
          farm_size: number | null
          farm_type: string | null
          full_name: string | null
          id: string
          location: string | null
          phone: string | null
          updated_at: string
          user_id: string
          years_farming: number | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          crops_grown?: string[] | null
          email: string
          farm_size?: number | null
          farm_type?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
          years_farming?: number | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          crops_grown?: string[] | null
          email?: string
          farm_size?: number | null
          farm_type?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          years_farming?: number | null
        }
        Relationships: []
      }
      weather_alerts: {
        Row: {
          alert_type: string
          created_at: string
          description: string
          end_date: string | null
          id: string
          is_read: boolean | null
          location: string | null
          severity: string
          start_date: string | null
          title: string
          user_id: string
        }
        Insert: {
          alert_type: string
          created_at?: string
          description: string
          end_date?: string | null
          id?: string
          is_read?: boolean | null
          location?: string | null
          severity: string
          start_date?: string | null
          title: string
          user_id: string
        }
        Update: {
          alert_type?: string
          created_at?: string
          description?: string
          end_date?: string | null
          id?: string
          is_read?: boolean | null
          location?: string | null
          severity?: string
          start_date?: string | null
          title?: string
          user_id?: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
