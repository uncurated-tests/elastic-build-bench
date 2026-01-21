'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12855<T> = T extends (infer U)[]
  ? DeepReadonlyArray12855<U>
  : T extends object
  ? DeepReadonlyObject12855<T>
  : T;

interface DeepReadonlyArray12855<T> extends ReadonlyArray<DeepReadonly12855<T>> {}

type DeepReadonlyObject12855<T> = {
  readonly [P in keyof T]: DeepReadonly12855<T[P]>;
};

type UnionToIntersection12855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12855<T> = UnionToIntersection12855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12855<T extends unknown[], V> = [...T, V];

type TuplifyUnion12855<T, L = LastOf12855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12855<TuplifyUnion12855<Exclude<T, L>>, L>;

type DeepPartial12855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12855<T[P]> }
  : T;

type Paths12855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12855<K, Paths12855<T[K], Prev12855[D]>> : never }[keyof T]
  : never;

type Prev12855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12855 {
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

type ConfigPaths12855 = Paths12855<NestedConfig12855>;

interface HeavyProps12855 {
  config: DeepPartial12855<NestedConfig12855>;
  path?: ConfigPaths12855;
}

const HeavyComponent12855 = memo(function HeavyComponent12855({ config }: HeavyProps12855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12855.displayName = 'HeavyComponent12855';
export default HeavyComponent12855;
