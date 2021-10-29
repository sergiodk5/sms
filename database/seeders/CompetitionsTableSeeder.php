<?php

namespace Database\Seeders;

use App\Models\Competition;
use Illuminate\Database\Seeder;

class CompetitionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $competitions = array(
            array(
                'title'      => 'FINA Swimming World Cup 2021 - Leg 1',
                'date_start' => '2021-10-01',
                'date_end'   => '2021-10-03',
                'location'   => 'GER, Germany, Berlin',
                'events'     => array(
                    array(
                        'event_id' => 2,
                        'date'     => '2021-10-01 09:00:00',
                    ),
                    array(
                        'event_id' => 13,
                        'date'     => '2021-10-01 17:00:00',
                    ),
                    array(
                        'event_id' => 17,
                        'date'     => '2021-10-02 09:00:00',
                    ),
                    array(
                        'event_id' => 21,
                        'date'     => '2021-10-02 17:00:00',
                    ),
                    array(
                        'event_id' => 25,
                        'date'     => '2021-10-03 09:00:00',
                    ),
                ),
            ),
            array(
                'title'      => 'FINA Swimming World Cup 2021 - Leg 2',
                'date_start' => '2021-10-07',
                'date_end'   => '2021-10-09',
                'location'   => 'HUN, Hungary, Budapest',
                'events'     => array(
                    array(
                        'event_id' => 2,
                        'date'     => '2021-10-07 09:00:00',
                    ),
                    array(
                        'event_id' => 13,
                        'date'     => '2021-10-07 17:00:00',
                    ),
                    array(
                        'event_id' => 17,
                        'date'     => '2021-10-08 09:00:00',
                    ),
                    array(
                        'event_id' => 21,
                        'date'     => '2021-10-08 17:00:00',
                    ),
                    array(
                        'event_id' => 25,
                        'date'     => '2021-10-09 09:00:00',
                    ),
                ),
            ),
            array(
                'title'      => 'FINA Swimming World Cup 2021 - Leg 3',
                'date_start' => '2021-10-21',
                'date_end'   => '2021-10-23',
                'location'   => 'QAT, Qatar, Doha',
                'events'     => array(
                    array(
                        'event_id' => 2,
                        'date'     => '2021-10-21 09:00:00',
                    ),
                    array(
                        'event_id' => 13,
                        'date'     => '2021-10-21 17:00:00',
                    ),
                    array(
                        'event_id' => 17,
                        'date'     => '2021-10-22 09:00:00',
                    ),
                    array(
                        'event_id' => 21,
                        'date'     => '2021-10-22 17:00:00',
                    ),
                    array(
                        'event_id' => 25,
                        'date'     => '2021-10-23 09:00:00',
                    ),
                ),
            ),
            array(
                'title'      => 'FINA Swimming World Cup 2021 - Leg 4',
                'date_start' => '2021-10-28',
                'date_end'   => '2021-10-30',
                'location'   => 'RUS, Russian Federation, Kazan',
                'events'     => array(
                    array(
                        'event_id' => 2,
                        'date'     => '2021-10-28 09:00:00',
                    ),
                    array(
                        'event_id' => 13,
                        'date'     => '2021-10-28 17:00:00',
                    ),
                    array(
                        'event_id' => 17,
                        'date'     => '2021-10-29 09:00:00',
                    ),
                    array(
                        'event_id' => 21,
                        'date'     => '2021-10-29 17:00:00',
                    ),
                    array(
                        'event_id' => 25,
                        'date'     => '2021-10-30 09:00:00',
                    ),
                ),
            ),
            array(
                'title'      => '15th FINA World Swimming Championships (25m) 2021',
                'date_start' => '2021-10-16',
                'date_end'   => '2021-10-21',
                'location'   => 'UAE, United Arab Emirates, Abu Dhabi',
                'events'     => array(
                    array(
                        'event_id' => 2,
                        'date'     => '2021-10-16 09:00:00',
                    ),
                    array(
                        'event_id' => 13,
                        'date'     => '2021-10-17 17:00:00',
                    ),
                    array(
                        'event_id' => 17,
                        'date'     => '2021-10-18 09:00:00',
                    ),
                    array(
                        'event_id' => 21,
                        'date'     => '2021-10-19 17:00:00',
                    ),
                    array(
                        'event_id' => 25,
                        'date'     => '2021-10-21 09:00:00',
                    ),
                ),
            ),
        );

        foreach ($competitions as $comp) {
            $cmp = Competition::create([
                'title'      => $comp['title'],
                'date_start' => $comp['date_start'],
                'date_end'   => $comp['date_end'],
                'location'   => $comp['location'],
            ]);

            foreach ($comp['events'] as $event) {
                $cmp->events()->attach($event['event_id'], ['date' => $event['date']]);
            }
        }
    }
}
