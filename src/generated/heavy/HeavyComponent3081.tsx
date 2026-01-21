'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3081<T> = T extends (infer U)[]
  ? DeepReadonlyArray3081<U>
  : T extends object
  ? DeepReadonlyObject3081<T>
  : T;

interface DeepReadonlyArray3081<T> extends ReadonlyArray<DeepReadonly3081<T>> {}

type DeepReadonlyObject3081<T> = {
  readonly [P in keyof T]: DeepReadonly3081<T[P]>;
};

type UnionToIntersection3081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3081<T> = UnionToIntersection3081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3081<T extends unknown[], V> = [...T, V];

type TuplifyUnion3081<T, L = LastOf3081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3081<TuplifyUnion3081<Exclude<T, L>>, L>;

type DeepPartial3081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3081<T[P]> }
  : T;

type Paths3081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3081<K, Paths3081<T[K], Prev3081[D]>> : never }[keyof T]
  : never;

type Prev3081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3081 {
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

type ConfigPaths3081 = Paths3081<NestedConfig3081>;

interface HeavyProps3081 {
  config: DeepPartial3081<NestedConfig3081>;
  path?: ConfigPaths3081;
}

const HeavyComponent3081 = memo(function HeavyComponent3081({ config }: HeavyProps3081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3081.displayName = 'HeavyComponent3081';
export default HeavyComponent3081;
