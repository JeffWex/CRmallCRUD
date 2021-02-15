using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRMallCrud.Models
{
    [Table("tbcliente")]
    public class Cliente
    {
        [Key]
        [Display(Name= "ID")]
        [Column ("ID")]
        public int ID { get; set; }
        [Required]
        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }
        [Required]
        [Display(Name = "Data de Nascimento")]
        [Column("DataNascimento")]
        public DateTime DataNascimento { get; set; }
        [Required]
        [Display(Name = "Sexo")]
        [Column("Sexo")]
        public string Sexo { get; set; }
        [Display(Name = "Cep")]
        [Column("Cep")]
        public string Cep { get; set; }
        [Display(Name = "Endereco")]
        [Column("Endereco")]
        public string Endereco { get; set; }
        [Display(Name = "Numero")]
        [Column("Numero")]
        public string Numero { get; set; }        
        [Display(Name = "Complemento")]
        [Column("Complemento")]
        public string Complemento { get; set; }        
        [Display(Name = "Bairro")]
        [Column("Bairro")]
        public string Bairro { get; set; }
        [Display(Name = "Estado")]
        [Column("Estado")]
        public string Estado { get; set; }
        [Display(Name = "Cidade")]
        [Column("Cidade")]
        public string Cidade { get; set; }
    }
}
