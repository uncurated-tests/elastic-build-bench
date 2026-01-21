'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly960<T> = T extends (infer U)[]
  ? DeepReadonlyArray960<U>
  : T extends object
  ? DeepReadonlyObject960<T>
  : T;

interface DeepReadonlyArray960<T> extends ReadonlyArray<DeepReadonly960<T>> {}

type DeepReadonlyObject960<T> = {
  readonly [P in keyof T]: DeepReadonly960<T[P]>;
};

type UnionToIntersection960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf960<T> = UnionToIntersection960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push960<T extends unknown[], V> = [...T, V];

type TuplifyUnion960<T, L = LastOf960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push960<TuplifyUnion960<Exclude<T, L>>, L>;

type DeepPartial960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial960<T[P]> }
  : T;

type Paths960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join960<K, Paths960<T[K], Prev960[D]>> : never }[keyof T]
  : never;

type Prev960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig960 {
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

type ConfigPaths960 = Paths960<NestedConfig960>;

interface HeavyProps960 {
  config: DeepPartial960<NestedConfig960>;
  path?: ConfigPaths960;
}

const HeavyComponent960 = memo(function HeavyComponent960({ config }: HeavyProps960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent960.displayName = 'HeavyComponent960';
export default HeavyComponent960;
