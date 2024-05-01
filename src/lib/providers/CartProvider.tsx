"use client"

import { useEffect } from "react";
import { useStore } from "./store"

export default function AppInitializer({ children }: { children: React.ReactNode }) {
  useStore.setState({});

  useEffect(() => {}, [
    
  ]);

  return children;
}