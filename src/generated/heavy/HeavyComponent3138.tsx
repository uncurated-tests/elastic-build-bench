'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3138<T> = T extends (infer U)[]
  ? DeepReadonlyArray3138<U>
  : T extends object
  ? DeepReadonlyObject3138<T>
  : T;

interface DeepReadonlyArray3138<T> extends ReadonlyArray<DeepReadonly3138<T>> {}

type DeepReadonlyObject3138<T> = {
  readonly [P in keyof T]: DeepReadonly3138<T[P]>;
};

type UnionToIntersection3138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3138<T> = UnionToIntersection3138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3138<T extends unknown[], V> = [...T, V];

type TuplifyUnion3138<T, L = LastOf3138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3138<TuplifyUnion3138<Exclude<T, L>>, L>;

type DeepPartial3138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3138<T[P]> }
  : T;

type Paths3138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3138<K, Paths3138<T[K], Prev3138[D]>> : never }[keyof T]
  : never;

type Prev3138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3138 {
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

type ConfigPaths3138 = Paths3138<NestedConfig3138>;

interface HeavyProps3138 {
  config: DeepPartial3138<NestedConfig3138>;
  path?: ConfigPaths3138;
}

const HeavyComponent3138 = memo(function HeavyComponent3138({ config }: HeavyProps3138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3138.displayName = 'HeavyComponent3138';
export default HeavyComponent3138;
