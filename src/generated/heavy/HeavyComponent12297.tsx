'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12297<T> = T extends (infer U)[]
  ? DeepReadonlyArray12297<U>
  : T extends object
  ? DeepReadonlyObject12297<T>
  : T;

interface DeepReadonlyArray12297<T> extends ReadonlyArray<DeepReadonly12297<T>> {}

type DeepReadonlyObject12297<T> = {
  readonly [P in keyof T]: DeepReadonly12297<T[P]>;
};

type UnionToIntersection12297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12297<T> = UnionToIntersection12297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12297<T extends unknown[], V> = [...T, V];

type TuplifyUnion12297<T, L = LastOf12297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12297<TuplifyUnion12297<Exclude<T, L>>, L>;

type DeepPartial12297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12297<T[P]> }
  : T;

type Paths12297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12297<K, Paths12297<T[K], Prev12297[D]>> : never }[keyof T]
  : never;

type Prev12297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12297 {
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

type ConfigPaths12297 = Paths12297<NestedConfig12297>;

interface HeavyProps12297 {
  config: DeepPartial12297<NestedConfig12297>;
  path?: ConfigPaths12297;
}

const HeavyComponent12297 = memo(function HeavyComponent12297({ config }: HeavyProps12297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12297.displayName = 'HeavyComponent12297';
export default HeavyComponent12297;
