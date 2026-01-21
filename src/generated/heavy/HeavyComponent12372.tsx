'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12372<T> = T extends (infer U)[]
  ? DeepReadonlyArray12372<U>
  : T extends object
  ? DeepReadonlyObject12372<T>
  : T;

interface DeepReadonlyArray12372<T> extends ReadonlyArray<DeepReadonly12372<T>> {}

type DeepReadonlyObject12372<T> = {
  readonly [P in keyof T]: DeepReadonly12372<T[P]>;
};

type UnionToIntersection12372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12372<T> = UnionToIntersection12372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12372<T extends unknown[], V> = [...T, V];

type TuplifyUnion12372<T, L = LastOf12372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12372<TuplifyUnion12372<Exclude<T, L>>, L>;

type DeepPartial12372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12372<T[P]> }
  : T;

type Paths12372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12372<K, Paths12372<T[K], Prev12372[D]>> : never }[keyof T]
  : never;

type Prev12372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12372 {
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

type ConfigPaths12372 = Paths12372<NestedConfig12372>;

interface HeavyProps12372 {
  config: DeepPartial12372<NestedConfig12372>;
  path?: ConfigPaths12372;
}

const HeavyComponent12372 = memo(function HeavyComponent12372({ config }: HeavyProps12372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12372.displayName = 'HeavyComponent12372';
export default HeavyComponent12372;
