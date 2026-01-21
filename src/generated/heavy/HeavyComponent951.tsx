'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly951<T> = T extends (infer U)[]
  ? DeepReadonlyArray951<U>
  : T extends object
  ? DeepReadonlyObject951<T>
  : T;

interface DeepReadonlyArray951<T> extends ReadonlyArray<DeepReadonly951<T>> {}

type DeepReadonlyObject951<T> = {
  readonly [P in keyof T]: DeepReadonly951<T[P]>;
};

type UnionToIntersection951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf951<T> = UnionToIntersection951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push951<T extends unknown[], V> = [...T, V];

type TuplifyUnion951<T, L = LastOf951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push951<TuplifyUnion951<Exclude<T, L>>, L>;

type DeepPartial951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial951<T[P]> }
  : T;

type Paths951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join951<K, Paths951<T[K], Prev951[D]>> : never }[keyof T]
  : never;

type Prev951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig951 {
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

type ConfigPaths951 = Paths951<NestedConfig951>;

interface HeavyProps951 {
  config: DeepPartial951<NestedConfig951>;
  path?: ConfigPaths951;
}

const HeavyComponent951 = memo(function HeavyComponent951({ config }: HeavyProps951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent951.displayName = 'HeavyComponent951';
export default HeavyComponent951;
