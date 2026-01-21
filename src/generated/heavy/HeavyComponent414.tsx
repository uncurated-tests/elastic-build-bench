'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly414<T> = T extends (infer U)[]
  ? DeepReadonlyArray414<U>
  : T extends object
  ? DeepReadonlyObject414<T>
  : T;

interface DeepReadonlyArray414<T> extends ReadonlyArray<DeepReadonly414<T>> {}

type DeepReadonlyObject414<T> = {
  readonly [P in keyof T]: DeepReadonly414<T[P]>;
};

type UnionToIntersection414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf414<T> = UnionToIntersection414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push414<T extends unknown[], V> = [...T, V];

type TuplifyUnion414<T, L = LastOf414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push414<TuplifyUnion414<Exclude<T, L>>, L>;

type DeepPartial414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial414<T[P]> }
  : T;

type Paths414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join414<K, Paths414<T[K], Prev414[D]>> : never }[keyof T]
  : never;

type Prev414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig414 {
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

type ConfigPaths414 = Paths414<NestedConfig414>;

interface HeavyProps414 {
  config: DeepPartial414<NestedConfig414>;
  path?: ConfigPaths414;
}

const HeavyComponent414 = memo(function HeavyComponent414({ config }: HeavyProps414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent414.displayName = 'HeavyComponent414';
export default HeavyComponent414;
