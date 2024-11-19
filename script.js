<script>
    // Define the default timetable for each day
    const weeklyTimetable = {
      Monday: [
        "History/Geography",
        "Politics/Economics",
        "Malayalam/Hindi",
        "Information Technology",
        "English",
        "Physics",
        "Mathematics(S)",
        "Biology",
        "Communicative English",
        "Science Practical"
      ],
      Tuesday: [
        "History/Geography",
        "Physics",
        "Mathematics(S)",
        "Mathematics(R)",
        "Politics/Economics",
        "English",
        "Malayalam/Hindi",
        "Information Technology",
        "Physical Training",
        "English"
      ],
      Wednesday: [
        "History/Geography",
        "Information Technology",
        "Mathematics(R)",
        "English",
        "Mathematics(S)",
        "Malayalam/Hindi",
        "Politics/Economics",
        "Biology",
        "Chemistry",
        "MPT"
      ],
      Thursday: [
        "History/Geography",
        "Physics",
        "Chemistry",
        "English",
        "Malayalam/Hindi",
        "Politics/Economics",
        "English",
        "Mathematics(S)",
        "Physical Training",
        "Mathematics(R)"
      ],
      Friday: [
        "History/Geography",
        "Politics/Economics",
        "Mathematics(R)",
        "Biology",
        "English",
        "Mathematics(S)",
        "Chemistry",
        "Malayalam/Hindi",
        "Information Technology",
        "English"
      ],
      Saturday: [
        "History/Geography",
        "Mathematics(R)",
        "Health Education",
        "Drawing",
        "Library",
        "Mathematics(S)",
        "Information Technology",
        "Communicative English",
        "Science Practical",
        "Malayalam/Hindi"
      ]
    };

    // Function to update the timetable based on the day of the week
    function updateTimetable() {
      const today = new Date();
      const dayName = today.toLocaleString('en-US', { weekday: 'long' });

      const timetableElement = document.getElementById("timetable");
      timetableElement.innerHTML = ""; // Clear existing timetable

      const timetableForToday = weeklyTimetable[dayName] || [];
      timetableForToday.forEach((subject, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<textarea>${index + 1}. ${subject}</textarea>`;
        timetableElement.appendChild(listItem);
      });
    }

    // Initialize the timetable
    updateTimetable();
  </script>
