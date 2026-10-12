import type { Album } from "../models/album";
import type { Photo } from "../../photos/models/photo";
import Text from "../../../components/text";
import InputCheckbox from "../../../components/input-checkbox";
import Divider from "../../../components/divider";
import Skeleton from "../../../components/skeleton";

interface AlbumsListSelectableProps extends React.ComponentProps<"div"> {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

export default function AlbumsListSelectable({
  albums,
  loading,
  photo,
}: AlbumsListSelectableProps) {
  function isChecked(albumId: string) {
    return photo?.albums?.some((album) => album.id === albumId);
  }
  function handlePhotoAlbums(albumId: string) {
    let albumsIds = [];
    if (isChecked(albumId)) {
      albumsIds = photo.albums
        .filter((album) => album.id != albumId)
        .map((album) => album.id);
    } else {
      albumsIds = [...photo.albums.map((album) => album.id), albumId];
    }
    // Remove album from photo

    console.log("Updated albums for photo:", albumsIds);
  }

  return (
    <ul className="flex flex-col gap-4">
      {!loading &&
        albums?.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center gap-1 justify-between">
              <Text variant="paragraph-large" className="truncate">
                {album.title}
              </Text>
              <InputCheckbox
                defaultChecked={isChecked(album.id)}
                onChange={() => handlePhotoAlbums(album.id)}
              />
            </div>
            {index !== albums.length - 1 && <Divider className="mt-4" />}
          </li>
        ))}
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <li key={`albums-list-${index}`}>
            <Skeleton className="h-10" />
          </li>
        ))}
    </ul>
  );
}
