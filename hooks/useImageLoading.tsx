import { useState } from "react";

const useImageLoading = (imageIds: string[]) => {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    () => Object.fromEntries(imageIds.map((id) => [id, true])),
  );

  const handleImageLoad = (id: string) => {
    setLoadingImages((prev) => ({ ...prev, [id]: false }));
  };

  const handleImageStart = (id: string) => {
    setLoadingImages((prev) => ({ ...prev, [id]: true }));
  };

  return { loadingImages, handleImageLoad, handleImageStart };
};

export default useImageLoading;
