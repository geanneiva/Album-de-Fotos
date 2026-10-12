import ButtonIcon from "../../../components/button-icon";
import arrowLeftIcon from "../../../assets/icons/chevron-left.svg?react";
import arrowRightIcon from "../../../assets/icons/chevron-right.svg?react";
import { useNavigate } from "react-router";
import Button from "../../../components/button";
import cx from "classnames";
import Skeleton from "../../../components/skeleton";

interface PhotosNavigatorProps extends React.ComponentProps<"div"> {
  nextPhotoId?: string;
  prevPhotoId?: string;
  loading?: boolean;
}

export default function PhotosNavigator({
  nextPhotoId,
  prevPhotoId,
  loading,
  className,
  ...props
}: PhotosNavigatorProps) {
  const navigate = useNavigate();

  return (
    <div className={cx("flex gap-2", className)} {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={arrowLeftIcon}
            variant="secondary"
            disabled={!prevPhotoId}
            onClick={() => {
              navigate(`/fotos/${prevPhotoId}`);
            }}
          />
          <Button
            icon={arrowRightIcon}
            variant="secondary"
            disabled={!nextPhotoId}
            onClick={() => {
              navigate(`/fotos/${nextPhotoId}`);
            }}
          >
            Próxima Imagem
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-20 h-10" />
        </>
      )}
    </div>
  );
}
