'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12860<T> = T extends (infer U)[]
  ? DeepReadonlyArray12860<U>
  : T extends object
  ? DeepReadonlyObject12860<T>
  : T;

interface DeepReadonlyArray12860<T> extends ReadonlyArray<DeepReadonly12860<T>> {}

type DeepReadonlyObject12860<T> = {
  readonly [P in keyof T]: DeepReadonly12860<T[P]>;
};

type UnionToIntersection12860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12860<T> = UnionToIntersection12860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12860<T extends unknown[], V> = [...T, V];

type TuplifyUnion12860<T, L = LastOf12860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12860<TuplifyUnion12860<Exclude<T, L>>, L>;

type DeepPartial12860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12860<T[P]> }
  : T;

type Paths12860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12860<K, Paths12860<T[K], Prev12860[D]>> : never }[keyof T]
  : never;

type Prev12860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12860 {
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

type ConfigPaths12860 = Paths12860<NestedConfig12860>;

interface HeavyProps12860 {
  config: DeepPartial12860<NestedConfig12860>;
  path?: ConfigPaths12860;
}

const HeavyComponent12860 = memo(function HeavyComponent12860({ config }: HeavyProps12860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12860.displayName = 'HeavyComponent12860';
export default HeavyComponent12860;
