using Microsoft.AspNetCore.Mvc;

namespace AspNetCore.VueJs.Controllers
{
    public class TemplateController : Controller
    {
        /// <summary>
        /// SPA entry point
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }
    }
}