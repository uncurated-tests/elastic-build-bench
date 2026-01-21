'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10369<T> = T extends (infer U)[]
  ? DeepReadonlyArray10369<U>
  : T extends object
  ? DeepReadonlyObject10369<T>
  : T;

interface DeepReadonlyArray10369<T> extends ReadonlyArray<DeepReadonly10369<T>> {}

type DeepReadonlyObject10369<T> = {
  readonly [P in keyof T]: DeepReadonly10369<T[P]>;
};

type UnionToIntersection10369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10369<T> = UnionToIntersection10369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10369<T extends unknown[], V> = [...T, V];

type TuplifyUnion10369<T, L = LastOf10369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10369<TuplifyUnion10369<Exclude<T, L>>, L>;

type DeepPartial10369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10369<T[P]> }
  : T;

type Paths10369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10369<K, Paths10369<T[K], Prev10369[D]>> : never }[keyof T]
  : never;

type Prev10369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10369 {
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

type ConfigPaths10369 = Paths10369<NestedConfig10369>;

interface HeavyProps10369 {
  config: DeepPartial10369<NestedConfig10369>;
  path?: ConfigPaths10369;
}

const HeavyComponent10369 = memo(function HeavyComponent10369({ config }: HeavyProps10369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10369.displayName = 'HeavyComponent10369';
export default HeavyComponent10369;
