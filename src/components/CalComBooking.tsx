"use client";

import React, { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CalComBookingProps {
  calLink: string;
  namespace?: string;
  buttonText?: string;
}

export default function CalComBooking({ calLink, namespace, buttonText = "Réserver un rendez-vous" }: CalComBookingProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openCalModal = async () => {
    if (typeof window !== 'undefined') {
      const cal = await getCalApi();
      if (cal) {
        cal("ui", {
          styles: {
            branding: { brandColor: "#000000" },
          },
        });
        
        cal("modal", {
          calLink: calLink,
          config: {
            layout: "month_view",
          },
        });
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Button 
      variant="default"
      onClick={openCalModal}
      className="w-full py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-white dark:text-black shadow-md"
      size="lg"
    >
      <Calendar className="mr-2 h-5 w-5" />
      {buttonText}
    </Button>
  );
} 