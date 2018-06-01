using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyGameApi
{
    public class DBInitializer
    {
        public static void Initialize(GameLibraryContext context)
        {
            //maakt de database als het nog niet bestaat
            context.Database.EnsureCreated();

            //als er nog niets in de database staat
            if (!context.Games.Any() && !context.GameConsoles.Any())
            {
                //eerste gameconsoles en games maken
                var firstGameConsoles = new[]
                {
                    new GameConsole()
                    {
                        Name = "Game Boy",
                        ImageUrl = "https://cdn7.bigcommerce.com/s-ymgqt/products/31057/images/33934/game-boy-OG__29683.1472745024.500.750.jpg?c=2"
                    },
                    new GameConsole()
                    {
                        Name = "Game Boy Color",
                        ImageUrl = "https://cdn7.bigcommerce.com/s-ymgqt/images/stencil/original/products/31101/33936/System-GBColor-NeonGreen-2___17828.1472745216.jpg?c=2&imbypass=on"
                    },
                    new GameConsole()
                    {
                        Name = "Game Boy Advance",
                        ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/41MPBQW8JRL.jpg"
                    },
                    new GameConsole()
                    {
                        Name = "Nintendo DS",
                        ImageUrl = "https://www.gamesellers.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsgrey.jpg"
                    },
                    new GameConsole()
                    {
                        Name = "Nintendo 3DS",
                        ImageUrl = "https://www.gamestop.com/common/images/lbox/909178b.jpg"
                    },
                    new GameConsole()
                    {
                        Name = "Nintendo Switch",
                        ImageUrl = "http://cdn.shopify.com/s/files/1/1751/0407/products/R2189992_02_800x.jpg?v=1510717820"
                    }
                };

                var firstGames = new[]
                {
                    new Game()
                    {
                        Title = "Red & Blue",
                        Releasedate = "939081600",
                        MyConsole = firstGameConsoles[0],
                        Generation = 1,
                        BoxImageUrl = "https://vignette.wikia.nocookie.net/pokemon/images/e/e2/Pokemon_Red.jpg/revision/latest?cb=20160320133906&path-prefix=nl"
                    },
                    new Game()
                    {
                        Title = "Yellow",
                        Releasedate = "961113600",
                        MyConsole = firstGameConsoles[0],
                        Generation = 1,
                        BoxImageUrl = "https://vignette.wikia.nocookie.net/pokemonlp-utomaikeru/images/4/4a/Pokemon_Yellow.png/revision/latest?cb=20160321041106"
                    },
                    new Game()
                    {
                        Title = "Gold & Silver",
                        Releasedate = "986515200",
                        MyConsole = firstGameConsoles[0],
                        Generation = 2,
                        BoxImageUrl = "https://vignette.wikia.nocookie.net/pokemon/images/c/c3/Pokemon_Gold.jpg/revision/latest?cb=20160320145401&path-prefix=nl"
                    },
                    new Game()
                    {
                        Title = "Crystal",
                        Releasedate = "1004659200",
                        MyConsole = firstGameConsoles[1],
                        Generation = 2,
                        BoxImageUrl = "https://vignette.wikia.nocookie.net/pokemonlp-utomaikeru/images/6/60/Crystal_EN_boxart.png/revision/latest?cb=20160331011556 "
                    }
                };

                //firstGame(Console) toevoegen aan de collectie
                foreach (var item in firstGameConsoles)
                {
                    context.GameConsoles.Add(item);
                }
                foreach (var item in firstGames)
                {
                    context.Games.Add(item);
                }
                //opslaan
                context.SaveChanges();
            }
        }
    }
}
