'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12927<T> = T extends (infer U)[]
  ? DeepReadonlyArray12927<U>
  : T extends object
  ? DeepReadonlyObject12927<T>
  : T;

interface DeepReadonlyArray12927<T> extends ReadonlyArray<DeepReadonly12927<T>> {}

type DeepReadonlyObject12927<T> = {
  readonly [P in keyof T]: DeepReadonly12927<T[P]>;
};

type UnionToIntersection12927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12927<T> = UnionToIntersection12927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12927<T extends unknown[], V> = [...T, V];

type TuplifyUnion12927<T, L = LastOf12927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12927<TuplifyUnion12927<Exclude<T, L>>, L>;

type DeepPartial12927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12927<T[P]> }
  : T;

type Paths12927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12927<K, Paths12927<T[K], Prev12927[D]>> : never }[keyof T]
  : never;

type Prev12927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12927 {
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

type ConfigPaths12927 = Paths12927<NestedConfig12927>;

interface HeavyProps12927 {
  config: DeepPartial12927<NestedConfig12927>;
  path?: ConfigPaths12927;
}

const HeavyComponent12927 = memo(function HeavyComponent12927({ config }: HeavyProps12927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12927.displayName = 'HeavyComponent12927';
export default HeavyComponent12927;
