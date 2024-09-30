import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 서버 상태 관리의 로직을 담당하는 핵심 객체
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* QueryClient를 애플리케이션 내에서 사용할 수 있도록 전역에 제공 */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* React Query(Tanstack Query)를 좀 더 쉽게 다룰 수 있도록 돕는 전용 devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
