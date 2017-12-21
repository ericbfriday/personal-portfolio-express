myApp.service('GithubService', function ($http) {
  const self = this;

  self.repos = {
    data: [],
  };
  self.user = {
    data: {},
  };

  self.githubProfile = function () {
    $http({
      method: 'GET',
      url: '/github/user/',
    }).then((response) => {
      self.user.data = response.data;
    }).catch((err) => {
      console.log(err);
    });
  };

  self.githubRepos = function () {
    $http({
      method: 'GET',
      url: '/github/repos/'
    }).then((response) => {
      // console.log(response.data);
      self.repos.data = response.data;
    }).catch((err) => {
      console.log(err);
    });
  };
});
