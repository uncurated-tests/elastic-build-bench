'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12504<T> = T extends (infer U)[]
  ? DeepReadonlyArray12504<U>
  : T extends object
  ? DeepReadonlyObject12504<T>
  : T;

interface DeepReadonlyArray12504<T> extends ReadonlyArray<DeepReadonly12504<T>> {}

type DeepReadonlyObject12504<T> = {
  readonly [P in keyof T]: DeepReadonly12504<T[P]>;
};

type UnionToIntersection12504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12504<T> = UnionToIntersection12504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12504<T extends unknown[], V> = [...T, V];

type TuplifyUnion12504<T, L = LastOf12504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12504<TuplifyUnion12504<Exclude<T, L>>, L>;

type DeepPartial12504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12504<T[P]> }
  : T;

type Paths12504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12504<K, Paths12504<T[K], Prev12504[D]>> : never }[keyof T]
  : never;

type Prev12504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12504 {
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

type ConfigPaths12504 = Paths12504<NestedConfig12504>;

interface HeavyProps12504 {
  config: DeepPartial12504<NestedConfig12504>;
  path?: ConfigPaths12504;
}

const HeavyComponent12504 = memo(function HeavyComponent12504({ config }: HeavyProps12504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12504.displayName = 'HeavyComponent12504';
export default HeavyComponent12504;
