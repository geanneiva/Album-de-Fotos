import type { Photo } from "../models/photo";
import ImagePreview from "../../../../src/components/image-preview";
import Skeleton from "../../../../src/components/skeleton";
import Text from "../../../../src/components/text";
import Badge from "../../../components/badge";
import { Link } from "react-router";
import { buttonVariants } from "../../../../src/components/button";

interface photoWidgetProps {
  photo: Photo;
  loading?: boolean;
}

export default function PhotoWidget({ photo, loading }: photoWidgetProps) {
  return (
    <div className="flex flex-col gap-4">
      {!loading ? (
        <ImagePreview
          src={`/images/${photo.imageId}`}
          title={photo.title}
          imageClassName="w-43.5 h-43.5 rounded-lg"
        />
      ) : (
        <Skeleton className="w-43.5 h-43.5 rounded-lg" />
      )}

      <div className="flex flex-col gap-2">
        {!loading ? (
          <Text variant="paragraph-large" className="truncate">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-full h-6" />
        )}

        <div className="flex gap-1 min-h-4.5">
          {!loading ? (
            <>
              {photo.albums.slice(0, 2).map((album) => (
                <Badge className="truncate" key={album.id} size="xs">
                  {album.title}
                </Badge>
              ))}
              {photo.albums.length > 2 && (
                <Badge size="xs">+{photo.albums.length - 1}</Badge>
              )}
            </>
          ) : (
            Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                key={`album-${index}`}
                className="w-full h-4 rounded-sm"
              />
            ))
          )}
        </div>
      </div>

      {!loading ? (
        <Link
          to={`/fotos/${photo.id}`}
          className={buttonVariants({
            variant: "secondary",
            className: "px-2 py-2",
          })}
        >
          <Text variant="paragraph-small">Detalhes da imagem</Text>
        </Link>
      ) : (
        <Skeleton className="w-full h-10" />
      )}
    </div>
  );
}
