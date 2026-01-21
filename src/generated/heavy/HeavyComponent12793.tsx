'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12793<T> = T extends (infer U)[]
  ? DeepReadonlyArray12793<U>
  : T extends object
  ? DeepReadonlyObject12793<T>
  : T;

interface DeepReadonlyArray12793<T> extends ReadonlyArray<DeepReadonly12793<T>> {}

type DeepReadonlyObject12793<T> = {
  readonly [P in keyof T]: DeepReadonly12793<T[P]>;
};

type UnionToIntersection12793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12793<T> = UnionToIntersection12793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12793<T extends unknown[], V> = [...T, V];

type TuplifyUnion12793<T, L = LastOf12793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12793<TuplifyUnion12793<Exclude<T, L>>, L>;

type DeepPartial12793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12793<T[P]> }
  : T;

type Paths12793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12793<K, Paths12793<T[K], Prev12793[D]>> : never }[keyof T]
  : never;

type Prev12793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12793 {
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

type ConfigPaths12793 = Paths12793<NestedConfig12793>;

interface HeavyProps12793 {
  config: DeepPartial12793<NestedConfig12793>;
  path?: ConfigPaths12793;
}

const HeavyComponent12793 = memo(function HeavyComponent12793({ config }: HeavyProps12793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12793.displayName = 'HeavyComponent12793';
export default HeavyComponent12793;
