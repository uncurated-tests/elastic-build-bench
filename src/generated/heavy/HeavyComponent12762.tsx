'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12762<T> = T extends (infer U)[]
  ? DeepReadonlyArray12762<U>
  : T extends object
  ? DeepReadonlyObject12762<T>
  : T;

interface DeepReadonlyArray12762<T> extends ReadonlyArray<DeepReadonly12762<T>> {}

type DeepReadonlyObject12762<T> = {
  readonly [P in keyof T]: DeepReadonly12762<T[P]>;
};

type UnionToIntersection12762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12762<T> = UnionToIntersection12762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12762<T extends unknown[], V> = [...T, V];

type TuplifyUnion12762<T, L = LastOf12762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12762<TuplifyUnion12762<Exclude<T, L>>, L>;

type DeepPartial12762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12762<T[P]> }
  : T;

type Paths12762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12762<K, Paths12762<T[K], Prev12762[D]>> : never }[keyof T]
  : never;

type Prev12762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12762 {
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

type ConfigPaths12762 = Paths12762<NestedConfig12762>;

interface HeavyProps12762 {
  config: DeepPartial12762<NestedConfig12762>;
  path?: ConfigPaths12762;
}

const HeavyComponent12762 = memo(function HeavyComponent12762({ config }: HeavyProps12762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12762.displayName = 'HeavyComponent12762';
export default HeavyComponent12762;
