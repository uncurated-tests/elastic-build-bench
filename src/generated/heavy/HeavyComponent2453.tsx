'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2453<T> = T extends (infer U)[]
  ? DeepReadonlyArray2453<U>
  : T extends object
  ? DeepReadonlyObject2453<T>
  : T;

interface DeepReadonlyArray2453<T> extends ReadonlyArray<DeepReadonly2453<T>> {}

type DeepReadonlyObject2453<T> = {
  readonly [P in keyof T]: DeepReadonly2453<T[P]>;
};

type UnionToIntersection2453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2453<T> = UnionToIntersection2453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2453<T extends unknown[], V> = [...T, V];

type TuplifyUnion2453<T, L = LastOf2453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2453<TuplifyUnion2453<Exclude<T, L>>, L>;

type DeepPartial2453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2453<T[P]> }
  : T;

type Paths2453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2453<K, Paths2453<T[K], Prev2453[D]>> : never }[keyof T]
  : never;

type Prev2453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2453 {
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

type ConfigPaths2453 = Paths2453<NestedConfig2453>;

interface HeavyProps2453 {
  config: DeepPartial2453<NestedConfig2453>;
  path?: ConfigPaths2453;
}

const HeavyComponent2453 = memo(function HeavyComponent2453({ config }: HeavyProps2453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2453.displayName = 'HeavyComponent2453';
export default HeavyComponent2453;
