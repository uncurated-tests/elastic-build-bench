'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10247<T> = T extends (infer U)[]
  ? DeepReadonlyArray10247<U>
  : T extends object
  ? DeepReadonlyObject10247<T>
  : T;

interface DeepReadonlyArray10247<T> extends ReadonlyArray<DeepReadonly10247<T>> {}

type DeepReadonlyObject10247<T> = {
  readonly [P in keyof T]: DeepReadonly10247<T[P]>;
};

type UnionToIntersection10247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10247<T> = UnionToIntersection10247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10247<T extends unknown[], V> = [...T, V];

type TuplifyUnion10247<T, L = LastOf10247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10247<TuplifyUnion10247<Exclude<T, L>>, L>;

type DeepPartial10247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10247<T[P]> }
  : T;

type Paths10247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10247<K, Paths10247<T[K], Prev10247[D]>> : never }[keyof T]
  : never;

type Prev10247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10247 {
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

type ConfigPaths10247 = Paths10247<NestedConfig10247>;

interface HeavyProps10247 {
  config: DeepPartial10247<NestedConfig10247>;
  path?: ConfigPaths10247;
}

const HeavyComponent10247 = memo(function HeavyComponent10247({ config }: HeavyProps10247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10247.displayName = 'HeavyComponent10247';
export default HeavyComponent10247;
