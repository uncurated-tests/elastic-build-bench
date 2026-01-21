'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10865<T> = T extends (infer U)[]
  ? DeepReadonlyArray10865<U>
  : T extends object
  ? DeepReadonlyObject10865<T>
  : T;

interface DeepReadonlyArray10865<T> extends ReadonlyArray<DeepReadonly10865<T>> {}

type DeepReadonlyObject10865<T> = {
  readonly [P in keyof T]: DeepReadonly10865<T[P]>;
};

type UnionToIntersection10865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10865<T> = UnionToIntersection10865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10865<T extends unknown[], V> = [...T, V];

type TuplifyUnion10865<T, L = LastOf10865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10865<TuplifyUnion10865<Exclude<T, L>>, L>;

type DeepPartial10865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10865<T[P]> }
  : T;

type Paths10865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10865<K, Paths10865<T[K], Prev10865[D]>> : never }[keyof T]
  : never;

type Prev10865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10865 {
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

type ConfigPaths10865 = Paths10865<NestedConfig10865>;

interface HeavyProps10865 {
  config: DeepPartial10865<NestedConfig10865>;
  path?: ConfigPaths10865;
}

const HeavyComponent10865 = memo(function HeavyComponent10865({ config }: HeavyProps10865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10865.displayName = 'HeavyComponent10865';
export default HeavyComponent10865;
