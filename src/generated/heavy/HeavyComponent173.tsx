'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly173<T> = T extends (infer U)[]
  ? DeepReadonlyArray173<U>
  : T extends object
  ? DeepReadonlyObject173<T>
  : T;

interface DeepReadonlyArray173<T> extends ReadonlyArray<DeepReadonly173<T>> {}

type DeepReadonlyObject173<T> = {
  readonly [P in keyof T]: DeepReadonly173<T[P]>;
};

type UnionToIntersection173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf173<T> = UnionToIntersection173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push173<T extends unknown[], V> = [...T, V];

type TuplifyUnion173<T, L = LastOf173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push173<TuplifyUnion173<Exclude<T, L>>, L>;

type DeepPartial173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial173<T[P]> }
  : T;

type Paths173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join173<K, Paths173<T[K], Prev173[D]>> : never }[keyof T]
  : never;

type Prev173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig173 {
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

type ConfigPaths173 = Paths173<NestedConfig173>;

interface HeavyProps173 {
  config: DeepPartial173<NestedConfig173>;
  path?: ConfigPaths173;
}

const HeavyComponent173 = memo(function HeavyComponent173({ config }: HeavyProps173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent173.displayName = 'HeavyComponent173';
export default HeavyComponent173;
