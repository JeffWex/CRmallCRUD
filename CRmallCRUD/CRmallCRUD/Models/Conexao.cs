using CRMallCrud.Models;
using Microsoft.EntityFrameworkCore;

namespace ProjetoCRMall.Models
{

    public class Conexao : DbContext
    {
        public Conexao(DbContextOptions<Conexao> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Cliente> Clientes { get; set; }
    }
}