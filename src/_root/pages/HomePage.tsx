import InputImageAndPreview from "@/components/shared/InputImageAndPreview";
import { Button } from "@/components/ui/button";
import { authServices } from "@/services/authServices";
import { useState } from "react";

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
    </div>
  );
};

export default HomePage;
