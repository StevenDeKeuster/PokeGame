using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyGameApi
{

    [Route("api/v1/consoles")]
    public class GameConsoleController : Controller
    {
        private readonly GameLibraryContext context;
        public GameConsoleController(GameLibraryContext context)
        {
            this.context = context;
        }


        //alle gameconsoles in een list
        [HttpGet]           // api/v1/consoles
        public List<GameConsole> GetAllGameConsoles()
        {
            return context.GameConsoles.ToList();
        }


        //een specifieke console opvragen (via id)
        [Route("{id}")]     // api/v1/consoles/1
        [HttpGet]
        public IActionResult GetGameConsoleById(int id)
        {
            var showGameConsole = context.GameConsoles.Find(id);
            if (showGameConsole == null) return NotFound();
            return Ok(showGameConsole);
        }


        //een specifieke console opvragen (via name)
        [Route("{name}")]     // api/v1/consoles/Game%20Boy
        [HttpGet]
        public IActionResult GetGameConsoleByName(string name)
        {
            var showGameConsole = context.GameConsoles.Find(name);
            if (showGameConsole == null) return NotFound();
            return Ok(showGameConsole);
        }


        //een nieuwe console aan de database toevoegen
        [HttpPost]
        public IActionResult CreateGameConsole([FromBody] GameConsole newGameConsole)
        {
            context.GameConsoles.Add(newGameConsole);
            context.SaveChanges();
            //stuur result 201 met de console als content als het gelukt is
            return Created("", newGameConsole);
        }


        //een console verwijderen (via id)
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteGameConsole(int id)
        {
            var deleteGameConsole = context.GameConsoles.Find(id);
            if (deleteGameConsole == null) return NotFound();

            //game verwijderen
            context.GameConsoles.Remove(deleteGameConsole);
            context.SaveChanges();
            //stuur result 204 als het gelukt is
            return NoContent();
        }


        //een game aanpassen
        [HttpPut]
        public IActionResult UpdateGameConsole([FromBody] GameConsole updateGameConsole)
        {
            var orgGameConsole = context.GameConsoles.Find(updateGameConsole.Id);
            if (orgGameConsole == null) return NotFound();

            orgGameConsole.Name = updateGameConsole.Name;
            orgGameConsole.ImageUrl = updateGameConsole.ImageUrl;

            context.SaveChanges();
            return Ok(orgGameConsole);
        }
    }
}
