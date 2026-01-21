'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10494<T> = T extends (infer U)[]
  ? DeepReadonlyArray10494<U>
  : T extends object
  ? DeepReadonlyObject10494<T>
  : T;

interface DeepReadonlyArray10494<T> extends ReadonlyArray<DeepReadonly10494<T>> {}

type DeepReadonlyObject10494<T> = {
  readonly [P in keyof T]: DeepReadonly10494<T[P]>;
};

type UnionToIntersection10494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10494<T> = UnionToIntersection10494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10494<T extends unknown[], V> = [...T, V];

type TuplifyUnion10494<T, L = LastOf10494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10494<TuplifyUnion10494<Exclude<T, L>>, L>;

type DeepPartial10494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10494<T[P]> }
  : T;

type Paths10494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10494<K, Paths10494<T[K], Prev10494[D]>> : never }[keyof T]
  : never;

type Prev10494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10494 {
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

type ConfigPaths10494 = Paths10494<NestedConfig10494>;

interface HeavyProps10494 {
  config: DeepPartial10494<NestedConfig10494>;
  path?: ConfigPaths10494;
}

const HeavyComponent10494 = memo(function HeavyComponent10494({ config }: HeavyProps10494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10494.displayName = 'HeavyComponent10494';
export default HeavyComponent10494;
