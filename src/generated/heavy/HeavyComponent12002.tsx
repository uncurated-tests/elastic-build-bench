'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12002<T> = T extends (infer U)[]
  ? DeepReadonlyArray12002<U>
  : T extends object
  ? DeepReadonlyObject12002<T>
  : T;

interface DeepReadonlyArray12002<T> extends ReadonlyArray<DeepReadonly12002<T>> {}

type DeepReadonlyObject12002<T> = {
  readonly [P in keyof T]: DeepReadonly12002<T[P]>;
};

type UnionToIntersection12002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12002<T> = UnionToIntersection12002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12002<T extends unknown[], V> = [...T, V];

type TuplifyUnion12002<T, L = LastOf12002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12002<TuplifyUnion12002<Exclude<T, L>>, L>;

type DeepPartial12002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12002<T[P]> }
  : T;

type Paths12002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12002<K, Paths12002<T[K], Prev12002[D]>> : never }[keyof T]
  : never;

type Prev12002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12002 {
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

type ConfigPaths12002 = Paths12002<NestedConfig12002>;

interface HeavyProps12002 {
  config: DeepPartial12002<NestedConfig12002>;
  path?: ConfigPaths12002;
}

const HeavyComponent12002 = memo(function HeavyComponent12002({ config }: HeavyProps12002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12002.displayName = 'HeavyComponent12002';
export default HeavyComponent12002;
