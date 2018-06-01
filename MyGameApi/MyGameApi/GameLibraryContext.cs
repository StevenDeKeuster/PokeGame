using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyGameApi
{
    public class GameLibraryContext : DbContext
    {
        public GameLibraryContext(DbContextOptions<GameLibraryContext> options): base(options) { }

        public DbSet<Game> Games { get; set; }
        public DbSet<GameConsole> GameConsoles { get; set; }
    }
}
