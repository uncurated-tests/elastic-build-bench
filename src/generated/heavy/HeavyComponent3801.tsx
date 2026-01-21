'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3801<T> = T extends (infer U)[]
  ? DeepReadonlyArray3801<U>
  : T extends object
  ? DeepReadonlyObject3801<T>
  : T;

interface DeepReadonlyArray3801<T> extends ReadonlyArray<DeepReadonly3801<T>> {}

type DeepReadonlyObject3801<T> = {
  readonly [P in keyof T]: DeepReadonly3801<T[P]>;
};

type UnionToIntersection3801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3801<T> = UnionToIntersection3801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3801<T extends unknown[], V> = [...T, V];

type TuplifyUnion3801<T, L = LastOf3801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3801<TuplifyUnion3801<Exclude<T, L>>, L>;

type DeepPartial3801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3801<T[P]> }
  : T;

type Paths3801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3801<K, Paths3801<T[K], Prev3801[D]>> : never }[keyof T]
  : never;

type Prev3801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3801 {
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

type ConfigPaths3801 = Paths3801<NestedConfig3801>;

interface HeavyProps3801 {
  config: DeepPartial3801<NestedConfig3801>;
  path?: ConfigPaths3801;
}

const HeavyComponent3801 = memo(function HeavyComponent3801({ config }: HeavyProps3801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3801.displayName = 'HeavyComponent3801';
export default HeavyComponent3801;
