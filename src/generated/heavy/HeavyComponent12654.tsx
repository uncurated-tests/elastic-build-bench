'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12654<T> = T extends (infer U)[]
  ? DeepReadonlyArray12654<U>
  : T extends object
  ? DeepReadonlyObject12654<T>
  : T;

interface DeepReadonlyArray12654<T> extends ReadonlyArray<DeepReadonly12654<T>> {}

type DeepReadonlyObject12654<T> = {
  readonly [P in keyof T]: DeepReadonly12654<T[P]>;
};

type UnionToIntersection12654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12654<T> = UnionToIntersection12654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12654<T extends unknown[], V> = [...T, V];

type TuplifyUnion12654<T, L = LastOf12654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12654<TuplifyUnion12654<Exclude<T, L>>, L>;

type DeepPartial12654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12654<T[P]> }
  : T;

type Paths12654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12654<K, Paths12654<T[K], Prev12654[D]>> : never }[keyof T]
  : never;

type Prev12654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12654 {
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

type ConfigPaths12654 = Paths12654<NestedConfig12654>;

interface HeavyProps12654 {
  config: DeepPartial12654<NestedConfig12654>;
  path?: ConfigPaths12654;
}

const HeavyComponent12654 = memo(function HeavyComponent12654({ config }: HeavyProps12654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12654.displayName = 'HeavyComponent12654';
export default HeavyComponent12654;
