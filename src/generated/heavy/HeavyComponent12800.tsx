'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12800<T> = T extends (infer U)[]
  ? DeepReadonlyArray12800<U>
  : T extends object
  ? DeepReadonlyObject12800<T>
  : T;

interface DeepReadonlyArray12800<T> extends ReadonlyArray<DeepReadonly12800<T>> {}

type DeepReadonlyObject12800<T> = {
  readonly [P in keyof T]: DeepReadonly12800<T[P]>;
};

type UnionToIntersection12800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12800<T> = UnionToIntersection12800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12800<T extends unknown[], V> = [...T, V];

type TuplifyUnion12800<T, L = LastOf12800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12800<TuplifyUnion12800<Exclude<T, L>>, L>;

type DeepPartial12800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12800<T[P]> }
  : T;

type Paths12800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12800<K, Paths12800<T[K], Prev12800[D]>> : never }[keyof T]
  : never;

type Prev12800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12800 {
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

type ConfigPaths12800 = Paths12800<NestedConfig12800>;

interface HeavyProps12800 {
  config: DeepPartial12800<NestedConfig12800>;
  path?: ConfigPaths12800;
}

const HeavyComponent12800 = memo(function HeavyComponent12800({ config }: HeavyProps12800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12800.displayName = 'HeavyComponent12800';
export default HeavyComponent12800;
