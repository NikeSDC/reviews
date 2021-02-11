COPY reviews(username, country, city, comfort, durability, offenseStyle, defenseStyle, overallRating, playArea, review, reviewTitle, size, state, upvote, downvote)
FROM '/home/antoine/Documents/HR/Week9SDC/Reviews---Dubeayi/test.csv'
DELIMITER ','
CSV HEADER;

COPY reviews(username, country, city, comfort, durability, offenseStyle, defenseStyle, overallRating, playArea, review, reviewTitle, size, state, upvote, downvote)
FROM '/home/ubuntu/test.csv'
DELIMITER ','
CSV HEADER;


create table reviews(
  id serial primary key,
  username varchar(400),
  country varchar(50),
  city varchar(50),
  comfort int,
  durability int,
  offenseStyle int,
  defenseStyle int,
  overallRating int not null,
  playArea int,
  review varchar(400) not null,
  reviewTitle varchar(200),
  size int,
  state varchar(50),
  upvote int,
  downvote int
);

