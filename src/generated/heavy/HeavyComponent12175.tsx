'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12175<T> = T extends (infer U)[]
  ? DeepReadonlyArray12175<U>
  : T extends object
  ? DeepReadonlyObject12175<T>
  : T;

interface DeepReadonlyArray12175<T> extends ReadonlyArray<DeepReadonly12175<T>> {}

type DeepReadonlyObject12175<T> = {
  readonly [P in keyof T]: DeepReadonly12175<T[P]>;
};

type UnionToIntersection12175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12175<T> = UnionToIntersection12175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12175<T extends unknown[], V> = [...T, V];

type TuplifyUnion12175<T, L = LastOf12175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12175<TuplifyUnion12175<Exclude<T, L>>, L>;

type DeepPartial12175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12175<T[P]> }
  : T;

type Paths12175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12175<K, Paths12175<T[K], Prev12175[D]>> : never }[keyof T]
  : never;

type Prev12175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12175 {
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

type ConfigPaths12175 = Paths12175<NestedConfig12175>;

interface HeavyProps12175 {
  config: DeepPartial12175<NestedConfig12175>;
  path?: ConfigPaths12175;
}

const HeavyComponent12175 = memo(function HeavyComponent12175({ config }: HeavyProps12175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12175.displayName = 'HeavyComponent12175';
export default HeavyComponent12175;
