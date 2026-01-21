'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12143<T> = T extends (infer U)[]
  ? DeepReadonlyArray12143<U>
  : T extends object
  ? DeepReadonlyObject12143<T>
  : T;

interface DeepReadonlyArray12143<T> extends ReadonlyArray<DeepReadonly12143<T>> {}

type DeepReadonlyObject12143<T> = {
  readonly [P in keyof T]: DeepReadonly12143<T[P]>;
};

type UnionToIntersection12143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12143<T> = UnionToIntersection12143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12143<T extends unknown[], V> = [...T, V];

type TuplifyUnion12143<T, L = LastOf12143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12143<TuplifyUnion12143<Exclude<T, L>>, L>;

type DeepPartial12143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12143<T[P]> }
  : T;

type Paths12143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12143<K, Paths12143<T[K], Prev12143[D]>> : never }[keyof T]
  : never;

type Prev12143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12143 {
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

type ConfigPaths12143 = Paths12143<NestedConfig12143>;

interface HeavyProps12143 {
  config: DeepPartial12143<NestedConfig12143>;
  path?: ConfigPaths12143;
}

const HeavyComponent12143 = memo(function HeavyComponent12143({ config }: HeavyProps12143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12143.displayName = 'HeavyComponent12143';
export default HeavyComponent12143;
