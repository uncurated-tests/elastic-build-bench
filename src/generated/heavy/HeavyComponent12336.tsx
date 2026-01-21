'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12336<T> = T extends (infer U)[]
  ? DeepReadonlyArray12336<U>
  : T extends object
  ? DeepReadonlyObject12336<T>
  : T;

interface DeepReadonlyArray12336<T> extends ReadonlyArray<DeepReadonly12336<T>> {}

type DeepReadonlyObject12336<T> = {
  readonly [P in keyof T]: DeepReadonly12336<T[P]>;
};

type UnionToIntersection12336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12336<T> = UnionToIntersection12336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12336<T extends unknown[], V> = [...T, V];

type TuplifyUnion12336<T, L = LastOf12336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12336<TuplifyUnion12336<Exclude<T, L>>, L>;

type DeepPartial12336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12336<T[P]> }
  : T;

type Paths12336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12336<K, Paths12336<T[K], Prev12336[D]>> : never }[keyof T]
  : never;

type Prev12336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12336 {
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

type ConfigPaths12336 = Paths12336<NestedConfig12336>;

interface HeavyProps12336 {
  config: DeepPartial12336<NestedConfig12336>;
  path?: ConfigPaths12336;
}

const HeavyComponent12336 = memo(function HeavyComponent12336({ config }: HeavyProps12336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12336.displayName = 'HeavyComponent12336';
export default HeavyComponent12336;
