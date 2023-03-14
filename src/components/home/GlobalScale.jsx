import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
function GlobalScale() {
	useEffect(() => {
		am4core.useTheme(am4themes_animated);

		var chart = am4core.create('chartdiv', am4maps.MapChart);
		chart.geodata = am4geodata_worldLow;
		chart.projection = new am4maps.projections.Orthographic();
		chart.panBehavior = 'rotateLongLat';
		chart.deltaLatitude = -20;
		chart.padding(5, 5, 5, 5);

		var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
		polygonSeries.useGeodata = true;

		var polygonTemplate = polygonSeries.mapPolygons.template;
		polygonTemplate.tooltipText = '{name}';
		polygonTemplate.fill = am4core.color('#7A73FF');
		polygonTemplate.stroke = am4core.color('#80E8FF');
		polygonTemplate.strokeWidth = 0.5;
		polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
		polygonTemplate.url = 'https://www.datadrum.com/main.php?package={id}';
		polygonTemplate.urlTarget = '_blank';

		var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
		graticuleSeries.mapLines.template.line.stroke = am4core.color('#ffffff');
		graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
		graticuleSeries.fitExtent = false;

		chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
		chart.backgroundSeries.mapPolygons.template.polygon.fill =
			am4core.color('#ffffff');

		var hs = polygonTemplate.states.create('hover');
		hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

		let animation;
		setTimeout(function () {
			try {
				animation = chart.animate(
					{ property: 'deltaLongitude', to: 100000 },
					20000000,
				);
			} catch (error) {

			}

		}, 3000);

		chart.seriesContainer.events.on('down', function () { });

		return () => {
			chart.dispose();
		};
	}, []);
	return (
		<div
			className='relative overflow-hidden'
			style={{
				minHeight: '105vh',
				width: '100%',
				// border: '2px solid red',
				marginTop: '-300px',
				backgroundColor: '#0c2444',
				display: 'flex',
				// marginTop: 'auto'
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '48px',
					height: 'fit-content',
					width: 'max-content',
					margin: 'auto',
					marginTop: '400px',
					marginBottom: '50px',
					maxWidth: '70%',
					// border: '2px solid green',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '24px',
					}}
				>
					<div>
						<h4 className='text-lg text-[#80e9ff] font-bold'>Global Scale</h4>
					</div>

					<div>
						<h2 className='text-3xl text-white font-bold max-w-xs'>
							The backbone for global commerce
						</h2>
					</div>

					<span>
						<p className=' text-gray-300 max-w-md'>
							Stripe makes moving money as easy and programmable as moving data.
							Our teams are based in offices around the world and we process
							hundreds of billions of dollars each year for ambitious businesses
							of all sizes.
						</p>
					</span>
				</div>
				<div className='flex flex-row gap-5 flex-wrap earth '>
					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
						}}
					>
						<h4 className='font-bold text-xl text-white'>250M+</h4>
						<p className='font-semibold text-gray-300 text-sm'>
							API requests per day, peaking at 13,000 requests a second.
						</p>
					</div>

					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
						}}
					>
						<h4 className='font-bold text-xl text-white'>99.9999%</h4>
						<p className='font-semibold text-gray-300 text-sm'>
							historical uptime for Stripe services.{' '}
						</p>
					</div>

					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
						}}
					>
						<h4 className='font-bold text-xl text-white'>90% </h4>
						<p className='font-semibold text-gray-300 text-sm'>
							of U.S. adults have bought from businesses using Stripe.
						</p>
					</div>

					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
						}}
					>
						<h4 className='font-bold text-xl text-white'>135+</h4>
						<p className='font-semibold text-gray-300 text-sm'>
							currencies and payment methods supported.
						</p>
					</div>
				</div>
			</div>

			<div
				style={{
					right: '0',
					position: 'absolute',
					top: '62%',
					height: '90%',
					width: '50%',
					transform: 'translate(0,-50%)',
				}}
				id='chartdiv'
			></div>
		</div>
	);
}

export default GlobalScale;
