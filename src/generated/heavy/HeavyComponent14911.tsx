'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14911<T> = T extends (infer U)[]
  ? DeepReadonlyArray14911<U>
  : T extends object
  ? DeepReadonlyObject14911<T>
  : T;

interface DeepReadonlyArray14911<T> extends ReadonlyArray<DeepReadonly14911<T>> {}

type DeepReadonlyObject14911<T> = {
  readonly [P in keyof T]: DeepReadonly14911<T[P]>;
};

type UnionToIntersection14911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14911<T> = UnionToIntersection14911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14911<T extends unknown[], V> = [...T, V];

type TuplifyUnion14911<T, L = LastOf14911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14911<TuplifyUnion14911<Exclude<T, L>>, L>;

type DeepPartial14911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14911<T[P]> }
  : T;

type Paths14911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14911<K, Paths14911<T[K], Prev14911[D]>> : never }[keyof T]
  : never;

type Prev14911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14911 {
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

type ConfigPaths14911 = Paths14911<NestedConfig14911>;

interface HeavyProps14911 {
  config: DeepPartial14911<NestedConfig14911>;
  path?: ConfigPaths14911;
}

const HeavyComponent14911 = memo(function HeavyComponent14911({ config }: HeavyProps14911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14911.displayName = 'HeavyComponent14911';
export default HeavyComponent14911;
