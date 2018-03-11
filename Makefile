init: clean
	git init
	git remote add origin git@github.com:ooz/templates.git
	git pull origin master

clean:
	rm -rf .git/

.PHONY: init clean

