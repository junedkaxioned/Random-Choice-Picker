var inputTag = document.querySelector('.textarea');
var tags = document.querySelector('.tags');
var count = 0;

// Events on Key -->
inputTag.addEventListener('keyup', 
  function (e) {
    showInputTag(this.value);

    // Condition after Enter Key
    if (e.key == 'Enter') {
      this.value = '';
      var spanTags = document.querySelectorAll('.tag');
      var set = setInterval(function () {
        count++;
        removeColor(spanTags);
        var random = randomPicker(spanTags);
        addColor(random);
        
        if (count == 30) {
          clearInterval(set);
          count = 0;
        }
      }, 100);
    }
  }
)

// Funtion for Displaying the input tags
function showInputTag(input) {
  var tag = input.trim().split(',');
  tags.innerHTML = '';

  tag.forEach(function (item) {
    if (item) {
      var span = document.createElement('span');
      span.classList.add('tag');
      span.innerText = item;
      tags.append(span);
    }
  });
}

// Funtion for Picking Random tag
function randomPicker(spanTags) {
  return spanTags[Math.floor(Math.random() * spanTags.length)]
}

// Function for Adding highlighted color
function addColor(color) {
  color.classList.add('highlight');
}

// Function for Removing highlighted color
function removeColor(color) {
  color.forEach(function (e) {
    if (e.classList.contains('highlight')) {
      e.classList.remove('highlight');
    }
  })
}
