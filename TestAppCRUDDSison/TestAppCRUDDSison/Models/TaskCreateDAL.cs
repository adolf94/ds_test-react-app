using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAppCRUDDSison.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace TestAppCRUDDSison.Models
{
    public class TaskCreateDAL
    {

        TaskCreate_DbContext db = new TaskCreate_DbContext();

        //this method will get all the taskcreate record
        public IEnumerable<User> GetAllUser()
        {
            return db.Users.ToList();
        }

        //this method will add a new taskcreate 
        public int TaskCreateCreate(User taskcreate)
        {
            db.Users.Add(taskcreate);
            db.SaveChanges();
            return 1;

        }
        //this method will update the existing student record    
        public int UpdateTaskCreate(User taskcreate)
        {
            db.Entry(taskcreate).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }
        //this method will get detail of a specific taskcreate
        public User GetTaskCreateData(int id)
        {
            User taskcreate = db.Users.Find(id);
            return taskcreate;
        }
        //this method will delete the specifig taskcreate record    
        public int DeleteTaskCreate(int id)
        {
            User emp = db.Users.Find(id);
            db.Users.Remove(emp);
            db.SaveChanges();
            return 1;
        }

    }
}
