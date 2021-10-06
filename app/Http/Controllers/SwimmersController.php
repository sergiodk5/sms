<?php

namespace App\Http\Controllers;

use App\Http\Requests\SwimmerRequest;
use App\Models\Swimmer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class SwimmersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $swimmers = Swimmer::all();
        return Inertia::render('Swimmers/Index', [
            'swimmers' => $swimmers,
            'status' => session('status'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Swimmers/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\SwimmerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SwimmerRequest $request)
    {
        Swimmer::create(
            $request->validated()
        );

        return Redirect::route('dashboard.swimmers')->with('status', 'Swimmer created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Swimmer  $swimmer
     * @return \Illuminate\Http\Response
     */
    public function show(Swimmer $swimmer)
    {
        return Inertia::render('Swimmers/View', [
            'swimmers' => $swimmer,
            'status' => session('status'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Swimmer  $swimmer
     * @return \Illuminate\Http\Response
     */
    public function edit(Swimmer $swimmer)
    {
        return Inertia::render('Swimmers/Edit', [
            'swimmer' => $swimmer,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\SwimmerRequest  $request
     * @param  \App\Models\Swimmer  $swimmer
     * @return \Illuminate\Http\Response
     */
    public function update(SwimmerRequest $request, Swimmer $swimmer)
    {
        $swimmer->update(
            $request->validated()
        );

        return Redirect::route('dashboard.swimmers')->with('status', 'Swimmer updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
