/**
 * Contains the miscellaneous route handlers.
 * @author Daniel Mekonnen <https://github.com/DannyGetch>
 */
class AppController {
    static getHomepage(request, response) {
        response.status(200).send('Hello Holberton School!');
    }
}
export default AppController;
module.exports = AppController;
  
