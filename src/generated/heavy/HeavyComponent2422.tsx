'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2422<T> = T extends (infer U)[]
  ? DeepReadonlyArray2422<U>
  : T extends object
  ? DeepReadonlyObject2422<T>
  : T;

interface DeepReadonlyArray2422<T> extends ReadonlyArray<DeepReadonly2422<T>> {}

type DeepReadonlyObject2422<T> = {
  readonly [P in keyof T]: DeepReadonly2422<T[P]>;
};

type UnionToIntersection2422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2422<T> = UnionToIntersection2422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2422<T extends unknown[], V> = [...T, V];

type TuplifyUnion2422<T, L = LastOf2422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2422<TuplifyUnion2422<Exclude<T, L>>, L>;

type DeepPartial2422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2422<T[P]> }
  : T;

type Paths2422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2422<K, Paths2422<T[K], Prev2422[D]>> : never }[keyof T]
  : never;

type Prev2422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2422 {
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

type ConfigPaths2422 = Paths2422<NestedConfig2422>;

interface HeavyProps2422 {
  config: DeepPartial2422<NestedConfig2422>;
  path?: ConfigPaths2422;
}

const HeavyComponent2422 = memo(function HeavyComponent2422({ config }: HeavyProps2422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2422.displayName = 'HeavyComponent2422';
export default HeavyComponent2422;
