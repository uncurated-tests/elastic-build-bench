'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14870<T> = T extends (infer U)[]
  ? DeepReadonlyArray14870<U>
  : T extends object
  ? DeepReadonlyObject14870<T>
  : T;

interface DeepReadonlyArray14870<T> extends ReadonlyArray<DeepReadonly14870<T>> {}

type DeepReadonlyObject14870<T> = {
  readonly [P in keyof T]: DeepReadonly14870<T[P]>;
};

type UnionToIntersection14870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14870<T> = UnionToIntersection14870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14870<T extends unknown[], V> = [...T, V];

type TuplifyUnion14870<T, L = LastOf14870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14870<TuplifyUnion14870<Exclude<T, L>>, L>;

type DeepPartial14870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14870<T[P]> }
  : T;

type Paths14870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14870<K, Paths14870<T[K], Prev14870[D]>> : never }[keyof T]
  : never;

type Prev14870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14870 {
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

type ConfigPaths14870 = Paths14870<NestedConfig14870>;

interface HeavyProps14870 {
  config: DeepPartial14870<NestedConfig14870>;
  path?: ConfigPaths14870;
}

const HeavyComponent14870 = memo(function HeavyComponent14870({ config }: HeavyProps14870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14870.displayName = 'HeavyComponent14870';
export default HeavyComponent14870;
