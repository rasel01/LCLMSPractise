using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace LBLServer.Models
{
    public class LMSContext:DbContext
    {
        public LMSContext():base("appConn")
        {
            
        }

        public DbSet<Student> Students { get; set; }
    }
}