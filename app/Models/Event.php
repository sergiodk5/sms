<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'gender'];

    public function competitions(): BelongsToMany
    {
        return $this->belongsToMany(Competition::class)->as('race')->wherePivot('date');
    }

    public function swimmers(): BelongsToMany
    {
        return $this->belongsToMany(Swimmer::class)->as('participation')->withPivot('rnk', 'total');
    }
}
