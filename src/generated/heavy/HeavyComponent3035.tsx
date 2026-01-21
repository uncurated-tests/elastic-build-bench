'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3035<T> = T extends (infer U)[]
  ? DeepReadonlyArray3035<U>
  : T extends object
  ? DeepReadonlyObject3035<T>
  : T;

interface DeepReadonlyArray3035<T> extends ReadonlyArray<DeepReadonly3035<T>> {}

type DeepReadonlyObject3035<T> = {
  readonly [P in keyof T]: DeepReadonly3035<T[P]>;
};

type UnionToIntersection3035<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3035<T> = UnionToIntersection3035<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3035<T extends unknown[], V> = [...T, V];

type TuplifyUnion3035<T, L = LastOf3035<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3035<TuplifyUnion3035<Exclude<T, L>>, L>;

type DeepPartial3035<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3035<T[P]> }
  : T;

type Paths3035<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3035<K, Paths3035<T[K], Prev3035[D]>> : never }[keyof T]
  : never;

type Prev3035 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3035<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3035 {
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

type ConfigPaths3035 = Paths3035<NestedConfig3035>;

interface HeavyProps3035 {
  config: DeepPartial3035<NestedConfig3035>;
  path?: ConfigPaths3035;
}

const HeavyComponent3035 = memo(function HeavyComponent3035({ config }: HeavyProps3035) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3035) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3035 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3035: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3035.displayName = 'HeavyComponent3035';
export default HeavyComponent3035;
