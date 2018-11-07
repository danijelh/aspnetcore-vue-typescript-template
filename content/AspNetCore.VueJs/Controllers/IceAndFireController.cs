using AspNetCore.VueJs.Constants;
using AspNetCore.VueJs.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace AspNetCore.VueJs.Controllers
{
    [Route(ApiRoutes.IceAndFire.BaseRoute)]
    public class IceAndFireController : Controller
    {
        private const string ApiOfIceAndFireCharactersUrl = "https://anapioficeandfire.com/api/characters";

        private readonly HttpClient _httpClient;

        public IceAndFireController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        /// <summary>
        /// SPA entry point
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet(ApiRoutes.IceAndFire.CharactersById)]
        public async Task<IActionResult> GetCharacterAsync([FromRoute] int id)
        {
            if (id == default(int))
                return BadRequest();

            CharacterResponse response;
            var apiResponse = await _httpClient.GetAsync($"{ApiOfIceAndFireCharactersUrl}/{id}").ConfigureAwait(false);

            response = JsonConvert.DeserializeObject<CharacterResponse>(await apiResponse.Content.ReadAsStringAsync().ConfigureAwait(false));

            return Ok(response);
        }
    }
}