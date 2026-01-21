'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14811<T> = T extends (infer U)[]
  ? DeepReadonlyArray14811<U>
  : T extends object
  ? DeepReadonlyObject14811<T>
  : T;

interface DeepReadonlyArray14811<T> extends ReadonlyArray<DeepReadonly14811<T>> {}

type DeepReadonlyObject14811<T> = {
  readonly [P in keyof T]: DeepReadonly14811<T[P]>;
};

type UnionToIntersection14811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14811<T> = UnionToIntersection14811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14811<T extends unknown[], V> = [...T, V];

type TuplifyUnion14811<T, L = LastOf14811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14811<TuplifyUnion14811<Exclude<T, L>>, L>;

type DeepPartial14811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14811<T[P]> }
  : T;

type Paths14811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14811<K, Paths14811<T[K], Prev14811[D]>> : never }[keyof T]
  : never;

type Prev14811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14811 {
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

type ConfigPaths14811 = Paths14811<NestedConfig14811>;

interface HeavyProps14811 {
  config: DeepPartial14811<NestedConfig14811>;
  path?: ConfigPaths14811;
}

const HeavyComponent14811 = memo(function HeavyComponent14811({ config }: HeavyProps14811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14811.displayName = 'HeavyComponent14811';
export default HeavyComponent14811;
