'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3421<T> = T extends (infer U)[]
  ? DeepReadonlyArray3421<U>
  : T extends object
  ? DeepReadonlyObject3421<T>
  : T;

interface DeepReadonlyArray3421<T> extends ReadonlyArray<DeepReadonly3421<T>> {}

type DeepReadonlyObject3421<T> = {
  readonly [P in keyof T]: DeepReadonly3421<T[P]>;
};

type UnionToIntersection3421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3421<T> = UnionToIntersection3421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3421<T extends unknown[], V> = [...T, V];

type TuplifyUnion3421<T, L = LastOf3421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3421<TuplifyUnion3421<Exclude<T, L>>, L>;

type DeepPartial3421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3421<T[P]> }
  : T;

type Paths3421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3421<K, Paths3421<T[K], Prev3421[D]>> : never }[keyof T]
  : never;

type Prev3421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3421 {
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

type ConfigPaths3421 = Paths3421<NestedConfig3421>;

interface HeavyProps3421 {
  config: DeepPartial3421<NestedConfig3421>;
  path?: ConfigPaths3421;
}

const HeavyComponent3421 = memo(function HeavyComponent3421({ config }: HeavyProps3421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3421.displayName = 'HeavyComponent3421';
export default HeavyComponent3421;
