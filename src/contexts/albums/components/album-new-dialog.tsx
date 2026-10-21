import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import type { Photo } from "../../../contexts/photos/models/photo";
import Button from "../../../components/button";
import Text from "../../../components/text";
import {
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "../../../components/dialog";
import InputText from "../../../components/input-text";
import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";

interface AlbumNewDialogProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  const photos: Photo[] = [];
  const isLoading = false;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar Álbum</DialogHeader>
        <DialogBody>
          <InputText placeholder="Adicione um título" />
          <div className="space-y-3">
            <Text variant="label-small">Fotos Cadastradas</Text>

            {isLoading && (
              <div>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photo-loading-${index}`}
                    className="w-20 h-20 rounded"
                  />
                ))}
              </div>
            )}

            {!isLoading && photos.length === 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <SelectCheckboxIlustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto cadastrada ainda.
                </Text>
              </div>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancelar</Button>
          </DialogClose>

          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
