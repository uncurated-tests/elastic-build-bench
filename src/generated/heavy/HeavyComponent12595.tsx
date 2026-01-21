'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12595<T> = T extends (infer U)[]
  ? DeepReadonlyArray12595<U>
  : T extends object
  ? DeepReadonlyObject12595<T>
  : T;

interface DeepReadonlyArray12595<T> extends ReadonlyArray<DeepReadonly12595<T>> {}

type DeepReadonlyObject12595<T> = {
  readonly [P in keyof T]: DeepReadonly12595<T[P]>;
};

type UnionToIntersection12595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12595<T> = UnionToIntersection12595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12595<T extends unknown[], V> = [...T, V];

type TuplifyUnion12595<T, L = LastOf12595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12595<TuplifyUnion12595<Exclude<T, L>>, L>;

type DeepPartial12595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12595<T[P]> }
  : T;

type Paths12595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12595<K, Paths12595<T[K], Prev12595[D]>> : never }[keyof T]
  : never;

type Prev12595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12595 {
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

type ConfigPaths12595 = Paths12595<NestedConfig12595>;

interface HeavyProps12595 {
  config: DeepPartial12595<NestedConfig12595>;
  path?: ConfigPaths12595;
}

const HeavyComponent12595 = memo(function HeavyComponent12595({ config }: HeavyProps12595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12595.displayName = 'HeavyComponent12595';
export default HeavyComponent12595;
