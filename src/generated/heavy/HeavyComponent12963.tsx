'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12963<T> = T extends (infer U)[]
  ? DeepReadonlyArray12963<U>
  : T extends object
  ? DeepReadonlyObject12963<T>
  : T;

interface DeepReadonlyArray12963<T> extends ReadonlyArray<DeepReadonly12963<T>> {}

type DeepReadonlyObject12963<T> = {
  readonly [P in keyof T]: DeepReadonly12963<T[P]>;
};

type UnionToIntersection12963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12963<T> = UnionToIntersection12963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12963<T extends unknown[], V> = [...T, V];

type TuplifyUnion12963<T, L = LastOf12963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12963<TuplifyUnion12963<Exclude<T, L>>, L>;

type DeepPartial12963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12963<T[P]> }
  : T;

type Paths12963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12963<K, Paths12963<T[K], Prev12963[D]>> : never }[keyof T]
  : never;

type Prev12963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12963 {
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

type ConfigPaths12963 = Paths12963<NestedConfig12963>;

interface HeavyProps12963 {
  config: DeepPartial12963<NestedConfig12963>;
  path?: ConfigPaths12963;
}

const HeavyComponent12963 = memo(function HeavyComponent12963({ config }: HeavyProps12963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12963.displayName = 'HeavyComponent12963';
export default HeavyComponent12963;
