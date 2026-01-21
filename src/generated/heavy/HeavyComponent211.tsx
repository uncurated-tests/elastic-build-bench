'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly211<T> = T extends (infer U)[]
  ? DeepReadonlyArray211<U>
  : T extends object
  ? DeepReadonlyObject211<T>
  : T;

interface DeepReadonlyArray211<T> extends ReadonlyArray<DeepReadonly211<T>> {}

type DeepReadonlyObject211<T> = {
  readonly [P in keyof T]: DeepReadonly211<T[P]>;
};

type UnionToIntersection211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf211<T> = UnionToIntersection211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push211<T extends unknown[], V> = [...T, V];

type TuplifyUnion211<T, L = LastOf211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push211<TuplifyUnion211<Exclude<T, L>>, L>;

type DeepPartial211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial211<T[P]> }
  : T;

type Paths211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join211<K, Paths211<T[K], Prev211[D]>> : never }[keyof T]
  : never;

type Prev211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig211 {
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

type ConfigPaths211 = Paths211<NestedConfig211>;

interface HeavyProps211 {
  config: DeepPartial211<NestedConfig211>;
  path?: ConfigPaths211;
}

const HeavyComponent211 = memo(function HeavyComponent211({ config }: HeavyProps211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent211.displayName = 'HeavyComponent211';
export default HeavyComponent211;
