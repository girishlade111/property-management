import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function PropertiesPage() {
  // Datos de ejemplo
  const properties = [
    {
      id: 1,
      name: "Apartamento 3B",
      location: "Edificio Norte, Calle Principal 123",
      type: "Apartamento",
      area: "85m²",
      status: "Ocupado",
    },
    {
      id: 2,
      name: "Casa 15",
      location: "Urbanización Este, Av. Central 456",
      type: "Casa",
      area: "150m²",
      status: "Disponible",
    },
    {
      id: 3,
      name: "Local 7",
      location: "Centro Comercial Plaza, Local 7",
      type: "Comercial",
      area: "65m²",
      status: "Ocupado",
    },
    {
      id: 4,
      name: "Oficina 12",
      location: "Edificio Corporativo, Piso 3",
      type: "Oficina",
      area: "120m²",
      status: "Ocupado",
    },
    {
      id: 5,
      name: "Casa 8",
      location: "Urbanización Oeste, Calle 789",
      type: "Casa",
      area: "180m²",
      status: "En renovación",
    },
    {
      id: 6,
      name: "Apartamento 5A",
      location: "Residencial Las Palmas, Torre 2",
      type: "Apartamento",
      area: "95m²",
      status: "Disponible",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inmuebles</h1>
          <p className="text-muted-foreground">Gestione todos sus inmuebles desde aquí</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Inmueble
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={`/placeholder.svg?height=300&width=500`} alt={property.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">{property.name}</h3>
              <p className="text-sm text-muted-foreground">{property.location}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Tipo:</span> {property.type}
                </div>
                <div>
                  <span className="font-medium">Área:</span> {property.area}
                </div>
                <div className="col-span-2">
                  <span className="font-medium">Estado:</span>{" "}
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                      property.status === "Disponible"
                        ? "bg-green-100 text-green-800"
                        : property.status === "En renovación"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
              <Button variant="outline" size="sm" className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Eliminar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
