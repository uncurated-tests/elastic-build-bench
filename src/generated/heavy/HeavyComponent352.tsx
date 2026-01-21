'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly352<T> = T extends (infer U)[]
  ? DeepReadonlyArray352<U>
  : T extends object
  ? DeepReadonlyObject352<T>
  : T;

interface DeepReadonlyArray352<T> extends ReadonlyArray<DeepReadonly352<T>> {}

type DeepReadonlyObject352<T> = {
  readonly [P in keyof T]: DeepReadonly352<T[P]>;
};

type UnionToIntersection352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf352<T> = UnionToIntersection352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push352<T extends unknown[], V> = [...T, V];

type TuplifyUnion352<T, L = LastOf352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push352<TuplifyUnion352<Exclude<T, L>>, L>;

type DeepPartial352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial352<T[P]> }
  : T;

type Paths352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join352<K, Paths352<T[K], Prev352[D]>> : never }[keyof T]
  : never;

type Prev352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig352 {
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

type ConfigPaths352 = Paths352<NestedConfig352>;

interface HeavyProps352 {
  config: DeepPartial352<NestedConfig352>;
  path?: ConfigPaths352;
}

const HeavyComponent352 = memo(function HeavyComponent352({ config }: HeavyProps352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent352.displayName = 'HeavyComponent352';
export default HeavyComponent352;
