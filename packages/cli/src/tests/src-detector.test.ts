import baretest from "baretest";
import * as assert from "assert";
import { SrcDetector } from "../rules/src-detector";
import { ResultStatus } from "../lib/result-set";
export const test = baretest("Source detector");

test("Should pass if no `src` detected in imports", async () => {
  const importPaths = ["a", "b/c/d/e/f"];
  const sut = new SrcDetector();
  const result = sut.checkImportPaths(importPaths);
  assert.equal(ResultStatus.success, result.status);
});

test("Should fail if `src` detected in imports", async () => {
  const importPaths = ["a/src/b", "b/c/d/e/f"];
  const sut = new SrcDetector();
  const result = sut.checkImportPaths(importPaths);
  assert.equal(ResultStatus.failure, result.status);
});
