'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10309<T> = T extends (infer U)[]
  ? DeepReadonlyArray10309<U>
  : T extends object
  ? DeepReadonlyObject10309<T>
  : T;

interface DeepReadonlyArray10309<T> extends ReadonlyArray<DeepReadonly10309<T>> {}

type DeepReadonlyObject10309<T> = {
  readonly [P in keyof T]: DeepReadonly10309<T[P]>;
};

type UnionToIntersection10309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10309<T> = UnionToIntersection10309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10309<T extends unknown[], V> = [...T, V];

type TuplifyUnion10309<T, L = LastOf10309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10309<TuplifyUnion10309<Exclude<T, L>>, L>;

type DeepPartial10309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10309<T[P]> }
  : T;

type Paths10309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10309<K, Paths10309<T[K], Prev10309[D]>> : never }[keyof T]
  : never;

type Prev10309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10309 {
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

type ConfigPaths10309 = Paths10309<NestedConfig10309>;

interface HeavyProps10309 {
  config: DeepPartial10309<NestedConfig10309>;
  path?: ConfigPaths10309;
}

const HeavyComponent10309 = memo(function HeavyComponent10309({ config }: HeavyProps10309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10309.displayName = 'HeavyComponent10309';
export default HeavyComponent10309;
