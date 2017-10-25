local lapis = require("lapis")
local app = lapis.Application()

local respond_to = require ("lapis.application").respond_to

local main = require "controllers.main"

app:match('/api/main', respond_to(main))

return app
