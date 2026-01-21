'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3945<T> = T extends (infer U)[]
  ? DeepReadonlyArray3945<U>
  : T extends object
  ? DeepReadonlyObject3945<T>
  : T;

interface DeepReadonlyArray3945<T> extends ReadonlyArray<DeepReadonly3945<T>> {}

type DeepReadonlyObject3945<T> = {
  readonly [P in keyof T]: DeepReadonly3945<T[P]>;
};

type UnionToIntersection3945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3945<T> = UnionToIntersection3945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3945<T extends unknown[], V> = [...T, V];

type TuplifyUnion3945<T, L = LastOf3945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3945<TuplifyUnion3945<Exclude<T, L>>, L>;

type DeepPartial3945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3945<T[P]> }
  : T;

type Paths3945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3945<K, Paths3945<T[K], Prev3945[D]>> : never }[keyof T]
  : never;

type Prev3945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3945 {
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

type ConfigPaths3945 = Paths3945<NestedConfig3945>;

interface HeavyProps3945 {
  config: DeepPartial3945<NestedConfig3945>;
  path?: ConfigPaths3945;
}

const HeavyComponent3945 = memo(function HeavyComponent3945({ config }: HeavyProps3945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3945.displayName = 'HeavyComponent3945';
export default HeavyComponent3945;
