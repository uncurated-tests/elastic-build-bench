'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3263<T> = T extends (infer U)[]
  ? DeepReadonlyArray3263<U>
  : T extends object
  ? DeepReadonlyObject3263<T>
  : T;

interface DeepReadonlyArray3263<T> extends ReadonlyArray<DeepReadonly3263<T>> {}

type DeepReadonlyObject3263<T> = {
  readonly [P in keyof T]: DeepReadonly3263<T[P]>;
};

type UnionToIntersection3263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3263<T> = UnionToIntersection3263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3263<T extends unknown[], V> = [...T, V];

type TuplifyUnion3263<T, L = LastOf3263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3263<TuplifyUnion3263<Exclude<T, L>>, L>;

type DeepPartial3263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3263<T[P]> }
  : T;

type Paths3263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3263<K, Paths3263<T[K], Prev3263[D]>> : never }[keyof T]
  : never;

type Prev3263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3263 {
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

type ConfigPaths3263 = Paths3263<NestedConfig3263>;

interface HeavyProps3263 {
  config: DeepPartial3263<NestedConfig3263>;
  path?: ConfigPaths3263;
}

const HeavyComponent3263 = memo(function HeavyComponent3263({ config }: HeavyProps3263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3263.displayName = 'HeavyComponent3263';
export default HeavyComponent3263;
