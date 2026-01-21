'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12739<T> = T extends (infer U)[]
  ? DeepReadonlyArray12739<U>
  : T extends object
  ? DeepReadonlyObject12739<T>
  : T;

interface DeepReadonlyArray12739<T> extends ReadonlyArray<DeepReadonly12739<T>> {}

type DeepReadonlyObject12739<T> = {
  readonly [P in keyof T]: DeepReadonly12739<T[P]>;
};

type UnionToIntersection12739<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12739<T> = UnionToIntersection12739<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12739<T extends unknown[], V> = [...T, V];

type TuplifyUnion12739<T, L = LastOf12739<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12739<TuplifyUnion12739<Exclude<T, L>>, L>;

type DeepPartial12739<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12739<T[P]> }
  : T;

type Paths12739<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12739<K, Paths12739<T[K], Prev12739[D]>> : never }[keyof T]
  : never;

type Prev12739 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12739<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12739 {
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

type ConfigPaths12739 = Paths12739<NestedConfig12739>;

interface HeavyProps12739 {
  config: DeepPartial12739<NestedConfig12739>;
  path?: ConfigPaths12739;
}

const HeavyComponent12739 = memo(function HeavyComponent12739({ config }: HeavyProps12739) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12739) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12739 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12739: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12739.displayName = 'HeavyComponent12739';
export default HeavyComponent12739;
