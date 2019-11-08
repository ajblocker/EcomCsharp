using System;
namespace EcomAdmini.Models
{
    public class Products
    {
        public long Id { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }
        public string ProdDescription { get; set; }
        public string Img { get; set; }
    }
}