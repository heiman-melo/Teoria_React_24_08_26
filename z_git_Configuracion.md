- 1. de esta forma configuracion especifica para un proyecto por si nececito esta configuración local
git config --local user.name "Tu Nombre"       
git config --local user.email "tu-correo-especifico@dominio.com"

- 2. configuracion global en la pc para cualquier proyecto
git config --global user.name "Tu Nombre Global"
git config --global user.email "tu-correo-global@ejemplo.com"

(Nota: si omitiste --local o --global, Git asume --local por defecto estando dentro de un repositorio).

- 3. las credenciales de azure o de gitHub son las que me permiten acceder a un proyecto 
     la configuracion de git es solo la firma que vere en el historial esta la puedo cambiar por eso aveces uno ve nombres diferentes de la misma persona
     auque el email si se usa para agregar el avatar con respecto a tu correo corporativo  


Windows + R = %USERPROFILE%\.gitconfig  des esta forma veo la configuracion 

### A. Ver la Configuración Activa

# Ver configuración del proyecto actual (Local)
git config --local --list

# Ver configuración global del sistema
git config --global --list

# Ver todas las variables e identificar su archivo de origen
git config --list --show-origin

---
# Activar la detección estricta de mayúsculas/minúsculas en el proyecto local
git config core.ignorecase false

# Restablecer la configuración por defecto
git config core.ignorecase true
---