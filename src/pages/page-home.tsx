import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <>
      <Container>
        <AlbumsFilter albums={[]} className="mb-9" />
        <PhotosList
          photos={[
            {
              id: "123",
              title: "Photo 1",
              imageId: "portrait-tower.png",
              albums: [
                { id: "album1", title: "Album 1" },
                { id: "album2", title: "Album 2" },
              ],
            },
          ]}
        />
      </Container>
    </>
  );
}
