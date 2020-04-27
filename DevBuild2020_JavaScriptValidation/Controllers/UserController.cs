using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevBuild2020_JavaScriptValidation.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevBuild2020_JavaScriptValidation.Controllers
{
    public class UserController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View("UserIndex");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(User u)
        {
            //validate server-side (back-end)
            // can use data annotations etc in the model class
            // this is our final and safest check on the data

            //the client-side validation tries to limit unnecessary server load
            // and the time the user has to wait for response

            //put info into the database here etc

            return View("UserSuccess", u);
        }
    }
}