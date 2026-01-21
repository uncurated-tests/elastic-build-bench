'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12153<T> = T extends (infer U)[]
  ? DeepReadonlyArray12153<U>
  : T extends object
  ? DeepReadonlyObject12153<T>
  : T;

interface DeepReadonlyArray12153<T> extends ReadonlyArray<DeepReadonly12153<T>> {}

type DeepReadonlyObject12153<T> = {
  readonly [P in keyof T]: DeepReadonly12153<T[P]>;
};

type UnionToIntersection12153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12153<T> = UnionToIntersection12153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12153<T extends unknown[], V> = [...T, V];

type TuplifyUnion12153<T, L = LastOf12153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12153<TuplifyUnion12153<Exclude<T, L>>, L>;

type DeepPartial12153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12153<T[P]> }
  : T;

type Paths12153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12153<K, Paths12153<T[K], Prev12153[D]>> : never }[keyof T]
  : never;

type Prev12153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12153 {
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

type ConfigPaths12153 = Paths12153<NestedConfig12153>;

interface HeavyProps12153 {
  config: DeepPartial12153<NestedConfig12153>;
  path?: ConfigPaths12153;
}

const HeavyComponent12153 = memo(function HeavyComponent12153({ config }: HeavyProps12153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12153.displayName = 'HeavyComponent12153';
export default HeavyComponent12153;
