<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['competition_id', 'race_id', 'date'];

    // protected $with = ['race'];

    public function competition(): BelongsTo
    {
        return $this->belongsTo(Competition::class);
    }

    public function race(): BelongsTo
    {
        return $this->belongsTo(Race::class);
    }

    public function swimmers(): BelongsToMany
    {
        return $this->belongsToMany(Swimmer::class)->as('participations')->withPivot('rnk', 'total');
    }
}
