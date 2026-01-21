'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10488<T> = T extends (infer U)[]
  ? DeepReadonlyArray10488<U>
  : T extends object
  ? DeepReadonlyObject10488<T>
  : T;

interface DeepReadonlyArray10488<T> extends ReadonlyArray<DeepReadonly10488<T>> {}

type DeepReadonlyObject10488<T> = {
  readonly [P in keyof T]: DeepReadonly10488<T[P]>;
};

type UnionToIntersection10488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10488<T> = UnionToIntersection10488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10488<T extends unknown[], V> = [...T, V];

type TuplifyUnion10488<T, L = LastOf10488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10488<TuplifyUnion10488<Exclude<T, L>>, L>;

type DeepPartial10488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10488<T[P]> }
  : T;

type Paths10488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10488<K, Paths10488<T[K], Prev10488[D]>> : never }[keyof T]
  : never;

type Prev10488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10488 {
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

type ConfigPaths10488 = Paths10488<NestedConfig10488>;

interface HeavyProps10488 {
  config: DeepPartial10488<NestedConfig10488>;
  path?: ConfigPaths10488;
}

const HeavyComponent10488 = memo(function HeavyComponent10488({ config }: HeavyProps10488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10488.displayName = 'HeavyComponent10488';
export default HeavyComponent10488;
