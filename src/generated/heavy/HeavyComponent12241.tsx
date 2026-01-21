'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12241<T> = T extends (infer U)[]
  ? DeepReadonlyArray12241<U>
  : T extends object
  ? DeepReadonlyObject12241<T>
  : T;

interface DeepReadonlyArray12241<T> extends ReadonlyArray<DeepReadonly12241<T>> {}

type DeepReadonlyObject12241<T> = {
  readonly [P in keyof T]: DeepReadonly12241<T[P]>;
};

type UnionToIntersection12241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12241<T> = UnionToIntersection12241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12241<T extends unknown[], V> = [...T, V];

type TuplifyUnion12241<T, L = LastOf12241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12241<TuplifyUnion12241<Exclude<T, L>>, L>;

type DeepPartial12241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12241<T[P]> }
  : T;

type Paths12241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12241<K, Paths12241<T[K], Prev12241[D]>> : never }[keyof T]
  : never;

type Prev12241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12241 {
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

type ConfigPaths12241 = Paths12241<NestedConfig12241>;

interface HeavyProps12241 {
  config: DeepPartial12241<NestedConfig12241>;
  path?: ConfigPaths12241;
}

const HeavyComponent12241 = memo(function HeavyComponent12241({ config }: HeavyProps12241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12241.displayName = 'HeavyComponent12241';
export default HeavyComponent12241;
