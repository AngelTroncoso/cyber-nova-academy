export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      adjudicaciones: {
        Row: {
          ampliaciones: Json | null
          aseguradora: string | null
          created_at: string
          empresa: string
          fecha_adjudicacion: string
          fecha_inicio_contrato: string | null
          fecha_inicio_poliza: string | null
          fecha_inicio_real: string | null
          fecha_termino: string | null
          fecha_termino_poliza: string | null
          ficha_postulacion_id: string | null
          hospital: string
          id: string
          id_licitacion: string
          monto_garantia_fiel: number | null
          numero_poliza: string | null
          updated_at: string
          user_id: string
          valor_comision: number | null
        }
        Insert: {
          ampliaciones?: Json | null
          aseguradora?: string | null
          created_at?: string
          empresa: string
          fecha_adjudicacion: string
          fecha_inicio_contrato?: string | null
          fecha_inicio_poliza?: string | null
          fecha_inicio_real?: string | null
          fecha_termino?: string | null
          fecha_termino_poliza?: string | null
          ficha_postulacion_id?: string | null
          hospital: string
          id?: string
          id_licitacion: string
          monto_garantia_fiel?: number | null
          numero_poliza?: string | null
          updated_at?: string
          user_id: string
          valor_comision?: number | null
        }
        Update: {
          ampliaciones?: Json | null
          aseguradora?: string | null
          created_at?: string
          empresa?: string
          fecha_adjudicacion?: string
          fecha_inicio_contrato?: string | null
          fecha_inicio_poliza?: string | null
          fecha_inicio_real?: string | null
          fecha_termino?: string | null
          fecha_termino_poliza?: string | null
          ficha_postulacion_id?: string | null
          hospital?: string
          id?: string
          id_licitacion?: string
          monto_garantia_fiel?: number | null
          numero_poliza?: string | null
          updated_at?: string
          user_id?: string
          valor_comision?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "adjudicaciones_ficha_postulacion_id_fkey"
            columns: ["ficha_postulacion_id"]
            isOneToOne: false
            referencedRelation: "fichas_postulacion"
            referencedColumns: ["id"]
          },
        ]
      }
      empresas: {
        Row: {
          created_at: string
          id: string
          nombre: string
          rut: string
        }
        Insert: {
          created_at?: string
          id?: string
          nombre: string
          rut: string
        }
        Update: {
          created_at?: string
          id?: string
          nombre?: string
          rut?: string
        }
        Relationships: []
      }
      fichas_postulacion: {
        Row: {
          created_at: string
          duracion_meses: number | null
          empresa_id: string | null
          empresa_nombre: string | null
          empresa_rut: string | null
          estado: string
          fecha_cierre: string
          fecha_publicacion: string | null
          garantia_seriedad: string | null
          hora_cierre: string | null
          hospital_id: string | null
          hospital_nombre: string | null
          hospital_rut: string | null
          id: string
          id_licitacion: string
          monto_garantia: number | null
          nombre_licitacion: string
          prestaciones: Json | null
          presupuesto: number
          profesionales: string | null
          requisitos: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duracion_meses?: number | null
          empresa_id?: string | null
          empresa_nombre?: string | null
          empresa_rut?: string | null
          estado?: string
          fecha_cierre: string
          fecha_publicacion?: string | null
          garantia_seriedad?: string | null
          hora_cierre?: string | null
          hospital_id?: string | null
          hospital_nombre?: string | null
          hospital_rut?: string | null
          id?: string
          id_licitacion: string
          monto_garantia?: number | null
          nombre_licitacion: string
          prestaciones?: Json | null
          presupuesto?: number
          profesionales?: string | null
          requisitos?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duracion_meses?: number | null
          empresa_id?: string | null
          empresa_nombre?: string | null
          empresa_rut?: string | null
          estado?: string
          fecha_cierre?: string
          fecha_publicacion?: string | null
          garantia_seriedad?: string | null
          hora_cierre?: string | null
          hospital_id?: string | null
          hospital_nombre?: string | null
          hospital_rut?: string | null
          id?: string
          id_licitacion?: string
          monto_garantia?: number | null
          nombre_licitacion?: string
          prestaciones?: Json | null
          presupuesto?: number
          profesionales?: string | null
          requisitos?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fichas_postulacion_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fichas_postulacion_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospitales"
            referencedColumns: ["id"]
          },
        ]
      }
      hospitales: {
        Row: {
          created_at: string
          direccion: string | null
          id: string
          nombre: string
          rut: string
        }
        Insert: {
          created_at?: string
          direccion?: string | null
          id?: string
          nombre: string
          rut: string
        }
        Update: {
          created_at?: string
          direccion?: string | null
          id?: string
          nombre?: string
          rut?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          nombre: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          nombre?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          nombre?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      validate_prestaciones_structure: {
        Args: { prestaciones: Json }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
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
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
