'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2160<T> = T extends (infer U)[]
  ? DeepReadonlyArray2160<U>
  : T extends object
  ? DeepReadonlyObject2160<T>
  : T;

interface DeepReadonlyArray2160<T> extends ReadonlyArray<DeepReadonly2160<T>> {}

type DeepReadonlyObject2160<T> = {
  readonly [P in keyof T]: DeepReadonly2160<T[P]>;
};

type UnionToIntersection2160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2160<T> = UnionToIntersection2160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2160<T extends unknown[], V> = [...T, V];

type TuplifyUnion2160<T, L = LastOf2160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2160<TuplifyUnion2160<Exclude<T, L>>, L>;

type DeepPartial2160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2160<T[P]> }
  : T;

type Paths2160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2160<K, Paths2160<T[K], Prev2160[D]>> : never }[keyof T]
  : never;

type Prev2160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2160 {
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

type ConfigPaths2160 = Paths2160<NestedConfig2160>;

interface HeavyProps2160 {
  config: DeepPartial2160<NestedConfig2160>;
  path?: ConfigPaths2160;
}

const HeavyComponent2160 = memo(function HeavyComponent2160({ config }: HeavyProps2160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2160.displayName = 'HeavyComponent2160';
export default HeavyComponent2160;
