'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12077<T> = T extends (infer U)[]
  ? DeepReadonlyArray12077<U>
  : T extends object
  ? DeepReadonlyObject12077<T>
  : T;

interface DeepReadonlyArray12077<T> extends ReadonlyArray<DeepReadonly12077<T>> {}

type DeepReadonlyObject12077<T> = {
  readonly [P in keyof T]: DeepReadonly12077<T[P]>;
};

type UnionToIntersection12077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12077<T> = UnionToIntersection12077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12077<T extends unknown[], V> = [...T, V];

type TuplifyUnion12077<T, L = LastOf12077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12077<TuplifyUnion12077<Exclude<T, L>>, L>;

type DeepPartial12077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12077<T[P]> }
  : T;

type Paths12077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12077<K, Paths12077<T[K], Prev12077[D]>> : never }[keyof T]
  : never;

type Prev12077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12077 {
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

type ConfigPaths12077 = Paths12077<NestedConfig12077>;

interface HeavyProps12077 {
  config: DeepPartial12077<NestedConfig12077>;
  path?: ConfigPaths12077;
}

const HeavyComponent12077 = memo(function HeavyComponent12077({ config }: HeavyProps12077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12077.displayName = 'HeavyComponent12077';
export default HeavyComponent12077;
