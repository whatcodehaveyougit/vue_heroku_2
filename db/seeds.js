use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jimmy",
    email: "jimmy@jimmy.com",
    checkedIn: true
  },
  {
    name: "bobby",
    email: "bobby@jimmy.com",
    checkedIn: false
  },
  {
    name: "Jimmy",
    email: "jimmy@jimmy.com",
    checkedIn: true
  },
  {
    name: "bobby",
    email: "bobby@jimmy.com",
    checkedIn: false
  }
]);
