'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2120<T> = T extends (infer U)[]
  ? DeepReadonlyArray2120<U>
  : T extends object
  ? DeepReadonlyObject2120<T>
  : T;

interface DeepReadonlyArray2120<T> extends ReadonlyArray<DeepReadonly2120<T>> {}

type DeepReadonlyObject2120<T> = {
  readonly [P in keyof T]: DeepReadonly2120<T[P]>;
};

type UnionToIntersection2120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2120<T> = UnionToIntersection2120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2120<T extends unknown[], V> = [...T, V];

type TuplifyUnion2120<T, L = LastOf2120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2120<TuplifyUnion2120<Exclude<T, L>>, L>;

type DeepPartial2120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2120<T[P]> }
  : T;

type Paths2120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2120<K, Paths2120<T[K], Prev2120[D]>> : never }[keyof T]
  : never;

type Prev2120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2120 {
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

type ConfigPaths2120 = Paths2120<NestedConfig2120>;

interface HeavyProps2120 {
  config: DeepPartial2120<NestedConfig2120>;
  path?: ConfigPaths2120;
}

const HeavyComponent2120 = memo(function HeavyComponent2120({ config }: HeavyProps2120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2120.displayName = 'HeavyComponent2120';
export default HeavyComponent2120;
