'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10363<T> = T extends (infer U)[]
  ? DeepReadonlyArray10363<U>
  : T extends object
  ? DeepReadonlyObject10363<T>
  : T;

interface DeepReadonlyArray10363<T> extends ReadonlyArray<DeepReadonly10363<T>> {}

type DeepReadonlyObject10363<T> = {
  readonly [P in keyof T]: DeepReadonly10363<T[P]>;
};

type UnionToIntersection10363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10363<T> = UnionToIntersection10363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10363<T extends unknown[], V> = [...T, V];

type TuplifyUnion10363<T, L = LastOf10363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10363<TuplifyUnion10363<Exclude<T, L>>, L>;

type DeepPartial10363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10363<T[P]> }
  : T;

type Paths10363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10363<K, Paths10363<T[K], Prev10363[D]>> : never }[keyof T]
  : never;

type Prev10363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10363 {
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

type ConfigPaths10363 = Paths10363<NestedConfig10363>;

interface HeavyProps10363 {
  config: DeepPartial10363<NestedConfig10363>;
  path?: ConfigPaths10363;
}

const HeavyComponent10363 = memo(function HeavyComponent10363({ config }: HeavyProps10363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10363.displayName = 'HeavyComponent10363';
export default HeavyComponent10363;
