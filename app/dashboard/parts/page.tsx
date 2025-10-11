import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Package } from "lucide-react"

export default function PartsPage() {
  // Datos de ejemplo
  const parts = [
    {
      id: 1,
      name: "Grifo de baño",
      category: "Plomería",
      quantity: 8,
      location: "Almacén Central",
      price: "$45.99",
      status: "En stock",
    },
    {
      id: 2,
      name: "Interruptor de luz",
      category: "Eléctrico",
      quantity: 24,
      location: "Almacén Central",
      price: "$12.50",
      status: "En stock",
    },
    {
      id: 3,
      name: "Filtro de aire acondicionado",
      category: "Climatización",
      quantity: 3,
      location: "Almacén Este",
      price: "$35.75",
      status: "Bajo stock",
    },
    {
      id: 4,
      name: "Cerradura de puerta",
      category: "Seguridad",
      quantity: 6,
      location: "Almacén Central",
      price: "$78.25",
      status: "En stock",
    },
    {
      id: 5,
      name: "Válvula de calentador",
      category: "Climatización",
      quantity: 0,
      location: "Almacén Este",
      price: "$125.00",
      status: "Sin stock",
    },
    {
      id: 6,
      name: "Pintura blanca (galón)",
      category: "Pintura",
      quantity: 12,
      location: "Almacén Oeste",
      price: "$32.99",
      status: "En stock",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Repuestos</h1>
          <p className="text-muted-foreground">Gestione su inventario de repuestos y materiales</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Repuesto
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar repuestos..." className="pl-8" />
        </div>
        <Button variant="outline">Filtrar</Button>
      </div>

      <div className="space-y-4">
        {parts.map((part) => (
          <Card key={part.id}>
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{part.name}</CardTitle>
                </div>
                <Badge
                  className={
                    part.status === "En stock"
                      ? "bg-green-500"
                      : part.status === "Bajo stock"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }
                >
                  {part.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="grid gap-2 md:grid-cols-4">
                <div>
                  <p className="text-sm font-medium">Categoría</p>
                  <p className="text-sm text-muted-foreground">{part.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Cantidad</p>
                  <p className="text-sm text-muted-foreground">{part.quantity} unidades</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ubicación</p>
                  <p className="text-sm text-muted-foreground">{part.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Precio unitario</p>
                  <p className="text-sm text-muted-foreground">{part.price}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  Ajustar stock
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
