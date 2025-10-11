"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building, Hammer, Users, Package, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Inicio",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Inmuebles",
    href: "/dashboard/properties",
    icon: Building,
  },
  {
    title: "Reparaciones",
    href: "/dashboard/repairs",
    icon: Hammer,
  },
  {
    title: "Contratistas",
    href: "/dashboard/contractors",
    icon: Users,
  },
  {
    title: "Repuestos",
    href: "/dashboard/parts",
    icon: Package,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid gap-2">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === item.href && "bg-muted")}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
