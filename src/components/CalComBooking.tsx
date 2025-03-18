"use client";

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalComBookingProps {
  calLink: string;
}

export default function CalComBooking({ calLink }: CalComBookingProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    (async function() {
      const cal = await getCalApi();
      if (cal) {
        cal("ui", {
          theme: "light",
          styles: {
            branding: { brandColor: "#4f46e5" }
          }
        });
      }
    })();
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <p>Chargement du calendrier...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] relative">
      <Cal 
        calLink={calLink}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "8px"
        }}
        config={{
          layout: "month_view",
          theme: "light"
        }}
      />
    </div>
  );
} 