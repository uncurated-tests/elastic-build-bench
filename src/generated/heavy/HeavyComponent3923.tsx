'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3923<T> = T extends (infer U)[]
  ? DeepReadonlyArray3923<U>
  : T extends object
  ? DeepReadonlyObject3923<T>
  : T;

interface DeepReadonlyArray3923<T> extends ReadonlyArray<DeepReadonly3923<T>> {}

type DeepReadonlyObject3923<T> = {
  readonly [P in keyof T]: DeepReadonly3923<T[P]>;
};

type UnionToIntersection3923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3923<T> = UnionToIntersection3923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3923<T extends unknown[], V> = [...T, V];

type TuplifyUnion3923<T, L = LastOf3923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3923<TuplifyUnion3923<Exclude<T, L>>, L>;

type DeepPartial3923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3923<T[P]> }
  : T;

type Paths3923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3923<K, Paths3923<T[K], Prev3923[D]>> : never }[keyof T]
  : never;

type Prev3923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3923 {
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

type ConfigPaths3923 = Paths3923<NestedConfig3923>;

interface HeavyProps3923 {
  config: DeepPartial3923<NestedConfig3923>;
  path?: ConfigPaths3923;
}

const HeavyComponent3923 = memo(function HeavyComponent3923({ config }: HeavyProps3923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3923.displayName = 'HeavyComponent3923';
export default HeavyComponent3923;
