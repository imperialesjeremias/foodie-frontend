import AppRoutes from "./routes/routes";
import { Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Suspense fallback={<div>Cargando...</div>}>
        <AppRoutes />
      </Suspense>
    </NextUIProvider>
  );
}

export default App;
