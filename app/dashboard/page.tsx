import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Hammer, Users, Package, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Panel de Control</h1>
        <p className="text-muted-foreground">Resumen de sus inmuebles y actividades de mantenimiento</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Inmuebles</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Reparaciones Pendientes</CardTitle>
            <Hammer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">-3 desde la semana pasada</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Contratistas Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 desde el mes pasado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Repuestos en Inventario</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">-12 desde el mes pasado</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reparaciones Urgentes</CardTitle>
            <CardDescription>Reparaciones que requieren atención inmediata</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-5 w-5 text-destructive" />
                <div>
                  <p className="font-medium">Fuga de agua en baño principal</p>
                  <p className="text-sm text-muted-foreground">Apartamento 3B - Edificio Norte</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-5 w-5 text-destructive" />
                <div>
                  <p className="font-medium">Calentador averiado</p>
                  <p className="text-sm text-muted-foreground">Casa 15 - Urbanización Este</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-5 w-5 text-destructive" />
                <div>
                  <p className="font-medium">Problema eléctrico</p>
                  <p className="text-sm text-muted-foreground">Local 7 - Centro Comercial</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos Mantenimientos</CardTitle>
            <CardDescription>Mantenimientos programados para los próximos días</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Revisión de aire acondicionado</p>
                  <span className="text-sm text-muted-foreground">15/04</span>
                </div>
                <p className="text-sm text-muted-foreground">Oficina 12 - Edificio Corporativo</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Mantenimiento de jardín</p>
                  <span className="text-sm text-muted-foreground">18/04</span>
                </div>
                <p className="text-sm text-muted-foreground">Residencial Las Palmas</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Limpieza de canaletas</p>
                  <span className="text-sm text-muted-foreground">22/04</span>
                </div>
                <p className="text-sm text-muted-foreground">Casa 8 - Urbanización Oeste</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
