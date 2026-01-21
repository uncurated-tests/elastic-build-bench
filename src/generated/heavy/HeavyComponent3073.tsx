'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3073<T> = T extends (infer U)[]
  ? DeepReadonlyArray3073<U>
  : T extends object
  ? DeepReadonlyObject3073<T>
  : T;

interface DeepReadonlyArray3073<T> extends ReadonlyArray<DeepReadonly3073<T>> {}

type DeepReadonlyObject3073<T> = {
  readonly [P in keyof T]: DeepReadonly3073<T[P]>;
};

type UnionToIntersection3073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3073<T> = UnionToIntersection3073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3073<T extends unknown[], V> = [...T, V];

type TuplifyUnion3073<T, L = LastOf3073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3073<TuplifyUnion3073<Exclude<T, L>>, L>;

type DeepPartial3073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3073<T[P]> }
  : T;

type Paths3073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3073<K, Paths3073<T[K], Prev3073[D]>> : never }[keyof T]
  : never;

type Prev3073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3073 {
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

type ConfigPaths3073 = Paths3073<NestedConfig3073>;

interface HeavyProps3073 {
  config: DeepPartial3073<NestedConfig3073>;
  path?: ConfigPaths3073;
}

const HeavyComponent3073 = memo(function HeavyComponent3073({ config }: HeavyProps3073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3073.displayName = 'HeavyComponent3073';
export default HeavyComponent3073;
