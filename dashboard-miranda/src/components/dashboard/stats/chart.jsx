/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */

import React, { Component, useEffect, useRef } from "react";
import * as d3 from "d3";
import chart from "./chart.css";

const data = [
    { day: "Monday", sales: 12, occupancy: 70 },
    { day: "Tuesday", sales: 36, occupancy: 20 },
    { day: "Wednesday", sales: 55, occupancy: 15 },
    { day: "Thursday", sales: 70, occupancy: 60 },
    { day: "Friday", sales: 35, occupancy: 100 },
    { day: "Saturday", sales: 95, occupancy: 20 },
    { day: "Sunday", sales: 40, occupancy: 50 },
];

function Chart() {
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };
    const width = 450;
    const height = 400;
    useEffect(() => {
        // append the svg object to the body of the page
        const svg = d3
            .select("#chart")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr(
                "viewBox",
                `0 0 ${width + margin.left + margin.right} ${
                    height + margin.top + margin.bottom
                }`
            )
            .style("background-color", "#fffefe")
            .style("padding", 10)
            .style("border-radius", "2vh")
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const subgroups = Object.keys(data[0]);
        subgroups.shift();

        const x = d3
            .scaleBand()
            .domain(data.map((el) => el.day))
            .range([0, width])
            .padding([0.1]);
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).tickSize(0));

        // Add Y axis
        const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        // Another scale for subgroup position?
        const xSubgroup = d3
            .scaleBand()
            .domain(subgroups)
            .range([0, x.bandwidth()])
            .padding([0.02]);

        // color palette = one color per subgroup
        const color = d3
            .scaleOrdinal()
            .domain(subgroups)
            .range(["#e41a1c", "#4daf4a"]);

        // Show the bars
        svg.append("g")
            .selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", (d) => `translate(${x(d.day)},0)`)
            .selectAll("rect")
            .data((d) => subgroups.map((key) => ({ key, value: d[key] })))
            .enter()
            .append("rect")
            .attr("x", (d) => xSubgroup(d.key))
            .attr("y", (d) => y(d.value))
            .attr("width", xSubgroup.bandwidth())
            .attr("height", (d) => height - y(d.value))
            .attr("fill", (d) => color(d.key));

        d3.selectAll("rect")
            .on("mouseenter", onMouseEnter)
            .on("mouseleave", OnMouseLeave);

        const toolTip = d3.select("#tooltip");

        function onMouseEnter(event, data) {
            console.log(data.value);
            data.key === "sales"
                ? toolTip
                      .text(`Sales: $${data.value}`)
                      .style("color", "#e41a1c")
                      .style("visibility", "visible")
                : toolTip
                      .text(`Ocuppancy: ${data.value}%`)
                      .style("color", "#4daf4a")
                      .style("visibility", "visible");
        }
        function OnMouseLeave(event, data) {
            toolTip.style("visibility", "hidden");
        }
    }, []);

    return (
        <>
            <div
                id="tooltip"
                style={{ border: "1x solid black", height: 20 }}
            />
            <div id="chart" />
        </>
    );
}
export default Chart;
