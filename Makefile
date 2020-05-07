
.PHONY: serve
serve:
	bundle exec jekyll serve

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: run
run:
	gulp

.PHONY: serve-drafts
serve-drafts:
	bundle exec jekyll server --drafts
