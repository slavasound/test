"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotateFrames = annotateFrames;

var _lodash = require("devtools/client/shared/vendor/lodash");

var _getFrameUrl = require("./getFrameUrl");

var _getLibraryFromUrl = require("./getLibraryFromUrl");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
function annotateFrames(frames) {
  const annotatedFrames = frames.map(annotateFrame);
  return annotateBabelAsyncFrames(annotatedFrames);
}

function annotateFrame(frame) {
  const library = (0, _getLibraryFromUrl.getLibraryFromUrl)(frame);

  if (library) {
    return { ...frame,
      library
    };
  }

  return frame;
}

function annotateBabelAsyncFrames(frames) {
  const babelFrameIndexes = getBabelFrameIndexes(frames);

  const isBabelFrame = frameIndex => babelFrameIndexes.includes(frameIndex);

  return frames.map((frame, frameIndex) => isBabelFrame(frameIndex) ? { ...frame,
    library: "Babel"
  } : frame);
} // Receives an array of frames and looks for babel async
// call stack groups.


function getBabelFrameIndexes(frames) {
  const startIndexes = frames.reduce((accumulator, frame, index) => {
    if ((0, _getFrameUrl.getFrameUrl)(frame).match(/regenerator-runtime/i) && frame.displayName === "tryCatch") {
      return [...accumulator, index];
    }

    return accumulator;
  }, []);
  const endIndexes = frames.reduce((accumulator, frame, index) => {
    if ((0, _getFrameUrl.getFrameUrl)(frame).match(/_microtask/i) && frame.displayName === "flush") {
      return [...accumulator, index];
    }

    if (frame.displayName === "_asyncToGenerator/<") {
      return [...accumulator, index + 1];
    }

    return accumulator;
  }, []);

  if (startIndexes.length != endIndexes.length || startIndexes.length === 0) {
    return frames;
  } // Receives an array of start and end index tuples and returns
  // an array of async call stack index ranges.
  // e.g. [[1,3], [5,7]] => [[1,2,3], [5,6,7]]
  // $FlowIgnore


  return (0, _lodash.flatMap)((0, _lodash.zip)(startIndexes, endIndexes), ([startIndex, endIndex]) => (0, _lodash.range)(startIndex, endIndex + 1));
}