import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logout Successfull", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-blue-600 px-3 font-bold hover:bg-gray-100 bg-white">
      Sign Out
    </button>
  );
};
export default SignOutButton;
