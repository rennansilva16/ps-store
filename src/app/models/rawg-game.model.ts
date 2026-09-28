export interface RawgPlatform {
  platform: {
    id: number;
    name:string;
  }
}

export interface RawgGame {
  id: number;
  name: string;
  background_image: string | null;
  platforms: RawgPlatform[] | null;
}
