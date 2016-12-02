export default {
  sidenav: {
    sections: [
      {
        name: 'Courses',
        type: 'toggle',
        expand: true,
        actions: [{
          name: 'All Courses',
          icon: 'list',
          state: 'courses'
        }, {
          name: 'Top Favourites',
          icon: 'thumbs_up_down',
          state: 'courses-top-favourites'
        }, {
          name: 'Top Enrollments',
          icon: 'swap_vert',
          state: 'courses-top-enrollments'
        }]
      },
      {
        name: 'My Career',
        type: 'toggle',
        expand: false,
        actions: [{
          name: 'My Favourites',
          icon: 'thumb_up',
          state: 'courses-my-favourites'
        }, {
          name: 'My Enrollments',
          icon: 'turned_in',
          state: 'courses-my-enrollments'
        }]
      },
      // {
      //   name: 'Timeline',
      //   icon: '',
      //   type: 'link',
      //   state: 'timeline'
      // },
      {
        name: 'Students',
        icon: 'face',
        type: 'link',
        state: 'students'
      },
      {
       name: 'Teachers',
       icon: 'assignment_ind',
       type: 'link',
       state: 'teachers'
     },
     {
      name: 'About',
      icon: 'info',
      type: 'link',
      state: 'about'
    }
  ]}
};
