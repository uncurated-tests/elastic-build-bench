'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2113<T> = T extends (infer U)[]
  ? DeepReadonlyArray2113<U>
  : T extends object
  ? DeepReadonlyObject2113<T>
  : T;

interface DeepReadonlyArray2113<T> extends ReadonlyArray<DeepReadonly2113<T>> {}

type DeepReadonlyObject2113<T> = {
  readonly [P in keyof T]: DeepReadonly2113<T[P]>;
};

type UnionToIntersection2113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2113<T> = UnionToIntersection2113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2113<T extends unknown[], V> = [...T, V];

type TuplifyUnion2113<T, L = LastOf2113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2113<TuplifyUnion2113<Exclude<T, L>>, L>;

type DeepPartial2113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2113<T[P]> }
  : T;

type Paths2113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2113<K, Paths2113<T[K], Prev2113[D]>> : never }[keyof T]
  : never;

type Prev2113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2113 {
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

type ConfigPaths2113 = Paths2113<NestedConfig2113>;

interface HeavyProps2113 {
  config: DeepPartial2113<NestedConfig2113>;
  path?: ConfigPaths2113;
}

const HeavyComponent2113 = memo(function HeavyComponent2113({ config }: HeavyProps2113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2113.displayName = 'HeavyComponent2113';
export default HeavyComponent2113;
