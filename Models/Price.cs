using System;
namespace EcomAdmini.Models
{
    public class Price
    {
       public int Id { get; set; }
       public decimal Amount { get; set; }
       public int ProductId { get; set; }
    }
}