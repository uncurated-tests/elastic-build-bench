'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3926<T> = T extends (infer U)[]
  ? DeepReadonlyArray3926<U>
  : T extends object
  ? DeepReadonlyObject3926<T>
  : T;

interface DeepReadonlyArray3926<T> extends ReadonlyArray<DeepReadonly3926<T>> {}

type DeepReadonlyObject3926<T> = {
  readonly [P in keyof T]: DeepReadonly3926<T[P]>;
};

type UnionToIntersection3926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3926<T> = UnionToIntersection3926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3926<T extends unknown[], V> = [...T, V];

type TuplifyUnion3926<T, L = LastOf3926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3926<TuplifyUnion3926<Exclude<T, L>>, L>;

type DeepPartial3926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3926<T[P]> }
  : T;

type Paths3926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3926<K, Paths3926<T[K], Prev3926[D]>> : never }[keyof T]
  : never;

type Prev3926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3926 {
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

type ConfigPaths3926 = Paths3926<NestedConfig3926>;

interface HeavyProps3926 {
  config: DeepPartial3926<NestedConfig3926>;
  path?: ConfigPaths3926;
}

const HeavyComponent3926 = memo(function HeavyComponent3926({ config }: HeavyProps3926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3926.displayName = 'HeavyComponent3926';
export default HeavyComponent3926;
