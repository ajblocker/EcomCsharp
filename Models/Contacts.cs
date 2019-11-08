using System;
namespace EcomAdmini.Models
{
    public class Contacts
    {
        public int Id { get; set; }
        public string ContactName { get; set; }
        public string ContactAddress { get; set; }
        public string ContactEmail { get; set; }
        public string ContactNumber { get; set; }
        public string ContactMessage { get; set; }
    }
}