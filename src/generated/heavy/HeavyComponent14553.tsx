'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14553<T> = T extends (infer U)[]
  ? DeepReadonlyArray14553<U>
  : T extends object
  ? DeepReadonlyObject14553<T>
  : T;

interface DeepReadonlyArray14553<T> extends ReadonlyArray<DeepReadonly14553<T>> {}

type DeepReadonlyObject14553<T> = {
  readonly [P in keyof T]: DeepReadonly14553<T[P]>;
};

type UnionToIntersection14553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14553<T> = UnionToIntersection14553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14553<T extends unknown[], V> = [...T, V];

type TuplifyUnion14553<T, L = LastOf14553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14553<TuplifyUnion14553<Exclude<T, L>>, L>;

type DeepPartial14553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14553<T[P]> }
  : T;

type Paths14553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14553<K, Paths14553<T[K], Prev14553[D]>> : never }[keyof T]
  : never;

type Prev14553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14553 {
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

type ConfigPaths14553 = Paths14553<NestedConfig14553>;

interface HeavyProps14553 {
  config: DeepPartial14553<NestedConfig14553>;
  path?: ConfigPaths14553;
}

const HeavyComponent14553 = memo(function HeavyComponent14553({ config }: HeavyProps14553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14553.displayName = 'HeavyComponent14553';
export default HeavyComponent14553;
