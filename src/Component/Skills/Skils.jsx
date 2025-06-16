import { Component } from "react";
import { Mprog } from "../Progress/progress";
import "./skills.css";

export default class Skils extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (
        <>
           <div id="diskils">
            <h1>Skils</h1>
            
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, at
        ratione quos mollitia voluptatum consectetur voluptatibus saepe,
        eveniet ad ducimus sunt, libero a! Inventore ullam a voluptatibus,
        maiores pariatur natus!
            </p>
            
            <div id="centerdiv" >
                <div id="cdiv1">
                    <h1>My Skils</h1>
                    <hr></hr>
                    <h5>UI/UX</h5>
                    <h5>Codding</h5>
                    <h5>P-Solving</h5>
                    <h5>Searching</h5>
                    <h5>Backend</h5>

                </div>
                <div id="cdiv2">
                <Mprog name="HTML" now={90} />
                <Mprog name="CSS" now={80} />
                <Mprog name="JavaScript" now={70} />
                <Mprog name="Angular" now={60} />
                <Mprog name="C++" now={50} />

                </div>
            </div>
           </div>
        </>
        )
    }
}