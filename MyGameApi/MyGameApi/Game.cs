using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyGameApi
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Releasedate { get; set; }
        public GameConsole MyConsole { get; set; }
        public int Generation { get; set; }
        public string BoxImageUrl { get; set; }
    }
}
