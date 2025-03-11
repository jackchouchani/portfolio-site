"use client"

import React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun, Moon, Laptop, Check } from "lucide-react"

export function ThemeToggle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme, theme } = useTheme()

  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Changer de thème</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")} className="flex justify-between">
            <div className="flex items-center">
              <Sun className="mr-2 h-4 w-4" />
              <span>Clair</span>
            </div>
            {theme === "light" && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} className="flex justify-between">
            <div className="flex items-center">
              <Moon className="mr-2 h-4 w-4" />
              <span>Sombre</span>
            </div>
            {theme === "dark" && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")} className="flex justify-between">
            <div className="flex items-center">
              <Laptop className="mr-2 h-4 w-4" />
              <span>Système</span>
            </div>
            {theme === "system" && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

