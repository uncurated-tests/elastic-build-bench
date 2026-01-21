'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12648<T> = T extends (infer U)[]
  ? DeepReadonlyArray12648<U>
  : T extends object
  ? DeepReadonlyObject12648<T>
  : T;

interface DeepReadonlyArray12648<T> extends ReadonlyArray<DeepReadonly12648<T>> {}

type DeepReadonlyObject12648<T> = {
  readonly [P in keyof T]: DeepReadonly12648<T[P]>;
};

type UnionToIntersection12648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12648<T> = UnionToIntersection12648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12648<T extends unknown[], V> = [...T, V];

type TuplifyUnion12648<T, L = LastOf12648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12648<TuplifyUnion12648<Exclude<T, L>>, L>;

type DeepPartial12648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12648<T[P]> }
  : T;

type Paths12648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12648<K, Paths12648<T[K], Prev12648[D]>> : never }[keyof T]
  : never;

type Prev12648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12648 {
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

type ConfigPaths12648 = Paths12648<NestedConfig12648>;

interface HeavyProps12648 {
  config: DeepPartial12648<NestedConfig12648>;
  path?: ConfigPaths12648;
}

const HeavyComponent12648 = memo(function HeavyComponent12648({ config }: HeavyProps12648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12648.displayName = 'HeavyComponent12648';
export default HeavyComponent12648;
