'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3612<T> = T extends (infer U)[]
  ? DeepReadonlyArray3612<U>
  : T extends object
  ? DeepReadonlyObject3612<T>
  : T;

interface DeepReadonlyArray3612<T> extends ReadonlyArray<DeepReadonly3612<T>> {}

type DeepReadonlyObject3612<T> = {
  readonly [P in keyof T]: DeepReadonly3612<T[P]>;
};

type UnionToIntersection3612<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3612<T> = UnionToIntersection3612<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3612<T extends unknown[], V> = [...T, V];

type TuplifyUnion3612<T, L = LastOf3612<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3612<TuplifyUnion3612<Exclude<T, L>>, L>;

type DeepPartial3612<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3612<T[P]> }
  : T;

type Paths3612<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3612<K, Paths3612<T[K], Prev3612[D]>> : never }[keyof T]
  : never;

type Prev3612 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3612<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3612 {
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

type ConfigPaths3612 = Paths3612<NestedConfig3612>;

interface HeavyProps3612 {
  config: DeepPartial3612<NestedConfig3612>;
  path?: ConfigPaths3612;
}

const HeavyComponent3612 = memo(function HeavyComponent3612({ config }: HeavyProps3612) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3612) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3612 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3612: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3612.displayName = 'HeavyComponent3612';
export default HeavyComponent3612;
