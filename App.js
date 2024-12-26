import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeNavigation from "./src/navigations/HomeNavigation";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
