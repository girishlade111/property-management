import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Hammer, Users, Package, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">PropManager</h1>
          <p className="mt-2">Sistema de gestión de inmuebles y mantenimiento</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Gestione todos sus inmuebles en un solo lugar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Building className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Inmuebles</CardTitle>
                <CardDescription>Administre todos sus inmuebles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Registre información detallada de cada propiedad, incluyendo ubicación, características y documentos.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/properties" className="w-full">
                  <Button className="w-full">
                    Gestionar Inmuebles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Hammer className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Reparaciones</CardTitle>
                <CardDescription>Seguimiento de mantenimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Registre todas las reparaciones, con fechas, costos, responsables y estado actual.</p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/repairs" className="w-full">
                  <Button className="w-full">
                    Gestionar Reparaciones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Contratistas</CardTitle>
                <CardDescription>Directorio de profesionales</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Mantenga un registro de todos los contratistas con sus especialidades, contactos y valoraciones.</p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/contractors" className="w-full">
                  <Button className="w-full">
                    Gestionar Contratistas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Repuestos</CardTitle>
                <CardDescription>Inventario de materiales</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Controle su inventario de repuestos y materiales para reparaciones y mantenimiento.</p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/parts" className="w-full">
                  <Button className="w-full">
                    Gestionar Repuestos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">¿Por qué usar PropManager?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Todo en un solo lugar</h3>
                <p>Centralice toda la información de sus inmuebles, reparaciones, contratistas y repuestos.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ahorre tiempo y dinero</h3>
                <p>Gestione eficientemente el mantenimiento preventivo y correctivo de sus propiedades.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Decisiones informadas</h3>
                <p>
                  Obtenga reportes y estadísticas para tomar mejores decisiones sobre sus inversiones inmobiliarias.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 PropManager. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
