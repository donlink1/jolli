/*jshint asi: true, laxbreak: true, laxcomma: true */

(function () {
  setTimeout(function () {
    var a = document.getElementById('avatar')

    a.style.opacity = 0.3;
    setTimeout(function () {
      var a = document.getElementById('avatar')

      a.style.opacity = 1
      a.style.color = '#496e9c'
    }, 2000);
  }, 3000)

  setTimeout(function () {
  var a = document.getElementById('avatar'),
    btn = a.children[0],
    bar = a.children[1]

  console.log(a.children)


  //  Opens the avatar helper...
  btn.onclick = function () {
      a.classList.add('avatar--extended')
      bar.classList.add('avatar-bar--visible')
      bar.children[1].focus();
    }
    //  ...and this closes it.
  bar.children[2].onclick = function () {
      a.classList.remove('avatar--extended')
      bar.classList.remove('avatar-bar--visible')
    }
    //  "ENTER" key up event
  bar.children[1].onkeyup = function (e) {
    //  "ESC" key up event:  Closes the avatar if open.
    if (e.keyCode === 27) {
      a.classList.remove('avatar--extended')
      bar.classList.remove('avatar-bar--visible')
    }

    if (e.keyCode === 13) {
      var input = bar.children[1].value,
        which = matches(input)

      console.log('input: ' + input)
        // if we recognize the input
        // TODO: write this

      switch (which) {
      case 'register':
        window.location.href = '/join'
        break;
      case 'events':
        window.location.href = '/events'
        break;
      case 'courses':
        window.location.href = '/courses'
        break;
      case 'faq':
        window.location.href = '/faq'
        break;
      default:
        bar.children[0].innerHTML = 'I didn\'t get that.'
        bar.children[1].style.outline = '#f00'
        bar.children[1].value = ''
      }
    }
  }

  var matches = function (i) {

    // # Strategy:
    // Remove unhelpful text. (whitespace, 'help me')
    // Determine all topics that i matches.
    // Pick the one most likely to be desired.
    // OR, if the options are few,
    // Show the user their options.
    // If the chosen topic needs more information,
    //   (e.g. an event or course),
    //   see if there is anything identifying in i.
    //   If not, display the general page for the topic.
    //   Otherwise, display the specific content.

    // # Keywords
    var register = [
        'register', 'join', 'member'
      ],
      events = [
        'event'
      ],
      courses = [
        'course', 'class', 'lecture'
      ],
      eventsOrCourses = [
        'when', 'where'
      ],
      faq = [
        'faq', 'what', 'how', 'much'
      ],
      garbage = [
        'help', 'me', 'my', 'the'
      ],
      input

    // # Weights
    , REGISTER_WEIGHT = 2, EVENTS_WEIGHT = 4, COURSES_WEIGHT = 3, EVENTS_OR_COURSES_WEIGHT = 5, FAQ_WEIGHT = 1

    // # Point counts
    , registerPoints = 0, eventsPoints = 0, coursesPoints = 0, faqPoints = 0

    for (var g in garbage) {
      if (i.indexOf(g) !== -1) {
        i = i.replace(g, '')
      }
    }

    input = i.split(' ')
    console.log('input: ' + input)

    for (var r in register) {
      if (input.indexOf(register[r]) !== -1) {
        registerPoints += REGISTER_WEIGHT
      }
    }

    for (var e in events) {
      if (input.indexOf(events[e]) !== -1) {
        eventsPoints += EVENTS_WEIGHT
      }
    }

    for (var c in courses) {
      if (input.indexOf(courses[c]) !== -1) {
        coursesPoints += COURSES_WEIGHT
      }
    }

    for (var eorc in eventsOrCourses) {
      if (input.indexOf(eventsOrCourses[eorc]) !== -1) {
        eventsPoints += EVENTS_OR_COURSES_WEIGHT
        coursesPoints += EVENTS_OR_COURSES_WEIGHT
      }
    }

    for (var f in faq) {
      if (input.indexOf(faq[f]) !== -1) {
        faqPoints += FAQ_WEIGHT
      }
    }

    console.log('registerPoints: ' + registerPoints)
    console.log('eventsPoints: ' + eventsPoints)
    console.log('coursesPoints: ' + coursesPoints)
    console.log('faqPoints: ' + faqPoints)

    switch (Math.max(
      registerPoints, eventsPoints, coursesPoints, faqPoints
    )) {

    case registerPoints:
      return 'register'

    case eventsPoints:
      return 'events'

    case coursesPoints:
      return 'courses'

    case faqPoints:
      return 'faq'

    default:
      return 'unknown'
    }


    return false
  }
  });
})()
