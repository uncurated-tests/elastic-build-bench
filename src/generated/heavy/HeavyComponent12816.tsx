'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12816<T> = T extends (infer U)[]
  ? DeepReadonlyArray12816<U>
  : T extends object
  ? DeepReadonlyObject12816<T>
  : T;

interface DeepReadonlyArray12816<T> extends ReadonlyArray<DeepReadonly12816<T>> {}

type DeepReadonlyObject12816<T> = {
  readonly [P in keyof T]: DeepReadonly12816<T[P]>;
};

type UnionToIntersection12816<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12816<T> = UnionToIntersection12816<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12816<T extends unknown[], V> = [...T, V];

type TuplifyUnion12816<T, L = LastOf12816<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12816<TuplifyUnion12816<Exclude<T, L>>, L>;

type DeepPartial12816<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12816<T[P]> }
  : T;

type Paths12816<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12816<K, Paths12816<T[K], Prev12816[D]>> : never }[keyof T]
  : never;

type Prev12816 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12816<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12816 {
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

type ConfigPaths12816 = Paths12816<NestedConfig12816>;

interface HeavyProps12816 {
  config: DeepPartial12816<NestedConfig12816>;
  path?: ConfigPaths12816;
}

const HeavyComponent12816 = memo(function HeavyComponent12816({ config }: HeavyProps12816) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12816) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12816 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12816: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12816.displayName = 'HeavyComponent12816';
export default HeavyComponent12816;
