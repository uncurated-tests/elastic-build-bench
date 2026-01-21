'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14914<T> = T extends (infer U)[]
  ? DeepReadonlyArray14914<U>
  : T extends object
  ? DeepReadonlyObject14914<T>
  : T;

interface DeepReadonlyArray14914<T> extends ReadonlyArray<DeepReadonly14914<T>> {}

type DeepReadonlyObject14914<T> = {
  readonly [P in keyof T]: DeepReadonly14914<T[P]>;
};

type UnionToIntersection14914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14914<T> = UnionToIntersection14914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14914<T extends unknown[], V> = [...T, V];

type TuplifyUnion14914<T, L = LastOf14914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14914<TuplifyUnion14914<Exclude<T, L>>, L>;

type DeepPartial14914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14914<T[P]> }
  : T;

type Paths14914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14914<K, Paths14914<T[K], Prev14914[D]>> : never }[keyof T]
  : never;

type Prev14914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14914 {
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

type ConfigPaths14914 = Paths14914<NestedConfig14914>;

interface HeavyProps14914 {
  config: DeepPartial14914<NestedConfig14914>;
  path?: ConfigPaths14914;
}

const HeavyComponent14914 = memo(function HeavyComponent14914({ config }: HeavyProps14914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14914.displayName = 'HeavyComponent14914';
export default HeavyComponent14914;
