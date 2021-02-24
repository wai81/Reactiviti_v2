using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        // private IMediator _mediator;
        // protected IMediator Mediator => _mediator ?? (_mediator = 
        // HttpContext.RequestServices.GetService<IMediator>());
    }
}