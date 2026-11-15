import test from "node:test";import assert from "node:assert/strict";import {makeScale,cssTokens} from "./app.mjs";
test("creates an increasing geometric scale",()=>{const s=makeScale(16,1.25,4);assert.deepEqual(s.map(x=>x.size),[16,20,25,31.25])});
test("rejects out-of-range values",()=>{assert.throws(()=>makeScale(4,1.2,4));assert.throws(()=>makeScale(16,1,4));assert.throws(()=>makeScale(16,1.2,2))});
test("exports stable CSS variables",()=>{assert.match(cssTokens(makeScale(16,1.5,3)),/--type-2: 36px/)});
