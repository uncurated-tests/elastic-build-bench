'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3141<T> = T extends (infer U)[]
  ? DeepReadonlyArray3141<U>
  : T extends object
  ? DeepReadonlyObject3141<T>
  : T;

interface DeepReadonlyArray3141<T> extends ReadonlyArray<DeepReadonly3141<T>> {}

type DeepReadonlyObject3141<T> = {
  readonly [P in keyof T]: DeepReadonly3141<T[P]>;
};

type UnionToIntersection3141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3141<T> = UnionToIntersection3141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3141<T extends unknown[], V> = [...T, V];

type TuplifyUnion3141<T, L = LastOf3141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3141<TuplifyUnion3141<Exclude<T, L>>, L>;

type DeepPartial3141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3141<T[P]> }
  : T;

type Paths3141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3141<K, Paths3141<T[K], Prev3141[D]>> : never }[keyof T]
  : never;

type Prev3141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3141 {
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

type ConfigPaths3141 = Paths3141<NestedConfig3141>;

interface HeavyProps3141 {
  config: DeepPartial3141<NestedConfig3141>;
  path?: ConfigPaths3141;
}

const HeavyComponent3141 = memo(function HeavyComponent3141({ config }: HeavyProps3141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3141.displayName = 'HeavyComponent3141';
export default HeavyComponent3141;
