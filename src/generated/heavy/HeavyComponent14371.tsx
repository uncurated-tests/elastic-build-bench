'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14371<T> = T extends (infer U)[]
  ? DeepReadonlyArray14371<U>
  : T extends object
  ? DeepReadonlyObject14371<T>
  : T;

interface DeepReadonlyArray14371<T> extends ReadonlyArray<DeepReadonly14371<T>> {}

type DeepReadonlyObject14371<T> = {
  readonly [P in keyof T]: DeepReadonly14371<T[P]>;
};

type UnionToIntersection14371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14371<T> = UnionToIntersection14371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14371<T extends unknown[], V> = [...T, V];

type TuplifyUnion14371<T, L = LastOf14371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14371<TuplifyUnion14371<Exclude<T, L>>, L>;

type DeepPartial14371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14371<T[P]> }
  : T;

type Paths14371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14371<K, Paths14371<T[K], Prev14371[D]>> : never }[keyof T]
  : never;

type Prev14371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14371 {
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

type ConfigPaths14371 = Paths14371<NestedConfig14371>;

interface HeavyProps14371 {
  config: DeepPartial14371<NestedConfig14371>;
  path?: ConfigPaths14371;
}

const HeavyComponent14371 = memo(function HeavyComponent14371({ config }: HeavyProps14371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14371.displayName = 'HeavyComponent14371';
export default HeavyComponent14371;
