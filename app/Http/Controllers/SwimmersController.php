<?php

namespace App\Http\Controllers;

use App\Http\Requests\SwimmerRequest;
use App\Models\Swimmer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

class SwimmersController extends Controller
{
    public function index(Request $request): InertiaResponse
    {
        $name     = $request->has('name') && $request->name ? $request->name : null;
        $last     = $request->has('last') && $request->last ? $request->last : null;
        $gender   = $request->has('gender') && null !== $request->gender ? $request->gender : null;
        $guardian = $request->has('guardian') && $request->guardian ? $request->guardian : null;
        $phone    = $request->has('phone') && $request->phone ? $request->phone : null;
        $mobile   = $request->has('mobile') && $request->mobile ? $request->mobile : null;
        $email    = $request->has('email') && $request->email ? $request->email : null;
        $address  = $request->has('address') && $request->address ? $request->address : null;
        $datefrom = $request->has('datefrom') && $request->datefrom ? $request->datefrom : null;
        $dateto   = $request->has('dateto') && $request->dateto ? $request->dateto : null;
        $regNo    = $request->has('register_number') && $request->register_number ? $request->register_number : null;

        $swimmers = Swimmer::when($name, function ($query) use ($name) {
            return $query->where('name', 'like', '%' . $name . '%');
        })->when($last, function ($query) use ($last) {
            return $query->where('last', 'like', '%' . $last . '%');
        })->when(null !== $gender, function ($query) use ($gender) {
            return $query->where('gender', $gender);
        })->when($guardian, function ($query) use ($guardian) {
            return $query->where('guardian', 'like', '%' . $guardian . '%');
        })->when($phone, function ($query) use ($phone) {
            return $query->where('land', 'like', '%' . $phone . '%');
        })->when($mobile, function ($query) use ($mobile) {
            return $query->where('mobile', 'like', '%' . $mobile . '%');
        })->when($email, function ($query) use ($email) {
            return $query->where('email', 'like', '%' . $email . '%');
        })->when($address, function ($query) use ($address) {
            return $query->where('address', 'like', '%' . $address . '%');
        })->when($datefrom && !$dateto, function ($query) use ($datefrom) {
            return $query->whereYear('dob', $datefrom);
        })->when($regNo, function ($query) use ($regNo) {
            return $query->where('register_number', 'like', '%' . $regNo . '%');
        })->when($dateto && $datefrom, function ($query) use ($dateto, $datefrom) {
            $from = $datefrom . '-00-00';
            $to = $dateto . '-12-31';

            return $query->whereBetween('dob', [$from, $to]);
        })->with('group')->get()->transform(function ($swimmer) {
            return [
                'id' => $swimmer->id,
                'name' => $swimmer->name,
                'last' => $swimmer->last,
                'guardian' => $swimmer->guardian,
                'land' => $swimmer->land,
                'mobile' => $swimmer->mobile,
                'email' => $swimmer->email,
                'address' => $swimmer->address,
                'dob' => $swimmer->dob,
                'gender' => $swimmer->gender,
                'groupId' => $swimmer->group_id,
                'groupName' => $swimmer->group()->exists() ? $swimmer->group->name : null,
                'photo' => $swimmer->photo,
                'regNo' => $swimmer->register_number,
            ];
        });

        return Inertia::render('Swimmers/Index', [
            'swimmers' => $swimmers,
            'name'     => $name,
            'last'     => $last,
            'gender'   => $gender,
            'guardian' => $guardian,
            'phone'    => $phone,
            'mobile'   => $mobile,
            'email'    => $email,
            'address'  => $address,
            'datefrom' => $datefrom,
            'dateto'   => $dateto,
            'regNo'    => $regNo,
            'status'   => session('status'),
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('Swimmers/Create');
    }

    public function store(SwimmerRequest $request): RedirectResponse
    {
        $smr = Swimmer::create(
            $request->validated()
        );

        $image_path = $request->hasFile('photo') ? $request->file('photo')->store('swimmers', 'public') : null;

        $smr->photo = $image_path;
        $smr->save();

        return Redirect::route('dashboard.swimmers')->with('status', 'Swimmer created.');
    }

    public function show(Swimmer $swimmer): InertiaResponse
    {
        return Inertia::render('Swimmers/View', [
            'swimmers' => $swimmer,
            'status' => session('status'),
        ]);
    }

    public function edit(Swimmer $swimmer): InertiaResponse
    {
        return Inertia::render('Swimmers/Edit', [
            'swimmer' => $swimmer,
            'status' => session('status'),
        ]);
    }

    public function update(SwimmerRequest $request, Swimmer $swimmer): RedirectResponse
    {
        $request->validated();

        if ($request->hasFile('image') && $swimmer->photo) {
            $old_image_path = public_path() . '/storage/' . $swimmer->photo;
            unlink($old_image_path);
        }

        $image_path = $request->hasFile('image') ? $request->file('image')->store('swimmers', 'public') : null;

        $swimmer->name            = $request->name;
        $swimmer->email           = $request->email;
        $swimmer->last            = $request->last;
        $swimmer->guardian        = $request->guardian;
        $swimmer->land            = $request->land;
        $swimmer->mobile          = $request->mobile;
        $swimmer->address         = $request->address;
        $swimmer->dob             = $request->dob;
        $swimmer->gender          = $request->gender;
        $swimmer->register_number = $request->register_number;
        $swimmer->photo           = $image_path;

        $swimmer->update();

        return Redirect::route('dashboard.swimmers')->with('status', 'Swimmer updated.');
    }

    public function destroy(Swimmer $swimmer): RedirectResponse
    {
        if ($swimmer->photo) {
            $old_image_path = public_path() . '/storage/' . $swimmer->photo;
            unlink($old_image_path);
        }

        $swimmer->delete();

        return Redirect::route('dashboard.swimmers')->with('status', 'Swimmer deleted.');
    }
}
