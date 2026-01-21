'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly48<T> = T extends (infer U)[]
  ? DeepReadonlyArray48<U>
  : T extends object
  ? DeepReadonlyObject48<T>
  : T;

interface DeepReadonlyArray48<T> extends ReadonlyArray<DeepReadonly48<T>> {}

type DeepReadonlyObject48<T> = {
  readonly [P in keyof T]: DeepReadonly48<T[P]>;
};

type UnionToIntersection48<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf48<T> = UnionToIntersection48<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push48<T extends unknown[], V> = [...T, V];

type TuplifyUnion48<T, L = LastOf48<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push48<TuplifyUnion48<Exclude<T, L>>, L>;

type DeepPartial48<T> = T extends object
  ? { [P in keyof T]?: DeepPartial48<T[P]> }
  : T;

type Paths48<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join48<K, Paths48<T[K], Prev48[D]>> : never }[keyof T]
  : never;

type Prev48 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join48<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig48 {
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

type ConfigPaths48 = Paths48<NestedConfig48>;

interface HeavyProps48 {
  config: DeepPartial48<NestedConfig48>;
  path?: ConfigPaths48;
}

const HeavyComponent48 = memo(function HeavyComponent48({ config }: HeavyProps48) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 48) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-48 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H48: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent48.displayName = 'HeavyComponent48';
export default HeavyComponent48;
