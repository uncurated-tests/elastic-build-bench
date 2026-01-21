'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12294<T> = T extends (infer U)[]
  ? DeepReadonlyArray12294<U>
  : T extends object
  ? DeepReadonlyObject12294<T>
  : T;

interface DeepReadonlyArray12294<T> extends ReadonlyArray<DeepReadonly12294<T>> {}

type DeepReadonlyObject12294<T> = {
  readonly [P in keyof T]: DeepReadonly12294<T[P]>;
};

type UnionToIntersection12294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12294<T> = UnionToIntersection12294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12294<T extends unknown[], V> = [...T, V];

type TuplifyUnion12294<T, L = LastOf12294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12294<TuplifyUnion12294<Exclude<T, L>>, L>;

type DeepPartial12294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12294<T[P]> }
  : T;

type Paths12294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12294<K, Paths12294<T[K], Prev12294[D]>> : never }[keyof T]
  : never;

type Prev12294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12294 {
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

type ConfigPaths12294 = Paths12294<NestedConfig12294>;

interface HeavyProps12294 {
  config: DeepPartial12294<NestedConfig12294>;
  path?: ConfigPaths12294;
}

const HeavyComponent12294 = memo(function HeavyComponent12294({ config }: HeavyProps12294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12294.displayName = 'HeavyComponent12294';
export default HeavyComponent12294;
