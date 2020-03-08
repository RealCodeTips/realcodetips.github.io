
.PHONY: serve
serve:
	bundle exec jekyll serve

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: run
run:
	gulp

.PHONY: drafts
drafts:
	bundle exec jekyll serve --drafts
