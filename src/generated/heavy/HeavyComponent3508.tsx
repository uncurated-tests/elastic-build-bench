'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3508<T> = T extends (infer U)[]
  ? DeepReadonlyArray3508<U>
  : T extends object
  ? DeepReadonlyObject3508<T>
  : T;

interface DeepReadonlyArray3508<T> extends ReadonlyArray<DeepReadonly3508<T>> {}

type DeepReadonlyObject3508<T> = {
  readonly [P in keyof T]: DeepReadonly3508<T[P]>;
};

type UnionToIntersection3508<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3508<T> = UnionToIntersection3508<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3508<T extends unknown[], V> = [...T, V];

type TuplifyUnion3508<T, L = LastOf3508<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3508<TuplifyUnion3508<Exclude<T, L>>, L>;

type DeepPartial3508<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3508<T[P]> }
  : T;

type Paths3508<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3508<K, Paths3508<T[K], Prev3508[D]>> : never }[keyof T]
  : never;

type Prev3508 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3508<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3508 {
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

type ConfigPaths3508 = Paths3508<NestedConfig3508>;

interface HeavyProps3508 {
  config: DeepPartial3508<NestedConfig3508>;
  path?: ConfigPaths3508;
}

const HeavyComponent3508 = memo(function HeavyComponent3508({ config }: HeavyProps3508) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3508) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3508 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3508: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3508.displayName = 'HeavyComponent3508';
export default HeavyComponent3508;
