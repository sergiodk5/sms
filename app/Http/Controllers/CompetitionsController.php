<?php

namespace App\Http\Controllers;

use App\Models\Competition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Http\RedirectResponse;

class CompetitionsController extends Controller
{
    public function index(): InertiaResponse
    {
        $competitions = Competition::with('events', 'events.swimmers')->get();

        return Inertia::render('Competitions/Index', ['competitions' => $competitions]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('Competitions/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        return Redirect::route('dashboard.competitions')->with('status', 'Competition created.');
    }

    public function show(Competition $competition): InertiaResponse
    {
        return Inertia::render('Competitions/View', [
            'competition' => $competition,
            'status' => session('status'),
        ]);
    }

    public function edit(Competition $competition): InertiaResponse
    {
        return Inertia::render('Competitions/Edit', [
            'competition' => $competition,
            'status' => session('status'),
        ]);
    }

    public function update(Request $request, Competition $competition): RedirectResponse
    {
        return Redirect::route('dashboard.competitions')->with('status', 'Competition updated.');
    }

    public function destroy(Competition $competition): RedirectResponse
    {
        $competition->delete();

        return Redirect::route('dashboard.competitions')->with('status', 'Competition deleted.');
    }
}
