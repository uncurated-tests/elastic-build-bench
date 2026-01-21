'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12247<T> = T extends (infer U)[]
  ? DeepReadonlyArray12247<U>
  : T extends object
  ? DeepReadonlyObject12247<T>
  : T;

interface DeepReadonlyArray12247<T> extends ReadonlyArray<DeepReadonly12247<T>> {}

type DeepReadonlyObject12247<T> = {
  readonly [P in keyof T]: DeepReadonly12247<T[P]>;
};

type UnionToIntersection12247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12247<T> = UnionToIntersection12247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12247<T extends unknown[], V> = [...T, V];

type TuplifyUnion12247<T, L = LastOf12247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12247<TuplifyUnion12247<Exclude<T, L>>, L>;

type DeepPartial12247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12247<T[P]> }
  : T;

type Paths12247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12247<K, Paths12247<T[K], Prev12247[D]>> : never }[keyof T]
  : never;

type Prev12247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12247 {
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

type ConfigPaths12247 = Paths12247<NestedConfig12247>;

interface HeavyProps12247 {
  config: DeepPartial12247<NestedConfig12247>;
  path?: ConfigPaths12247;
}

const HeavyComponent12247 = memo(function HeavyComponent12247({ config }: HeavyProps12247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12247.displayName = 'HeavyComponent12247';
export default HeavyComponent12247;
