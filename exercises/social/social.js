var person = {
  name: 'Lara',
  age: 30,
  findBestFriend: function() {
    console.log(`${person.name}'s best friend is ${person.friends[0].name}!`)
  },
  friends: [
      {
        name: 'Amy',
        age: 31,
        friends: [
          {
            name: 'Rich',
            age: 31,
            friends: [
              {
                name: 'George',
                age: 30,
                friends: [ 
                  {
                    name: 'American Amy',
                    age: 30,
                    friends: []
                  },
                  {
                    name: 'English Amy',
                    age: 31,
                    friends: []
                  },
                  {
                    name: 'Matt',
                    age: 33,
                    friends: [
                      {
                        name: 'Bob',
                        age: 37,
                        friends: []
                      }
                    ]
                  },
                  {
                    name: 'American Amy',
                    age: 30,
                    friends: []
                  },
                  {
                    name: 'English Amy',
                    age: 31,
                    friends: [
                      {
                          name: 'American Amy',
                          age: 30,
                          friends: []
                        },
                        {
                          name: 'Lance',
                          age: 31,
                          friends: [
                            {
                              name: 'Patricia',
                              age: 30,
                              friends: []
                            },
                            {
                              name: 'Tinnifer',
                              age: 31,
                              friends: [
                                {
                                  name: 'Alan',
                                  age: 30,
                                  friends: [
                                    {
                                      name: 'Fred',
                                      age: 30,
                                      friends: []
                                    },
                                    {
                                      name: 'English Amy',
                                      age: 31,
                                      friends: []
                                    }
                                  ]
                                },
                                {
                                  name: 'Dave',
                                  age: 31,
                                  friends: []
                                }
                              ]
                            }
                          ]
                        }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'American Amy',
        age: 30,
        friends: []
      },
      {
        name: 'English Amy',
        age: 31,
        friends: []
      },
      {
        name: 'Michael',
        age: 24,
        friends: []
      },
      {
        name: 'Monica',
        age: 35,
        friends: []
      },
      {
        name: 'Nate',
        age: 26,
        friends: []
      }
  ]
 
}

person.findBestFriend();