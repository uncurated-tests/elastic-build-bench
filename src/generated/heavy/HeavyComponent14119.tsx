'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14119<T> = T extends (infer U)[]
  ? DeepReadonlyArray14119<U>
  : T extends object
  ? DeepReadonlyObject14119<T>
  : T;

interface DeepReadonlyArray14119<T> extends ReadonlyArray<DeepReadonly14119<T>> {}

type DeepReadonlyObject14119<T> = {
  readonly [P in keyof T]: DeepReadonly14119<T[P]>;
};

type UnionToIntersection14119<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14119<T> = UnionToIntersection14119<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14119<T extends unknown[], V> = [...T, V];

type TuplifyUnion14119<T, L = LastOf14119<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14119<TuplifyUnion14119<Exclude<T, L>>, L>;

type DeepPartial14119<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14119<T[P]> }
  : T;

type Paths14119<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14119<K, Paths14119<T[K], Prev14119[D]>> : never }[keyof T]
  : never;

type Prev14119 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14119<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14119 {
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

type ConfigPaths14119 = Paths14119<NestedConfig14119>;

interface HeavyProps14119 {
  config: DeepPartial14119<NestedConfig14119>;
  path?: ConfigPaths14119;
}

const HeavyComponent14119 = memo(function HeavyComponent14119({ config }: HeavyProps14119) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14119) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14119 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14119: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14119.displayName = 'HeavyComponent14119';
export default HeavyComponent14119;
