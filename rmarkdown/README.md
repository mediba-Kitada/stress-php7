R Markdownでスライド作成
====

## Install

- homebrewのupdate

```
$ brew doctor
# 問題を指摘されるようであれば全て対応する
# brew update
```

- Rの導入

```zsh
$ brew tap homebrew/science
$ brew install R
$ brew install Caskroom/cask/rstudio
```

- rmarkdownパッケージの導入

```
$ R
> install.packages("stringi")
# CRANの配信ディストリビューションを11(Japan)に設定
11
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
[1] TRUE
```

## Usage

- HTML Slidyに変換

```
$ R
# パッケージの読み込み
> library(rmarkdown)
# 作業フォルダを変更
> setwd("/path/to/stress-php7/rmarkdown/src") 
# 変換!!
> render("index.Rmd") 
# ブラウザで開く
> browseURL("index.html") 
```
