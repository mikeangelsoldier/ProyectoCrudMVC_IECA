using System;
using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ProyectoCRUDMVC.Models
{
    public class Contacto
    {
        
        public int Id { get; set; }

        public string? Nombre { get; set; }

        public string? Correo { get; set; }

        public string? Telefono { get; set; }
    }
}