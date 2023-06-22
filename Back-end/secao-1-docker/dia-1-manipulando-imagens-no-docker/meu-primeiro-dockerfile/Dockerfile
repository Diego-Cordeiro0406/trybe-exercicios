FROM betrybe/figtrybe-artify AS primeiro-estagio
# WORKDIR /site
# ADD config.toml config.toml
# ADD index.html /site/layouts/index.html
# ADD _index.md /site/content/_index.md

# RUN apk add hugo
# RUN hugo --minify --gc

# FROM nginx:1.21.3-alpine AS segundo-estagio
# COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html

ENTRYPOINT ["node", "app.js"]
CMD ["go trybers!"]