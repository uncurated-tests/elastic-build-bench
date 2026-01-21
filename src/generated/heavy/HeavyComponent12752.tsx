'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12752<T> = T extends (infer U)[]
  ? DeepReadonlyArray12752<U>
  : T extends object
  ? DeepReadonlyObject12752<T>
  : T;

interface DeepReadonlyArray12752<T> extends ReadonlyArray<DeepReadonly12752<T>> {}

type DeepReadonlyObject12752<T> = {
  readonly [P in keyof T]: DeepReadonly12752<T[P]>;
};

type UnionToIntersection12752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12752<T> = UnionToIntersection12752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12752<T extends unknown[], V> = [...T, V];

type TuplifyUnion12752<T, L = LastOf12752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12752<TuplifyUnion12752<Exclude<T, L>>, L>;

type DeepPartial12752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12752<T[P]> }
  : T;

type Paths12752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12752<K, Paths12752<T[K], Prev12752[D]>> : never }[keyof T]
  : never;

type Prev12752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12752 {
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

type ConfigPaths12752 = Paths12752<NestedConfig12752>;

interface HeavyProps12752 {
  config: DeepPartial12752<NestedConfig12752>;
  path?: ConfigPaths12752;
}

const HeavyComponent12752 = memo(function HeavyComponent12752({ config }: HeavyProps12752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12752.displayName = 'HeavyComponent12752';
export default HeavyComponent12752;
