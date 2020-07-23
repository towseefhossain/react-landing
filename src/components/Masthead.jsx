import React from 'react'
import Typing from 'react-typing-animation'

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

export default () => {
    return (
        <header class="masthead">
            <div class="container">
                <Typing speed={60}>
                    <span>
                        <div class="masthead-heading text-uppercase">M Towseef Hossain</div>
                    </span>
                    <Typing.Delay ms={1000} />
                    <Typing.Speed ms={45} />
                    <span>
                        <div class="masthead-subheading">{ordinal_suffix_of(new Date().getFullYear() - 2018)} Year at the University of Waterloo.</div>
                    </span>
                </Typing>
            </div>
        </header>
    )
}