'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12856<T> = T extends (infer U)[]
  ? DeepReadonlyArray12856<U>
  : T extends object
  ? DeepReadonlyObject12856<T>
  : T;

interface DeepReadonlyArray12856<T> extends ReadonlyArray<DeepReadonly12856<T>> {}

type DeepReadonlyObject12856<T> = {
  readonly [P in keyof T]: DeepReadonly12856<T[P]>;
};

type UnionToIntersection12856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12856<T> = UnionToIntersection12856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12856<T extends unknown[], V> = [...T, V];

type TuplifyUnion12856<T, L = LastOf12856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12856<TuplifyUnion12856<Exclude<T, L>>, L>;

type DeepPartial12856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12856<T[P]> }
  : T;

type Paths12856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12856<K, Paths12856<T[K], Prev12856[D]>> : never }[keyof T]
  : never;

type Prev12856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12856 {
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

type ConfigPaths12856 = Paths12856<NestedConfig12856>;

interface HeavyProps12856 {
  config: DeepPartial12856<NestedConfig12856>;
  path?: ConfigPaths12856;
}

const HeavyComponent12856 = memo(function HeavyComponent12856({ config }: HeavyProps12856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12856.displayName = 'HeavyComponent12856';
export default HeavyComponent12856;
