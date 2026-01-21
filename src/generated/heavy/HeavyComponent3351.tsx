'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3351<T> = T extends (infer U)[]
  ? DeepReadonlyArray3351<U>
  : T extends object
  ? DeepReadonlyObject3351<T>
  : T;

interface DeepReadonlyArray3351<T> extends ReadonlyArray<DeepReadonly3351<T>> {}

type DeepReadonlyObject3351<T> = {
  readonly [P in keyof T]: DeepReadonly3351<T[P]>;
};

type UnionToIntersection3351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3351<T> = UnionToIntersection3351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3351<T extends unknown[], V> = [...T, V];

type TuplifyUnion3351<T, L = LastOf3351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3351<TuplifyUnion3351<Exclude<T, L>>, L>;

type DeepPartial3351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3351<T[P]> }
  : T;

type Paths3351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3351<K, Paths3351<T[K], Prev3351[D]>> : never }[keyof T]
  : never;

type Prev3351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3351 {
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

type ConfigPaths3351 = Paths3351<NestedConfig3351>;

interface HeavyProps3351 {
  config: DeepPartial3351<NestedConfig3351>;
  path?: ConfigPaths3351;
}

const HeavyComponent3351 = memo(function HeavyComponent3351({ config }: HeavyProps3351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3351.displayName = 'HeavyComponent3351';
export default HeavyComponent3351;
