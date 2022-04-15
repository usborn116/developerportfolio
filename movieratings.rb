movies = { 
avengers:12
}
puts "What action would you like to take? Enter: add, update, display, delete"
choice = gets.chomp

case choice
when "add"
  puts "What movie you wanna add?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "what is the rating?"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "Added!"
  else
    puts "Already in the database!"
  end
when "update"
  puts "What movie?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie isn't in database!"
  else
    puts "What is the rating?"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "This has been updated!"
  end
when "display"
  movies.each{|x,y|
    puts "#{x}: #{y}"
  }
when "delete"
  puts "What movie?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "That movie's not there!"
  else
    movies.delete(title.to_sym)
    puts "Movie is gone!"
  end
else
  puts "That is not an action I can do!"
end
