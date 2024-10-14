export interface Photo {
  id: string;
  url: string;
  liked: boolean;
}

export const RANDOM_PHOTOS: Photo[] = [];

for (let i = 1; i <= 9; i++) {
  RANDOM_PHOTOS.push({
    id: `p${i}`,
    url: `https://picsum.photos/200/300?random=${i}`,
    liked: false,
  });
}
