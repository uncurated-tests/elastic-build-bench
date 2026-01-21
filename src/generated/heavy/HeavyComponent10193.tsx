'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10193<T> = T extends (infer U)[]
  ? DeepReadonlyArray10193<U>
  : T extends object
  ? DeepReadonlyObject10193<T>
  : T;

interface DeepReadonlyArray10193<T> extends ReadonlyArray<DeepReadonly10193<T>> {}

type DeepReadonlyObject10193<T> = {
  readonly [P in keyof T]: DeepReadonly10193<T[P]>;
};

type UnionToIntersection10193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10193<T> = UnionToIntersection10193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10193<T extends unknown[], V> = [...T, V];

type TuplifyUnion10193<T, L = LastOf10193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10193<TuplifyUnion10193<Exclude<T, L>>, L>;

type DeepPartial10193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10193<T[P]> }
  : T;

type Paths10193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10193<K, Paths10193<T[K], Prev10193[D]>> : never }[keyof T]
  : never;

type Prev10193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10193 {
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

type ConfigPaths10193 = Paths10193<NestedConfig10193>;

interface HeavyProps10193 {
  config: DeepPartial10193<NestedConfig10193>;
  path?: ConfigPaths10193;
}

const HeavyComponent10193 = memo(function HeavyComponent10193({ config }: HeavyProps10193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10193.displayName = 'HeavyComponent10193';
export default HeavyComponent10193;
