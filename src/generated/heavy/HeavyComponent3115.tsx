'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3115<T> = T extends (infer U)[]
  ? DeepReadonlyArray3115<U>
  : T extends object
  ? DeepReadonlyObject3115<T>
  : T;

interface DeepReadonlyArray3115<T> extends ReadonlyArray<DeepReadonly3115<T>> {}

type DeepReadonlyObject3115<T> = {
  readonly [P in keyof T]: DeepReadonly3115<T[P]>;
};

type UnionToIntersection3115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3115<T> = UnionToIntersection3115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3115<T extends unknown[], V> = [...T, V];

type TuplifyUnion3115<T, L = LastOf3115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3115<TuplifyUnion3115<Exclude<T, L>>, L>;

type DeepPartial3115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3115<T[P]> }
  : T;

type Paths3115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3115<K, Paths3115<T[K], Prev3115[D]>> : never }[keyof T]
  : never;

type Prev3115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3115 {
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

type ConfigPaths3115 = Paths3115<NestedConfig3115>;

interface HeavyProps3115 {
  config: DeepPartial3115<NestedConfig3115>;
  path?: ConfigPaths3115;
}

const HeavyComponent3115 = memo(function HeavyComponent3115({ config }: HeavyProps3115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3115.displayName = 'HeavyComponent3115';
export default HeavyComponent3115;
