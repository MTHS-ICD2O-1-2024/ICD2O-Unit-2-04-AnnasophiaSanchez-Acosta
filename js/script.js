// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle() {
  // input
  const baseOfTriangle = parseFloat(
    document.getElementById("base-of-triangle").value
  )
  const heightOfTriangle = parseFloat(
    document.getElementById("height-of-triangle").value
  )
  // process (corrected formula)
  const areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2

  // output
  document.getElementById("area").innerHTML =
    "Area is: " + areaOfTriangle + " cm²"
}
