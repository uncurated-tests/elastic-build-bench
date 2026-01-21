'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10150<T> = T extends (infer U)[]
  ? DeepReadonlyArray10150<U>
  : T extends object
  ? DeepReadonlyObject10150<T>
  : T;

interface DeepReadonlyArray10150<T> extends ReadonlyArray<DeepReadonly10150<T>> {}

type DeepReadonlyObject10150<T> = {
  readonly [P in keyof T]: DeepReadonly10150<T[P]>;
};

type UnionToIntersection10150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10150<T> = UnionToIntersection10150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10150<T extends unknown[], V> = [...T, V];

type TuplifyUnion10150<T, L = LastOf10150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10150<TuplifyUnion10150<Exclude<T, L>>, L>;

type DeepPartial10150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10150<T[P]> }
  : T;

type Paths10150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10150<K, Paths10150<T[K], Prev10150[D]>> : never }[keyof T]
  : never;

type Prev10150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10150 {
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

type ConfigPaths10150 = Paths10150<NestedConfig10150>;

interface HeavyProps10150 {
  config: DeepPartial10150<NestedConfig10150>;
  path?: ConfigPaths10150;
}

const HeavyComponent10150 = memo(function HeavyComponent10150({ config }: HeavyProps10150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10150.displayName = 'HeavyComponent10150';
export default HeavyComponent10150;
