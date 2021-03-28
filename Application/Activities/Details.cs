using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Result<ActivityDto>>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Result<ActivityDto>>
        {
            private readonly DataContext _contex;
            private readonly IMapper _mapper;
            public Handler(DataContext contex, IMapper mapper)
            {
                _mapper = mapper;
                _contex = contex;
            }

            public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _contex.Activities
                .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<ActivityDto>.Success(activity);
            }
        }
    }
}