using System;
using Microsoft.EntityFrameworkCore;
namespace EcomAdmini.Models
{
    public class DataBaseContext : DbContext 
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base (options)
        {
        }

        public DbSet<Products> Products { get; set; }
        public DbSet<Price> Price { get; set; }
        public DbSet<Contacts> Contacts { get; set; }

    }
}