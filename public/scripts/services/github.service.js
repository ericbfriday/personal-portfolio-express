myApp.service('GithubService', function ($http) {
  var self = this;
  // Object that will store our user data

  self.user = {data: {}};

  //Call to Github API to fetch user's profile info
  self.githubProfile = function () {
    $http({
      method: 'GET',
      url: '/github/user/',
    }).then(function (response) {
      // console.log(response.data);
      self.user.data = response.data;
    }).catch((err)=> {
      console.log(err);
    });
  }

  // Object that will store our repo data
  self.repos = { data: [] };
  //Call to Github API to fetch list of user's repos
  self.githubRepos = function () {
    $http({
      method: 'GET',
      url: '/github/repos/'
    }).then(function (response) {
      // console.log(response.data);
      self.repos.data = response.data;
    }).catch((err)=> {
      console.log(err);
    });
  }
});
