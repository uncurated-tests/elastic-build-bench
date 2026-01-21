'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12911<T> = T extends (infer U)[]
  ? DeepReadonlyArray12911<U>
  : T extends object
  ? DeepReadonlyObject12911<T>
  : T;

interface DeepReadonlyArray12911<T> extends ReadonlyArray<DeepReadonly12911<T>> {}

type DeepReadonlyObject12911<T> = {
  readonly [P in keyof T]: DeepReadonly12911<T[P]>;
};

type UnionToIntersection12911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12911<T> = UnionToIntersection12911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12911<T extends unknown[], V> = [...T, V];

type TuplifyUnion12911<T, L = LastOf12911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12911<TuplifyUnion12911<Exclude<T, L>>, L>;

type DeepPartial12911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12911<T[P]> }
  : T;

type Paths12911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12911<K, Paths12911<T[K], Prev12911[D]>> : never }[keyof T]
  : never;

type Prev12911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12911 {
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

type ConfigPaths12911 = Paths12911<NestedConfig12911>;

interface HeavyProps12911 {
  config: DeepPartial12911<NestedConfig12911>;
  path?: ConfigPaths12911;
}

const HeavyComponent12911 = memo(function HeavyComponent12911({ config }: HeavyProps12911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12911.displayName = 'HeavyComponent12911';
export default HeavyComponent12911;
