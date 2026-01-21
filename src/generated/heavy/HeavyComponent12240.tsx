'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12240<T> = T extends (infer U)[]
  ? DeepReadonlyArray12240<U>
  : T extends object
  ? DeepReadonlyObject12240<T>
  : T;

interface DeepReadonlyArray12240<T> extends ReadonlyArray<DeepReadonly12240<T>> {}

type DeepReadonlyObject12240<T> = {
  readonly [P in keyof T]: DeepReadonly12240<T[P]>;
};

type UnionToIntersection12240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12240<T> = UnionToIntersection12240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12240<T extends unknown[], V> = [...T, V];

type TuplifyUnion12240<T, L = LastOf12240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12240<TuplifyUnion12240<Exclude<T, L>>, L>;

type DeepPartial12240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12240<T[P]> }
  : T;

type Paths12240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12240<K, Paths12240<T[K], Prev12240[D]>> : never }[keyof T]
  : never;

type Prev12240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12240 {
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

type ConfigPaths12240 = Paths12240<NestedConfig12240>;

interface HeavyProps12240 {
  config: DeepPartial12240<NestedConfig12240>;
  path?: ConfigPaths12240;
}

const HeavyComponent12240 = memo(function HeavyComponent12240({ config }: HeavyProps12240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12240.displayName = 'HeavyComponent12240';
export default HeavyComponent12240;
