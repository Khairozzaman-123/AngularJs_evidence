using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace work_01_Api.Models
{
    public class VehicleType
    {
        public VehicleType()
        {
            this.Vehicles = new List<Vehicle>();
        }
        public int VehicleTypeId { get; set; }
        [Required,StringLength(30)]
        public string TypeName { get; set; }
        [StringLength(50)]
        public string SuitableFor { get; set; }
        //nev
        public ICollection<Vehicle> Vehicles { get; set; }

    }
    public class Vehicle
    {
        public int VehicleId { get; set; }
        [Required, StringLength(30)]
        public string Model { get; set; }
        [Required]
        public int Capacity { get; set; }
        [Required, ForeignKey("VehicleType")]
        public int VehicleTypeId { get; set; }
        [StringLength(200)]
        public string MainFeature { get; set; }
        //nev
        public VehicleType VehicleType { get; set; }

    }
    public class VehicleDbContext : DbContext
    {
        public VehicleDbContext(DbContextOptions<VehicleDbContext> options):base(options)
        {

        }
        public DbSet<VehicleType> VehicleTypes { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
    }
}
