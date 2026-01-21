'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly150<T> = T extends (infer U)[]
  ? DeepReadonlyArray150<U>
  : T extends object
  ? DeepReadonlyObject150<T>
  : T;

interface DeepReadonlyArray150<T> extends ReadonlyArray<DeepReadonly150<T>> {}

type DeepReadonlyObject150<T> = {
  readonly [P in keyof T]: DeepReadonly150<T[P]>;
};

type UnionToIntersection150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf150<T> = UnionToIntersection150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push150<T extends unknown[], V> = [...T, V];

type TuplifyUnion150<T, L = LastOf150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push150<TuplifyUnion150<Exclude<T, L>>, L>;

type DeepPartial150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial150<T[P]> }
  : T;

type Paths150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join150<K, Paths150<T[K], Prev150[D]>> : never }[keyof T]
  : never;

type Prev150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig150 {
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

type ConfigPaths150 = Paths150<NestedConfig150>;

interface HeavyProps150 {
  config: DeepPartial150<NestedConfig150>;
  path?: ConfigPaths150;
}

const HeavyComponent150 = memo(function HeavyComponent150({ config }: HeavyProps150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent150.displayName = 'HeavyComponent150';
export default HeavyComponent150;
