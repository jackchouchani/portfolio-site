"use client";

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalComBookingProps {
  calLink: string;
}

export default function CalComBooking({ calLink }: CalComBookingProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Créer un namespace unique basé sur le calLink pour éviter les collisions
  const namespace = calLink.replace(/\//g, "-");
  
  useEffect(() => {
    setIsMounted(true);
    
    (async function() {
      const cal = await getCalApi({"namespace": namespace});
      cal("ui", {
        "styles": {"branding": {"brandColor": "#4f46e5"}},
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [calLink, namespace]);

  // Ne rien afficher avant le montage du composant
  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full h-[600px]">
      <Cal 
        namespace={namespace}
        calLink={calLink}
        style={{width:"100%", height:"100%", overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
} 