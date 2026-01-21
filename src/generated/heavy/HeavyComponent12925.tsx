'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12925<T> = T extends (infer U)[]
  ? DeepReadonlyArray12925<U>
  : T extends object
  ? DeepReadonlyObject12925<T>
  : T;

interface DeepReadonlyArray12925<T> extends ReadonlyArray<DeepReadonly12925<T>> {}

type DeepReadonlyObject12925<T> = {
  readonly [P in keyof T]: DeepReadonly12925<T[P]>;
};

type UnionToIntersection12925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12925<T> = UnionToIntersection12925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12925<T extends unknown[], V> = [...T, V];

type TuplifyUnion12925<T, L = LastOf12925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12925<TuplifyUnion12925<Exclude<T, L>>, L>;

type DeepPartial12925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12925<T[P]> }
  : T;

type Paths12925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12925<K, Paths12925<T[K], Prev12925[D]>> : never }[keyof T]
  : never;

type Prev12925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12925 {
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

type ConfigPaths12925 = Paths12925<NestedConfig12925>;

interface HeavyProps12925 {
  config: DeepPartial12925<NestedConfig12925>;
  path?: ConfigPaths12925;
}

const HeavyComponent12925 = memo(function HeavyComponent12925({ config }: HeavyProps12925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12925.displayName = 'HeavyComponent12925';
export default HeavyComponent12925;
