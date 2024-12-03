import ListFarm from "@/components/forms/listFarm/ListFarm";
import { Button } from "@/components/ui/button";
import { authServices } from "@/services/authServices";

const HomePage = () => {
  return (
    <div>
      Home
      <Button
        onClick={() => {
          authServices.logout();
        }}
      >
        Log out
      </Button>
      <ListFarm />
    </div>
  );
};

export default HomePage;
