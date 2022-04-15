puts "Welcome to the text redacter!"
puts "What text do you want to analyze?"
text = gets.chomp
text.downcase!
puts "What words do you want to redact? (if multiple words, separate by a space)"
redact = gets.chomp
redact.downcase!

words = text.split(" ")
block = redact.split(" ")

new = words.map!{|word|
  if block.include? word
    word.gsub /#{word}/, "REDACTED"
  else
    word.gsub /#{word}/, "#{word}"
  end }
new = words.join(" ")
print "This is thew new string: " + new
