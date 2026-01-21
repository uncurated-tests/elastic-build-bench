'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12740<T> = T extends (infer U)[]
  ? DeepReadonlyArray12740<U>
  : T extends object
  ? DeepReadonlyObject12740<T>
  : T;

interface DeepReadonlyArray12740<T> extends ReadonlyArray<DeepReadonly12740<T>> {}

type DeepReadonlyObject12740<T> = {
  readonly [P in keyof T]: DeepReadonly12740<T[P]>;
};

type UnionToIntersection12740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12740<T> = UnionToIntersection12740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12740<T extends unknown[], V> = [...T, V];

type TuplifyUnion12740<T, L = LastOf12740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12740<TuplifyUnion12740<Exclude<T, L>>, L>;

type DeepPartial12740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12740<T[P]> }
  : T;

type Paths12740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12740<K, Paths12740<T[K], Prev12740[D]>> : never }[keyof T]
  : never;

type Prev12740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12740 {
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

type ConfigPaths12740 = Paths12740<NestedConfig12740>;

interface HeavyProps12740 {
  config: DeepPartial12740<NestedConfig12740>;
  path?: ConfigPaths12740;
}

const HeavyComponent12740 = memo(function HeavyComponent12740({ config }: HeavyProps12740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12740.displayName = 'HeavyComponent12740';
export default HeavyComponent12740;
