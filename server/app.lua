local lapis = require("lapis")
local app = lapis.Application()

app:get("/", function()
  return "Welcome fuck " .. require("lapis.version")
end)

app:get("/hello", function() 
  return "Hellos Worlds"
end)

return app
