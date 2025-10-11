import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Filter, ArrowUpDown } from "lucide-react"

export default function RepairsPage() {
  // Datos de ejemplo
  const repairs = [
    {
      id: 1,
      title: "Fuga de agua en baño principal",
      property: "Apartamento 3B - Edificio Norte",
      date: "10/04/2025",
      status: "Pendiente",
      priority: "Alta",
      contractor: "Plomería Rápida",
      cost: "$350",
    },
    {
      id: 2,
      title: "Calentador averiado",
      property: "Casa 15 - Urbanización Este",
      date: "12/04/2025",
      status: "Programada",
      priority: "Alta",
      contractor: "Servicios Técnicos ABC",
      cost: "$520",
    },
    {
      id: 3,
      title: "Problema eléctrico",
      property: "Local 7 - Centro Comercial",
      date: "08/04/2025",
      status: "En progreso",
      priority: "Alta",
      contractor: "Electricistas Unidos",
      cost: "$280",
    },
    {
      id: 4,
      title: "Pintura de paredes",
      property: "Oficina 12 - Edificio Corporativo",
      date: "25/04/2025",
      status: "Programada",
      priority: "Media",
      contractor: "Pinturas Profesionales",
      cost: "$650",
    },
    {
      id: 5,
      title: "Reparación de puerta",
      property: "Casa 8 - Urbanización Oeste",
      date: "05/04/2025",
      status: "Completada",
      priority: "Baja",
      contractor: "Carpintería Moderna",
      cost: "$180",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reparaciones</h1>
          <p className="text-muted-foreground">Gestione todas las reparaciones y mantenimientos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Reparación
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Ordenar
          </Button>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="rounded-full">
            Todas
          </Badge>
          <Badge variant="secondary" className="rounded-full">
            Pendientes
          </Badge>
          <Badge variant="outline" className="rounded-full">
            En progreso
          </Badge>
          <Badge variant="outline" className="rounded-full">
            Completadas
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        {repairs.map((repair) => (
          <Card key={repair.id}>
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{repair.title}</CardTitle>
                <Badge
                  className={
                    repair.status === "Pendiente"
                      ? "bg-yellow-500"
                      : repair.status === "En progreso"
                        ? "bg-blue-500"
                        : repair.status === "Programada"
                          ? "bg-purple-500"
                          : "bg-green-500"
                  }
                >
                  {repair.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="grid gap-2 text-sm md:grid-cols-3">
                <div>
                  <p className="font-medium">Inmueble</p>
                  <p className="text-muted-foreground">{repair.property}</p>
                </div>
                <div>
                  <p className="font-medium">Fecha</p>
                  <p className="text-muted-foreground">{repair.date}</p>
                </div>
                <div>
                  <p className="font-medium">Prioridad</p>
                  <Badge
                    variant="outline"
                    className={
                      repair.priority === "Alta"
                        ? "text-red-500 border-red-200 bg-red-50"
                        : repair.priority === "Media"
                          ? "text-yellow-500 border-yellow-200 bg-yellow-50"
                          : "text-green-500 border-green-200 bg-green-50"
                    }
                  >
                    {repair.priority}
                  </Badge>
                </div>
                <div>
                  <p className="font-medium">Contratista</p>
                  <p className="text-muted-foreground">{repair.contractor}</p>
                </div>
                <div>
                  <p className="font-medium">Costo estimado</p>
                  <p className="text-muted-foreground">{repair.cost}</p>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" size="sm">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
