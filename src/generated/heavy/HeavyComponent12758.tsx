'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12758<T> = T extends (infer U)[]
  ? DeepReadonlyArray12758<U>
  : T extends object
  ? DeepReadonlyObject12758<T>
  : T;

interface DeepReadonlyArray12758<T> extends ReadonlyArray<DeepReadonly12758<T>> {}

type DeepReadonlyObject12758<T> = {
  readonly [P in keyof T]: DeepReadonly12758<T[P]>;
};

type UnionToIntersection12758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12758<T> = UnionToIntersection12758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12758<T extends unknown[], V> = [...T, V];

type TuplifyUnion12758<T, L = LastOf12758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12758<TuplifyUnion12758<Exclude<T, L>>, L>;

type DeepPartial12758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12758<T[P]> }
  : T;

type Paths12758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12758<K, Paths12758<T[K], Prev12758[D]>> : never }[keyof T]
  : never;

type Prev12758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12758 {
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

type ConfigPaths12758 = Paths12758<NestedConfig12758>;

interface HeavyProps12758 {
  config: DeepPartial12758<NestedConfig12758>;
  path?: ConfigPaths12758;
}

const HeavyComponent12758 = memo(function HeavyComponent12758({ config }: HeavyProps12758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12758.displayName = 'HeavyComponent12758';
export default HeavyComponent12758;
