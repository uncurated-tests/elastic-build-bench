'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12810<T> = T extends (infer U)[]
  ? DeepReadonlyArray12810<U>
  : T extends object
  ? DeepReadonlyObject12810<T>
  : T;

interface DeepReadonlyArray12810<T> extends ReadonlyArray<DeepReadonly12810<T>> {}

type DeepReadonlyObject12810<T> = {
  readonly [P in keyof T]: DeepReadonly12810<T[P]>;
};

type UnionToIntersection12810<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12810<T> = UnionToIntersection12810<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12810<T extends unknown[], V> = [...T, V];

type TuplifyUnion12810<T, L = LastOf12810<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12810<TuplifyUnion12810<Exclude<T, L>>, L>;

type DeepPartial12810<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12810<T[P]> }
  : T;

type Paths12810<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12810<K, Paths12810<T[K], Prev12810[D]>> : never }[keyof T]
  : never;

type Prev12810 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12810<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12810 {
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

type ConfigPaths12810 = Paths12810<NestedConfig12810>;

interface HeavyProps12810 {
  config: DeepPartial12810<NestedConfig12810>;
  path?: ConfigPaths12810;
}

const HeavyComponent12810 = memo(function HeavyComponent12810({ config }: HeavyProps12810) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12810) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12810 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12810: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12810.displayName = 'HeavyComponent12810';
export default HeavyComponent12810;
