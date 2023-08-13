const { minify } = require("./luamin");

console.log(minify(`
local safeNavigate = c?.a
local safeNavigateChain = c?.a?.e?.f
local safeNavigateCall = deferred?.done()
local set = {.a,.b}
local compoundOperator += 1
local compoundOperator1 -= 1
local compoundOperator2 *= 1
local compoundOperator3 /= 1
local compoundOperator4 ^= 1
local compoundOperator5 |= 1
local compoundOperator6 &= 1
local compoundOperator7 >>= 1
local compoundOperator8 <<= 1 /* CStyle comment */
`));
