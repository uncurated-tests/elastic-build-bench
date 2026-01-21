'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3664<T> = T extends (infer U)[]
  ? DeepReadonlyArray3664<U>
  : T extends object
  ? DeepReadonlyObject3664<T>
  : T;

interface DeepReadonlyArray3664<T> extends ReadonlyArray<DeepReadonly3664<T>> {}

type DeepReadonlyObject3664<T> = {
  readonly [P in keyof T]: DeepReadonly3664<T[P]>;
};

type UnionToIntersection3664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3664<T> = UnionToIntersection3664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3664<T extends unknown[], V> = [...T, V];

type TuplifyUnion3664<T, L = LastOf3664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3664<TuplifyUnion3664<Exclude<T, L>>, L>;

type DeepPartial3664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3664<T[P]> }
  : T;

type Paths3664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3664<K, Paths3664<T[K], Prev3664[D]>> : never }[keyof T]
  : never;

type Prev3664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3664 {
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

type ConfigPaths3664 = Paths3664<NestedConfig3664>;

interface HeavyProps3664 {
  config: DeepPartial3664<NestedConfig3664>;
  path?: ConfigPaths3664;
}

const HeavyComponent3664 = memo(function HeavyComponent3664({ config }: HeavyProps3664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3664.displayName = 'HeavyComponent3664';
export default HeavyComponent3664;
