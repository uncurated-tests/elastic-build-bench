'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12756<T> = T extends (infer U)[]
  ? DeepReadonlyArray12756<U>
  : T extends object
  ? DeepReadonlyObject12756<T>
  : T;

interface DeepReadonlyArray12756<T> extends ReadonlyArray<DeepReadonly12756<T>> {}

type DeepReadonlyObject12756<T> = {
  readonly [P in keyof T]: DeepReadonly12756<T[P]>;
};

type UnionToIntersection12756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12756<T> = UnionToIntersection12756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12756<T extends unknown[], V> = [...T, V];

type TuplifyUnion12756<T, L = LastOf12756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12756<TuplifyUnion12756<Exclude<T, L>>, L>;

type DeepPartial12756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12756<T[P]> }
  : T;

type Paths12756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12756<K, Paths12756<T[K], Prev12756[D]>> : never }[keyof T]
  : never;

type Prev12756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12756 {
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

type ConfigPaths12756 = Paths12756<NestedConfig12756>;

interface HeavyProps12756 {
  config: DeepPartial12756<NestedConfig12756>;
  path?: ConfigPaths12756;
}

const HeavyComponent12756 = memo(function HeavyComponent12756({ config }: HeavyProps12756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12756.displayName = 'HeavyComponent12756';
export default HeavyComponent12756;
