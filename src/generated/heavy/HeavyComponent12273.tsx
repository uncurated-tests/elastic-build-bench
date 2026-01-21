'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12273<T> = T extends (infer U)[]
  ? DeepReadonlyArray12273<U>
  : T extends object
  ? DeepReadonlyObject12273<T>
  : T;

interface DeepReadonlyArray12273<T> extends ReadonlyArray<DeepReadonly12273<T>> {}

type DeepReadonlyObject12273<T> = {
  readonly [P in keyof T]: DeepReadonly12273<T[P]>;
};

type UnionToIntersection12273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12273<T> = UnionToIntersection12273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12273<T extends unknown[], V> = [...T, V];

type TuplifyUnion12273<T, L = LastOf12273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12273<TuplifyUnion12273<Exclude<T, L>>, L>;

type DeepPartial12273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12273<T[P]> }
  : T;

type Paths12273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12273<K, Paths12273<T[K], Prev12273[D]>> : never }[keyof T]
  : never;

type Prev12273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12273 {
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

type ConfigPaths12273 = Paths12273<NestedConfig12273>;

interface HeavyProps12273 {
  config: DeepPartial12273<NestedConfig12273>;
  path?: ConfigPaths12273;
}

const HeavyComponent12273 = memo(function HeavyComponent12273({ config }: HeavyProps12273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12273.displayName = 'HeavyComponent12273';
export default HeavyComponent12273;
