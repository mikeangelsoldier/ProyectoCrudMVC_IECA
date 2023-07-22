using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProyectoCRUDMVC.Models;

namespace ProyectoCRUDMVC.Data
{
    public class MvcContactoContext : DbContext
    {
        public MvcContactoContext (DbContextOptions<MvcContactoContext> options)
            : base(options)
        {
        }

        public DbSet<ProyectoCRUDMVC.Models.Contacto> Contacto { get; set; }
    }
}
