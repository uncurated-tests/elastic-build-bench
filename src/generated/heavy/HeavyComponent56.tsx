'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly56<T> = T extends (infer U)[]
  ? DeepReadonlyArray56<U>
  : T extends object
  ? DeepReadonlyObject56<T>
  : T;

interface DeepReadonlyArray56<T> extends ReadonlyArray<DeepReadonly56<T>> {}

type DeepReadonlyObject56<T> = {
  readonly [P in keyof T]: DeepReadonly56<T[P]>;
};

type UnionToIntersection56<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf56<T> = UnionToIntersection56<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push56<T extends unknown[], V> = [...T, V];

type TuplifyUnion56<T, L = LastOf56<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push56<TuplifyUnion56<Exclude<T, L>>, L>;

type DeepPartial56<T> = T extends object
  ? { [P in keyof T]?: DeepPartial56<T[P]> }
  : T;

type Paths56<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join56<K, Paths56<T[K], Prev56[D]>> : never }[keyof T]
  : never;

type Prev56 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join56<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig56 {
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

type ConfigPaths56 = Paths56<NestedConfig56>;

interface HeavyProps56 {
  config: DeepPartial56<NestedConfig56>;
  path?: ConfigPaths56;
}

const HeavyComponent56 = memo(function HeavyComponent56({ config }: HeavyProps56) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 56) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-56 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H56: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent56.displayName = 'HeavyComponent56';
export default HeavyComponent56;
