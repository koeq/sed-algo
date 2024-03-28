#!/bin/zsh

echo "Starting program at $(date)"
# $0 is program name; $# is the number of arguments; $$ is the process id
echo "Running program $0 with $# arguments with pid $$"

# "$@" expands to all arguments passed to the program
for file in "$@"; do
	# redirect the STDOUT (1, can be left out) and STDERR (2) to a null register	
	grep foobar "$file" > /dev/null 2> /dev/null

	# test command
	# $? holds the exit status code of the mos recently executed command
	# 0 is success, non zero indicates failure 
	# -ne stands for not equals and tests integers
	if [[ "$?" -ne 0 ]]; then
		echo "File $file does not have any foobar, adding one"
		# append foobar to file 
		echo "# foobar" >> "$file"
	fi
done
