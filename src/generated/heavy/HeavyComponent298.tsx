'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly298<T> = T extends (infer U)[]
  ? DeepReadonlyArray298<U>
  : T extends object
  ? DeepReadonlyObject298<T>
  : T;

interface DeepReadonlyArray298<T> extends ReadonlyArray<DeepReadonly298<T>> {}

type DeepReadonlyObject298<T> = {
  readonly [P in keyof T]: DeepReadonly298<T[P]>;
};

type UnionToIntersection298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf298<T> = UnionToIntersection298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push298<T extends unknown[], V> = [...T, V];

type TuplifyUnion298<T, L = LastOf298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push298<TuplifyUnion298<Exclude<T, L>>, L>;

type DeepPartial298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial298<T[P]> }
  : T;

type Paths298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join298<K, Paths298<T[K], Prev298[D]>> : never }[keyof T]
  : never;

type Prev298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig298 {
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

type ConfigPaths298 = Paths298<NestedConfig298>;

interface HeavyProps298 {
  config: DeepPartial298<NestedConfig298>;
  path?: ConfigPaths298;
}

const HeavyComponent298 = memo(function HeavyComponent298({ config }: HeavyProps298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent298.displayName = 'HeavyComponent298';
export default HeavyComponent298;
