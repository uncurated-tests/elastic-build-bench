'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly800<T> = T extends (infer U)[]
  ? DeepReadonlyArray800<U>
  : T extends object
  ? DeepReadonlyObject800<T>
  : T;

interface DeepReadonlyArray800<T> extends ReadonlyArray<DeepReadonly800<T>> {}

type DeepReadonlyObject800<T> = {
  readonly [P in keyof T]: DeepReadonly800<T[P]>;
};

type UnionToIntersection800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf800<T> = UnionToIntersection800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push800<T extends unknown[], V> = [...T, V];

type TuplifyUnion800<T, L = LastOf800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push800<TuplifyUnion800<Exclude<T, L>>, L>;

type DeepPartial800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial800<T[P]> }
  : T;

type Paths800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join800<K, Paths800<T[K], Prev800[D]>> : never }[keyof T]
  : never;

type Prev800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig800 {
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

type ConfigPaths800 = Paths800<NestedConfig800>;

interface HeavyProps800 {
  config: DeepPartial800<NestedConfig800>;
  path?: ConfigPaths800;
}

const HeavyComponent800 = memo(function HeavyComponent800({ config }: HeavyProps800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent800.displayName = 'HeavyComponent800';
export default HeavyComponent800;
