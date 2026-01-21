'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly336<T> = T extends (infer U)[]
  ? DeepReadonlyArray336<U>
  : T extends object
  ? DeepReadonlyObject336<T>
  : T;

interface DeepReadonlyArray336<T> extends ReadonlyArray<DeepReadonly336<T>> {}

type DeepReadonlyObject336<T> = {
  readonly [P in keyof T]: DeepReadonly336<T[P]>;
};

type UnionToIntersection336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf336<T> = UnionToIntersection336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push336<T extends unknown[], V> = [...T, V];

type TuplifyUnion336<T, L = LastOf336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push336<TuplifyUnion336<Exclude<T, L>>, L>;

type DeepPartial336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial336<T[P]> }
  : T;

type Paths336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join336<K, Paths336<T[K], Prev336[D]>> : never }[keyof T]
  : never;

type Prev336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig336 {
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

type ConfigPaths336 = Paths336<NestedConfig336>;

interface HeavyProps336 {
  config: DeepPartial336<NestedConfig336>;
  path?: ConfigPaths336;
}

const HeavyComponent336 = memo(function HeavyComponent336({ config }: HeavyProps336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent336.displayName = 'HeavyComponent336';
export default HeavyComponent336;
