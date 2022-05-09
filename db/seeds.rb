# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "SEEDINGGGGG"

puts "USERS"

daniel = User.create(first_name: 'Daniel', last_name: 'Brito', email: 'dannyb829@gmail.com', phone_number:555, password: 'dannyb', image_url: 'url', bio: 'nice guy')
noah = User.create(first_name: 'Noah', last_name: 'Reece', email: 'noahR25@gmail.com', phone_number:545, password: 'noahR', image_url: 'url', bio: 'nice guy')
chett = User.create(first_name: 'Chett', last_name: 'Tiller', email: 'brewchetta@gmail.com', phone_number:556, password: 'kittens', image_url: 'url', bio: 'nicest guy')

puts "FRIENDS"

dwayne = Friend.create(first_name: 'Dwayne', last_name: 'Johnson', email: 'whattherockscookin@gmail.com', phone_number:123, image_url:'something', description: 'very strong guy')
kanye = Friend.create(first_name: 'Kanye', last_name: 'West', email: 'though_the_wire@gmail.com', phone_number:312, image_url:'something', description: 'very confident guy')
drake = Friend.create(first_name: 'Aubery', last_name: 'Graham', email: 'youusedtocallme@gmail.com', phone_number:666, image_url:'something', description: 'very talented guy')
beyonce = Friend.create(first_name: 'Beyonce', last_name: 'Knowles', email: 'destinyschild@gmail.com', phone_number:150, image_url:'something', description: 'very talented woman')
kelly = Friend.create(first_name: 'Kelly', last_name: 'Clarkson', email: 'becauseofyou@gmail.com', phone_number:000, image_url:'something', description: 'very sad songs')
george = Friend.create(first_name: 'George', last_name: 'Clooney', email: 'oceans13@gmail.com', phone_number:013, image_url:'something', description: 'very awesome movies')

puts "FRIENDSHIPS"

Friendship.create(user: daniel, friend: drake, meeting_max:5, meeting_reminder_interval: 3, communication_max: 2, communication_reminder_interval: 3, friendship_score:1)
Friendship.create(user: noah, friend: george, meeting_max:4, meeting_reminder_interval: 2, communication_max: 1, communication_reminder_interval: 2, friendship_score:10)
Friendship.create(user: chett, friend: dwayne, meeting_max:10, meeting_reminder_interval: 5, communication_max: 7, communication_reminder_interval: 8, friendship_score:10)
Friendship.create(user: daniel, friend: beyonce, meeting_max:15, meeting_reminder_interval: 10, communication_max: 2, communication_reminder_interval: 3, friendship_score:15)
Friendship.create(user: noah, friend: kanye, meeting_max:20, meeting_reminder_interval: 15, communication_max: 2, communication_reminder_interval: 6, friendship_score:9)
Friendship.create(user: daniel, friend: kanye, meeting_max:5, meeting_reminder_interval: 3, communication_max: 2, communication_reminder_interval: 3, friendship_score:8)
Friendship.create(user: chett, friend: kanye, meeting_max:5, meeting_reminder_interval: 3, communication_max: 2, communication_reminder_interval: 3, friendship_score:10)
Friendship.create(user: chett, friend: kelly, meeting_max:5, meeting_reminder_interval: 3, communication_max: 2, communication_reminder_interval: 3, friendship_score:5)
Friendship.create(user: noah, friend: dwayne, meeting_max:5, meeting_reminder_interval: 3, communication_max: 2, communication_reminder_interval: 3, friendship_score:10)
Friendship.create(user: daniel, friend: george, meeting_max:5, meeting_reminder_interval: 3, communication_max: 2, communication_reminder_interval: 3, friendship_score:7)


puts "GROUPS"

g1 = Group.create(user: daniel, group_name: 'artists')
g2 = Group.create(user: noah, group_name: 'nice people')
g3 = Group.create(user: chett, group_name: 'actors')
g4 = Group.create(user: daniel, group_name: 'crazy people')
g5 = Group.create(user: noah, group_name: 'actors')
g6 = Group.create(user: chett, group_name: 'strong people')


puts "GROUPIES"

GroupFriend.create(group: g1, friend:kanye)
GroupFriend.create(group: g5, friend:dwayne)
GroupFriend.create(group: g6, friend:dwayne)
GroupFriend.create(group: g2, friend:george)
GroupFriend.create(group: g4, friend:kanye)
GroupFriend.create(group: g1, friend:beyonce)

puts "INTERACTIONS!!!!!"

Interaction.create(user: daniel, friend: beyonce, in_person?: false, date: DateTime.now - (rand * 21), score: 1, location_or_method: 'phone', description: ' pleasant business discussion')
Interaction.create(user: chett, friend: dwayne, in_person?: true, date: DateTime.now - (rand * 21), score: 0.5, location_or_method: 'brooklyn', description: 'went to the gym and got buff!')
Interaction.create(user: noah, friend: kanye, in_person?: true, date: DateTime.now - (rand * 21), score: 0.3, location_or_method: 'wyoming', description: 'studio session, kanye lost his shit')
Interaction.create(user: chett, friend: kanye, in_person?: true, date: DateTime.now - (rand * 21), score: 1, location_or_method: 'chicago', description: 'recorded a music video, drinks after')
Interaction.create(user: daniel, friend: kanye, in_person?: false, date: DateTime.now - (rand * 21), score: 1, location_or_method: 'zoom', description: 'complained about kim and skete, super entertaining')
Interaction.create(user: noah, friend: dwayne, in_person?: true, date: DateTime.now - (rand * 21), score: 0.9, location_or_method: 'gym', description: 'good work out, the rock is obsessed with the gym')
Interaction.create(user: chett, friend: kelly, in_person?: false, date: DateTime.now - (rand * 21), score: 0.6, location_or_method: 'phone', description: 'kinda tired of the music')
Interaction.create(user: daniel, friend: drake, in_person?: true, date: DateTime.now - (rand * 21), score: 0.1, location_or_method: 'toronto', description: 'drake stabbed me in the back')
Interaction.create(user: noah, friend: george, in_person?: false, date: DateTime.now - (rand * 21), score: 0.8, location_or_method: 'phone', description: 'revamping oceans movies, cool.')


puts "DONE SEEDING!"