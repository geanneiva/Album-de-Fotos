import Container from "../components/container";
import Text from "../components/text";
import Skeleton from "../components/skeleton";
import { useParams } from "react-router";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import type { Photo } from "../contexts/photos/models/photo";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";

export default function PagePhotoDetails() {
  const { id } = useParams();
  const isLoadingPhoto = false;
  const photo = {
    id: "123",
    title: "Photo 1",
    imageId: "portrait-tower.png",
    albums: [
      { id: "1", title: "Album 1" },
      { id: "2", title: "Album 2" },
    ],
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between mb-8 gap-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        {!isLoadingPhoto ? (
          <PhotosNavigator />
        ) : (
          <Skeleton className="w-32 h-8" />
        )}
      </header>
      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName=" h-[21rem]"
            />
          ) : (
            <Skeleton className="h-84" />
          )}
          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>
        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>

          <AlbumsListSelectable
            loading={isLoadingPhoto}
            albums={[
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
            ]}
            photo={photo}
          />
        </div>
      </div>
    </Container>
  );
}
