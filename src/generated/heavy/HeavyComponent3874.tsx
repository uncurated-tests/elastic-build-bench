'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3874<T> = T extends (infer U)[]
  ? DeepReadonlyArray3874<U>
  : T extends object
  ? DeepReadonlyObject3874<T>
  : T;

interface DeepReadonlyArray3874<T> extends ReadonlyArray<DeepReadonly3874<T>> {}

type DeepReadonlyObject3874<T> = {
  readonly [P in keyof T]: DeepReadonly3874<T[P]>;
};

type UnionToIntersection3874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3874<T> = UnionToIntersection3874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3874<T extends unknown[], V> = [...T, V];

type TuplifyUnion3874<T, L = LastOf3874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3874<TuplifyUnion3874<Exclude<T, L>>, L>;

type DeepPartial3874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3874<T[P]> }
  : T;

type Paths3874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3874<K, Paths3874<T[K], Prev3874[D]>> : never }[keyof T]
  : never;

type Prev3874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3874 {
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

type ConfigPaths3874 = Paths3874<NestedConfig3874>;

interface HeavyProps3874 {
  config: DeepPartial3874<NestedConfig3874>;
  path?: ConfigPaths3874;
}

const HeavyComponent3874 = memo(function HeavyComponent3874({ config }: HeavyProps3874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3874.displayName = 'HeavyComponent3874';
export default HeavyComponent3874;
