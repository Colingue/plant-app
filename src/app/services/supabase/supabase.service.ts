import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

export interface Profile {
  id?: string;
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.supabase.auth.signInWithOtp({ email });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    };

    return this.supabase.from('profiles').upsert(update);
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }

  /**
   * Récupère la liste des plantes depuis Supabase
   * @param filters Objet contenant les filtres
   *  - rarity: 'common' | 'rare' | 'legendary' | 'all'
   *  - search: texte pour la recherche
   */
  async getPlants(filters?: { rarity?: string; search?: string }) {
    let query = this.supabase.from('plants').select('*');

    // Filtre par rareté
    if (filters?.rarity && filters.rarity !== 'all') {
      query = query.eq('rarity', filters.rarity);
    }

    // Recherche texte dans name et scientificName
    if (filters?.search && filters.search.trim() !== '') {
      query = query.or(
        `name.ilike.%${filters.search}%,scientificName.ilike.%${filters.search}%`
      );
    }

    // Tri alphabétique
    query = query.order('name', { ascending: true });

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  // Exemple : récupération d'une plante par ID
  async getPlantById(id: number) {
    const { data, error } = await this.supabase
      .from('plants')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }
}
