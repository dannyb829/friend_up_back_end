# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'SEEDINGGGGG'

puts 'USERS'

daniel =
  User.create(
    first_name: 'Daniel',
    last_name: 'Brito',
    email: 'dannyb829@gmail.com',
    phone_number: 555,
    password: 'dannyb',
    image_url:
      'https://ca.slack-edge.com/T02MD9XTF-U02T65VHL5Q-c31a3fe4bf82-512',
    bio: 'nice guy'
  )
noah =
  User.create(
    first_name: 'Noah',
    last_name: 'Reece',
    email: 'noahR25@gmail.com',
    phone_number: 545,
    password: 'noahR',
    image_url:
      'https://ca.slack-edge.com/T02MD9XTF-U02TC8XDF3L-84d65a18df17-512',
    bio: 'nice guy'
  )
chett =
  User.create(
    first_name: 'Chett',
    last_name: 'Tiller',
    email: 'brewchetta@gmail.com',
    phone_number: 556,
    password: 'kittens',
    image_url: 'https://ca.slack-edge.com/T02MD9XTF-UD88L20GM-06e73e1b25fc-512',
    bio: 'nicest guy'
  )

puts 'FRIENDS'

dwayne =
  Friend.create(
    first_name: 'Dwayne',
    last_name: 'Johnson',
    email: 'whattherockscookin@gmail.com',
    phone_number: 123,
    image_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwayne-johnson-attends-the-jumanji-the-next-level-uk-film-news-photo-1575726701.jpg',
    description: 'very strong guy'
  )
kanye =
  Friend.create(
    first_name: 'Kanye',
    last_name: 'West',
    email: 'though_the_wire@gmail.com',
    phone_number: 312,
    image_url:
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg',
    description: 'very confident guy'
  )
drake =
  Friend.create(
    first_name: 'Aubery',
    last_name: 'Graham',
    email: 'youusedtocallme@gmail.com',
    phone_number: 666,
    image_url:
      'https://media1.popsugar-assets.com/files/thumbor/zan-t_Me63if8oqWYE9ENiPLlhA/0x224:2826x3050/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/894/n/1922398/87f6bb525e430e7bd44e40.22278576_/i/Drake.jpg',
    description: 'very talented guy'
  )
beyonce =
  Friend.create(
    first_name: 'Beyonce',
    last_name: 'Knowles',
    email: 'destinyschild@gmail.com',
    phone_number: 150,
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/20/2021/09/04/Beyonce-1.jpg',
    description: 'very talented woman'
  )
kelly =
  Friend.create(
    first_name: 'Kelly',
    last_name: 'Clarkson',
    email: 'becauseofyou@gmail.com',
    phone_number: 000,
    image_url:
      'data:image/jpeg;base64,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',
    description: 'very sad songs'
  )
george =
  Friend.create(
    first_name: 'George',
    last_name: 'Clooney',
    email: 'oceans13@gmail.com',
    phone_number: 013,
    image_url:
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNDYwMDg1ODI5NDQ1NDg0/gettyimages-969403912.jpg',
    description: 'very awesome movies'
  )

puts 'FRIENDSHIPS'

Friendship.create(
  user: daniel,
  friend: drake,
  meeting_max: 5,
  meeting_reminder_interval: 3,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 1
)
Friendship.create(
  user: noah,
  friend: george,
  meeting_max: 4,
  meeting_reminder_interval: 2,
  communication_max: 1,
  communication_reminder_interval: 2,
  friendship_score: 10
)
Friendship.create(
  user: chett,
  friend: dwayne,
  meeting_max: 10,
  meeting_reminder_interval: 5,
  communication_max: 7,
  communication_reminder_interval: 8,
  friendship_score: 10
)
Friendship.create(
  user: daniel,
  friend: beyonce,
  meeting_max: 15,
  meeting_reminder_interval: 10,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 15
)
Friendship.create(
  user: noah,
  friend: kanye,
  meeting_max: 20,
  meeting_reminder_interval: 15,
  communication_max: 2,
  communication_reminder_interval: 6,
  friendship_score: 9
)
Friendship.create(
  user: daniel,
  friend: kanye,
  meeting_max: 5,
  meeting_reminder_interval: 3,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 8
)
Friendship.create(
  user: chett,
  friend: kanye,
  meeting_max: 5,
  meeting_reminder_interval: 3,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 10
)
Friendship.create(
  user: chett,
  friend: kelly,
  meeting_max: 5,
  meeting_reminder_interval: 3,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 5
)
Friendship.create(
  user: noah,
  friend: dwayne,
  meeting_max: 5,
  meeting_reminder_interval: 3,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 10
)
Friendship.create(
  user: daniel,
  friend: george,
  meeting_max: 5,
  meeting_reminder_interval: 3,
  communication_max: 2,
  communication_reminder_interval: 3,
  friendship_score: 7
)

puts 'GROUPS'

g1 = Group.create(user: daniel, group_name: 'artists')
g2 = Group.create(user: noah, group_name: 'nice people')
g3 = Group.create(user: chett, group_name: 'actors')
g4 = Group.create(user: daniel, group_name: 'crazy people')
g5 = Group.create(user: noah, group_name: 'actors')
g6 = Group.create(user: chett, group_name: 'strong people')

puts 'GROUPIES'

GroupFriend.create(group: g1, friend: kanye)
GroupFriend.create(group: g5, friend: dwayne)
GroupFriend.create(group: g6, friend: dwayne)
GroupFriend.create(group: g2, friend: george)
GroupFriend.create(group: g4, friend: kanye)
GroupFriend.create(group: g1, friend: beyonce)

puts 'INTERACTIONS!!!!!'

Interaction.create(
  user: daniel,
  friend: beyonce,
  in_person?: false,
  date: DateTime.now - (rand * 21),
  score: 1,
  location_or_method: 'phone',
  description: ' pleasant business discussion'
)
Interaction.create(
  user: chett,
  friend: dwayne,
  in_person?: true,
  date: DateTime.now - (rand * 21),
  score: 0.5,
  location_or_method: 'brooklyn',
  description: 'went to the gym and got buff!'
)
Interaction.create(
  user: noah,
  friend: kanye,
  in_person?: true,
  date: DateTime.now - (rand * 21),
  score: 0.3,
  location_or_method: 'wyoming',
  description: 'studio session, kanye lost his shit'
)
Interaction.create(
  user: chett,
  friend: kanye,
  in_person?: true,
  date: DateTime.now - (rand * 21),
  score: 1,
  location_or_method: 'chicago',
  description: 'recorded a music video, drinks after'
)
Interaction.create(
  user: daniel,
  friend: kanye,
  in_person?: false,
  date: DateTime.now - (rand * 21),
  score: 1,
  location_or_method: 'zoom',
  description: 'complained about kim and skete, super entertaining'
)
Interaction.create(
  user: noah,
  friend: dwayne,
  in_person?: true,
  date: DateTime.now - (rand * 21),
  score: 0.9,
  location_or_method: 'gym',
  description: 'good work out, the rock is obsessed with the gym'
)
Interaction.create(
  user: chett,
  friend: kelly,
  in_person?: false,
  date: DateTime.now - (rand * 21),
  score: 0.6,
  location_or_method: 'phone',
  description: 'kinda tired of the music'
)
Interaction.create(
  user: daniel,
  friend: drake,
  in_person?: true,
  date: DateTime.now - (rand * 21),
  score: 0.1,
  location_or_method: 'toronto',
  description: 'drake stabbed me in the back'
)
Interaction.create(
  user: noah,
  friend: george,
  in_person?: false,
  date: DateTime.now - (rand * 21),
  score: 0.8,
  location_or_method: 'phone',
  description: 'revamping oceans movies, cool.'
)

puts 'DONE SEEDING!'
