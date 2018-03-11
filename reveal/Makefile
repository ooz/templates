all:
	reveal-md -w presentation.md --disable-auto-open

test:
	reveal-md -w presentation.md

print: presentation.md
	reveal-md presentation.md --print presentation.pdf

install:
	npm install -g reveal.js
	npm install -g reveal-md

clean:
	rm -rf presentation.pdf

.PHONY: all test install clean
