'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10438<T> = T extends (infer U)[]
  ? DeepReadonlyArray10438<U>
  : T extends object
  ? DeepReadonlyObject10438<T>
  : T;

interface DeepReadonlyArray10438<T> extends ReadonlyArray<DeepReadonly10438<T>> {}

type DeepReadonlyObject10438<T> = {
  readonly [P in keyof T]: DeepReadonly10438<T[P]>;
};

type UnionToIntersection10438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10438<T> = UnionToIntersection10438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10438<T extends unknown[], V> = [...T, V];

type TuplifyUnion10438<T, L = LastOf10438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10438<TuplifyUnion10438<Exclude<T, L>>, L>;

type DeepPartial10438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10438<T[P]> }
  : T;

type Paths10438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10438<K, Paths10438<T[K], Prev10438[D]>> : never }[keyof T]
  : never;

type Prev10438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10438 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths10438 = Paths10438<NestedConfig10438>;

interface HeavyProps10438 {
  config: DeepPartial10438<NestedConfig10438>;
  path?: ConfigPaths10438;
}

const HeavyComponent10438 = memo(function HeavyComponent10438({ config }: HeavyProps10438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10438.displayName = 'HeavyComponent10438';
export default HeavyComponent10438;
