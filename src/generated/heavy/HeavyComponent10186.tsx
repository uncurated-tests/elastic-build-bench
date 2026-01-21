'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10186<T> = T extends (infer U)[]
  ? DeepReadonlyArray10186<U>
  : T extends object
  ? DeepReadonlyObject10186<T>
  : T;

interface DeepReadonlyArray10186<T> extends ReadonlyArray<DeepReadonly10186<T>> {}

type DeepReadonlyObject10186<T> = {
  readonly [P in keyof T]: DeepReadonly10186<T[P]>;
};

type UnionToIntersection10186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10186<T> = UnionToIntersection10186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10186<T extends unknown[], V> = [...T, V];

type TuplifyUnion10186<T, L = LastOf10186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10186<TuplifyUnion10186<Exclude<T, L>>, L>;

type DeepPartial10186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10186<T[P]> }
  : T;

type Paths10186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10186<K, Paths10186<T[K], Prev10186[D]>> : never }[keyof T]
  : never;

type Prev10186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10186 {
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

type ConfigPaths10186 = Paths10186<NestedConfig10186>;

interface HeavyProps10186 {
  config: DeepPartial10186<NestedConfig10186>;
  path?: ConfigPaths10186;
}

const HeavyComponent10186 = memo(function HeavyComponent10186({ config }: HeavyProps10186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10186.displayName = 'HeavyComponent10186';
export default HeavyComponent10186;
