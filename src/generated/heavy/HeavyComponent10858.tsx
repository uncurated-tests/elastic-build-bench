'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10858<T> = T extends (infer U)[]
  ? DeepReadonlyArray10858<U>
  : T extends object
  ? DeepReadonlyObject10858<T>
  : T;

interface DeepReadonlyArray10858<T> extends ReadonlyArray<DeepReadonly10858<T>> {}

type DeepReadonlyObject10858<T> = {
  readonly [P in keyof T]: DeepReadonly10858<T[P]>;
};

type UnionToIntersection10858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10858<T> = UnionToIntersection10858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10858<T extends unknown[], V> = [...T, V];

type TuplifyUnion10858<T, L = LastOf10858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10858<TuplifyUnion10858<Exclude<T, L>>, L>;

type DeepPartial10858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10858<T[P]> }
  : T;

type Paths10858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10858<K, Paths10858<T[K], Prev10858[D]>> : never }[keyof T]
  : never;

type Prev10858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10858 {
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

type ConfigPaths10858 = Paths10858<NestedConfig10858>;

interface HeavyProps10858 {
  config: DeepPartial10858<NestedConfig10858>;
  path?: ConfigPaths10858;
}

const HeavyComponent10858 = memo(function HeavyComponent10858({ config }: HeavyProps10858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10858.displayName = 'HeavyComponent10858';
export default HeavyComponent10858;
