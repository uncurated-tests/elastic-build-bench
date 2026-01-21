'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3061<T> = T extends (infer U)[]
  ? DeepReadonlyArray3061<U>
  : T extends object
  ? DeepReadonlyObject3061<T>
  : T;

interface DeepReadonlyArray3061<T> extends ReadonlyArray<DeepReadonly3061<T>> {}

type DeepReadonlyObject3061<T> = {
  readonly [P in keyof T]: DeepReadonly3061<T[P]>;
};

type UnionToIntersection3061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3061<T> = UnionToIntersection3061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3061<T extends unknown[], V> = [...T, V];

type TuplifyUnion3061<T, L = LastOf3061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3061<TuplifyUnion3061<Exclude<T, L>>, L>;

type DeepPartial3061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3061<T[P]> }
  : T;

type Paths3061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3061<K, Paths3061<T[K], Prev3061[D]>> : never }[keyof T]
  : never;

type Prev3061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3061 {
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

type ConfigPaths3061 = Paths3061<NestedConfig3061>;

interface HeavyProps3061 {
  config: DeepPartial3061<NestedConfig3061>;
  path?: ConfigPaths3061;
}

const HeavyComponent3061 = memo(function HeavyComponent3061({ config }: HeavyProps3061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3061.displayName = 'HeavyComponent3061';
export default HeavyComponent3061;
