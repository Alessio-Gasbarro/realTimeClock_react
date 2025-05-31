import { useEffect, useState } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState({});

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const secondsSinceStart = (now - startOfDay) / 1000;
            const totalSecondsInDay = 86400;

            setCurrentTime({
                year: now.getFullYear(),
                month: String(now.getMonth() + 1).padStart(2, '0'),
                day: String(now.getDate()).padStart(2, '0'),
                dayOfWeek: dayOfWeekNames[now.getDay()],
                hour: String(now.getHours()).padStart(2, '0'),
                minute: String(now.getMinutes()).padStart(2, '0'),
                second: String(now.getSeconds()).padStart(2, '0'),
                dayProgress: (secondsSinceStart / totalSecondsInDay * 100).toFixed(2)
            });
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <pre className="code-block">
            <span className="keyword">const</span> currentTime = <span className="brace">{'{'}</span>{'\n'}
            &nbsp;&nbsp;year: <span className="number">{currentTime.year}</span>,{'\n'}
            &nbsp;&nbsp;month: <span className="number">{currentTime.month}</span>,{'\n'}
            &nbsp;&nbsp;day: <span className="number">{currentTime.day}</span>,{'\n'}
            &nbsp;&nbsp;dayOfWeek: <span className="string">"{currentTime.dayOfWeek}"</span>,{'\n'}
            &nbsp;&nbsp;hour: <span className="number">{currentTime.hour}</span>,{'\n'}
            &nbsp;&nbsp;minute: <span className="number">{currentTime.minute}</span>,{'\n'}
            &nbsp;&nbsp;second: <span className="number">{currentTime.second}</span>,{'\n'}
            &nbsp;&nbsp;dayProgress: <span className="number">{currentTime.dayProgress}%</span>{'\n'}
            <span className="brace">{'}'}</span>;
        </pre>
    );
}