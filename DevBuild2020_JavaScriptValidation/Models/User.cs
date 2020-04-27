using System;
namespace DevBuild2020_JavaScriptValidation.Models
{
    public class User
    {
        private string firstName;
        private string lastName;
        private string email;
        private string password;
        private string confirmPassword;

        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
        public string ConfirmPassword { get => confirmPassword; set => confirmPassword = value; }
    }
}
