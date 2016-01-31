R Markdownでスライド作成
====

## Install

- Rの導入

```zsh
$ brew tap homebrew/science
$ brew install R
$ brew install Caskroom/cask/rstudio
```

- rmarkdownパッケージの導入

```
$ R
> install.packages("rmarkdown", dependencies = TRUE)
```

- pandocの導入

```
$ brew install pandoc
```

- 確認

```
$ R
> library(rmarkdown)
> pandoc_available()
TRUE
```
