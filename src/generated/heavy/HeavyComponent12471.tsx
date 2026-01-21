'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12471<T> = T extends (infer U)[]
  ? DeepReadonlyArray12471<U>
  : T extends object
  ? DeepReadonlyObject12471<T>
  : T;

interface DeepReadonlyArray12471<T> extends ReadonlyArray<DeepReadonly12471<T>> {}

type DeepReadonlyObject12471<T> = {
  readonly [P in keyof T]: DeepReadonly12471<T[P]>;
};

type UnionToIntersection12471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12471<T> = UnionToIntersection12471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12471<T extends unknown[], V> = [...T, V];

type TuplifyUnion12471<T, L = LastOf12471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12471<TuplifyUnion12471<Exclude<T, L>>, L>;

type DeepPartial12471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12471<T[P]> }
  : T;

type Paths12471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12471<K, Paths12471<T[K], Prev12471[D]>> : never }[keyof T]
  : never;

type Prev12471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12471 {
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

type ConfigPaths12471 = Paths12471<NestedConfig12471>;

interface HeavyProps12471 {
  config: DeepPartial12471<NestedConfig12471>;
  path?: ConfigPaths12471;
}

const HeavyComponent12471 = memo(function HeavyComponent12471({ config }: HeavyProps12471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12471.displayName = 'HeavyComponent12471';
export default HeavyComponent12471;
