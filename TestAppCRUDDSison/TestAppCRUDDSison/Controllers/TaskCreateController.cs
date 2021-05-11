using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestAppCRUDDSison.Models;


namespace TestAppCRUDDSison.Controllers
{
    public class TaskCreateController
    {
        TaskCreateDAL obj = new TaskCreateDAL();



        [HttpGet]
        [Route("api/TaskCreate/Index")]
        public IEnumerable<User> Index()
        {
            return obj.GetAllUser();
        }
        [HttpPost]
        [Route("api/TaskCreate/Create")]
        public int Create(User user)
        {
            return obj.TaskCreateCreate(user);
        }
        [HttpGet]
        [Route("api/TaskCreate/Details/{id}")]
        public User Details(int id)
        {
            return obj.GetTaskCreateData(id);
        }
        [HttpPut]
        [Route("api/TaskCreate/Edit")]
        public int Edit(User taskcreate)
        {
            return obj.UpdateTaskCreate(taskcreate);
        }
        [HttpDelete]
        [Route("api/TaskCreate/Delete/{id}")]
        public int Delete(int id)
        {
            return obj.DeleteTaskCreate(id);
        }



    }
}
