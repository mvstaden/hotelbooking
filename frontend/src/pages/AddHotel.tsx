import { useMutation } from "react-query";
import ManageHotelForm from "../Forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../context/AppContext";
import * as apiClient from "../api-client";

const AddHotel = () => {
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error saving hotel", type: "ERROR" });
    },
  });

  const handleSaveHotel = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handleSaveHotel} isLoading={isLoading} />;
};
export default AddHotel;
