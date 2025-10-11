import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Phone, Mail, Star } from "lucide-react"

export default function ContractorsPage() {
  // Datos de ejemplo
  const contractors = [
    {
      id: 1,
      name: "Plomería Rápida",
      contact: "Juan Pérez",
      phone: "+1 234 567 8901",
      email: "juan@plomeriarapida.com",
      specialties: ["Plomería", "Fontanería", "Desagües"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Servicios Técnicos ABC",
      contact: "María Rodríguez",
      phone: "+1 234 567 8902",
      email: "maria@serviciosabccom",
      specialties: ["Calefacción", "Aire acondicionado", "Electrodomésticos"],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Electricistas Unidos",
      contact: "Carlos Gómez",
      phone: "+1 234 567 8903",
      email: "carlos@electricistasunidos.com",
      specialties: ["Instalaciones eléctricas", "Iluminación", "Reparaciones"],
      rating: 4.9,
    },
    {
      id: 4,
      name: "Pinturas Profesionales",
      contact: "Ana Martínez",
      phone: "+1 234 567 8904",
      email: "ana@pinturaspro.com",
      specialties: ["Pintura interior", "Pintura exterior", "Decoración"],
      rating: 4.7,
    },
    {
      id: 5,
      name: "Carpintería Moderna",
      contact: "Roberto Sánchez",
      phone: "+1 234 567 8905",
      email: "roberto@carpinteriamoderna.com",
      specialties: ["Muebles", "Puertas", "Reparaciones"],
      rating: 4.6,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contratistas</h1>
          <p className="text-muted-foreground">Gestione su directorio de contratistas y profesionales</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Contratista
        </Button>
      </div>

      <div className="space-y-4">
        {contractors.map((contractor) => (
          <Card key={contractor.id}>
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {contractor.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{contractor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">Contacto: {contractor.contact}</p>
                </div>
                <div className="ml-auto flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{contractor.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{contractor.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{contractor.email}</span>
                </div>
                <div className="md:text-right">
                  <Button variant="outline" size="sm">
                    Ver detalles
                  </Button>
                </div>
                <div className="col-span-3">
                  <p className="text-sm font-medium mb-1">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {contractor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
