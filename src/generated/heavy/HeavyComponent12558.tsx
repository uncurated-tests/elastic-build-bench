'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12558<T> = T extends (infer U)[]
  ? DeepReadonlyArray12558<U>
  : T extends object
  ? DeepReadonlyObject12558<T>
  : T;

interface DeepReadonlyArray12558<T> extends ReadonlyArray<DeepReadonly12558<T>> {}

type DeepReadonlyObject12558<T> = {
  readonly [P in keyof T]: DeepReadonly12558<T[P]>;
};

type UnionToIntersection12558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12558<T> = UnionToIntersection12558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12558<T extends unknown[], V> = [...T, V];

type TuplifyUnion12558<T, L = LastOf12558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12558<TuplifyUnion12558<Exclude<T, L>>, L>;

type DeepPartial12558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12558<T[P]> }
  : T;

type Paths12558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12558<K, Paths12558<T[K], Prev12558[D]>> : never }[keyof T]
  : never;

type Prev12558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12558 {
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

type ConfigPaths12558 = Paths12558<NestedConfig12558>;

interface HeavyProps12558 {
  config: DeepPartial12558<NestedConfig12558>;
  path?: ConfigPaths12558;
}

const HeavyComponent12558 = memo(function HeavyComponent12558({ config }: HeavyProps12558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12558.displayName = 'HeavyComponent12558';
export default HeavyComponent12558;
