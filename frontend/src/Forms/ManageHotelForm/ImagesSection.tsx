import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import React from "react";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImagesUrls = watch("imageUrls");

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    e.preventDefault();

    setValue(
      "imageUrls",
      existingImagesUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        {existingImagesUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImagesUrls.map((imageUrl) => (
              <div className="relative group">
                <img
                  src={imageUrl}
                  alt=""
                  className="min-h-full object-cover"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                  onClick={(e) => handleDelete(e, imageUrl)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImagesUrls?.length || 0);
              if (totalLength === 0) {
                return "At least one image should be added";
              }
              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }
              return true;
            },
          })}
        />
        {errors.imageFiles?.message && (
          <span className="text-red-500 font-bold text-sm">
            {errors.imageFiles.message}
          </span>
        )}
      </div>
    </div>
  );
};
export default ImagesSection;
