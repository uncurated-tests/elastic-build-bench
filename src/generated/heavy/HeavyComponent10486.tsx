'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10486<T> = T extends (infer U)[]
  ? DeepReadonlyArray10486<U>
  : T extends object
  ? DeepReadonlyObject10486<T>
  : T;

interface DeepReadonlyArray10486<T> extends ReadonlyArray<DeepReadonly10486<T>> {}

type DeepReadonlyObject10486<T> = {
  readonly [P in keyof T]: DeepReadonly10486<T[P]>;
};

type UnionToIntersection10486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10486<T> = UnionToIntersection10486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10486<T extends unknown[], V> = [...T, V];

type TuplifyUnion10486<T, L = LastOf10486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10486<TuplifyUnion10486<Exclude<T, L>>, L>;

type DeepPartial10486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10486<T[P]> }
  : T;

type Paths10486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10486<K, Paths10486<T[K], Prev10486[D]>> : never }[keyof T]
  : never;

type Prev10486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10486 {
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

type ConfigPaths10486 = Paths10486<NestedConfig10486>;

interface HeavyProps10486 {
  config: DeepPartial10486<NestedConfig10486>;
  path?: ConfigPaths10486;
}

const HeavyComponent10486 = memo(function HeavyComponent10486({ config }: HeavyProps10486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10486.displayName = 'HeavyComponent10486';
export default HeavyComponent10486;
