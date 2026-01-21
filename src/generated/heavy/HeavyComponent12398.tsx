'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12398<T> = T extends (infer U)[]
  ? DeepReadonlyArray12398<U>
  : T extends object
  ? DeepReadonlyObject12398<T>
  : T;

interface DeepReadonlyArray12398<T> extends ReadonlyArray<DeepReadonly12398<T>> {}

type DeepReadonlyObject12398<T> = {
  readonly [P in keyof T]: DeepReadonly12398<T[P]>;
};

type UnionToIntersection12398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12398<T> = UnionToIntersection12398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12398<T extends unknown[], V> = [...T, V];

type TuplifyUnion12398<T, L = LastOf12398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12398<TuplifyUnion12398<Exclude<T, L>>, L>;

type DeepPartial12398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12398<T[P]> }
  : T;

type Paths12398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12398<K, Paths12398<T[K], Prev12398[D]>> : never }[keyof T]
  : never;

type Prev12398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12398 {
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

type ConfigPaths12398 = Paths12398<NestedConfig12398>;

interface HeavyProps12398 {
  config: DeepPartial12398<NestedConfig12398>;
  path?: ConfigPaths12398;
}

const HeavyComponent12398 = memo(function HeavyComponent12398({ config }: HeavyProps12398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12398.displayName = 'HeavyComponent12398';
export default HeavyComponent12398;
