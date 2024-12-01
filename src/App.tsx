import { useEffect } from "react";
import PhoneAuthPage from "./_auth/pages/PhoneAuthPage";
import { Toaster } from "./components/ui/toaster";
import { authServices } from "./services/authServices";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SignInPage from "./_auth/pages/SignInPage";
import SignUpPage from "./_auth/pages/SignUpPage";
import RootLayout from "./_root/RootLayout";
import HomePage from "./_root/pages/HomePage";
import CreateProfile from "./_root/pages/CreateProfile";

function App() {
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const res = await authServices.getCurrentUser();
    console.log(res);
  };
  return (
    <div className="font-parkinsons">
      <Routes>
        {/* AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/phone-sign-in" element={<PhoneAuthPage />} />
          <Route path="/email-sign-in" element={<SignInPage />} />
          <Route path="/email-sign-up" element={<SignUpPage />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Route>

        {/* OTHER ROUTES  */}
        <Route element={<RootLayout />}>
          <Route path="/" index element={<HomePage />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
