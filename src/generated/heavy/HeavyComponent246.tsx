'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly246<T> = T extends (infer U)[]
  ? DeepReadonlyArray246<U>
  : T extends object
  ? DeepReadonlyObject246<T>
  : T;

interface DeepReadonlyArray246<T> extends ReadonlyArray<DeepReadonly246<T>> {}

type DeepReadonlyObject246<T> = {
  readonly [P in keyof T]: DeepReadonly246<T[P]>;
};

type UnionToIntersection246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf246<T> = UnionToIntersection246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push246<T extends unknown[], V> = [...T, V];

type TuplifyUnion246<T, L = LastOf246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push246<TuplifyUnion246<Exclude<T, L>>, L>;

type DeepPartial246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial246<T[P]> }
  : T;

type Paths246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join246<K, Paths246<T[K], Prev246[D]>> : never }[keyof T]
  : never;

type Prev246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig246 {
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

type ConfigPaths246 = Paths246<NestedConfig246>;

interface HeavyProps246 {
  config: DeepPartial246<NestedConfig246>;
  path?: ConfigPaths246;
}

const HeavyComponent246 = memo(function HeavyComponent246({ config }: HeavyProps246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent246.displayName = 'HeavyComponent246';
export default HeavyComponent246;
