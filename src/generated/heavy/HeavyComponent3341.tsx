'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3341<T> = T extends (infer U)[]
  ? DeepReadonlyArray3341<U>
  : T extends object
  ? DeepReadonlyObject3341<T>
  : T;

interface DeepReadonlyArray3341<T> extends ReadonlyArray<DeepReadonly3341<T>> {}

type DeepReadonlyObject3341<T> = {
  readonly [P in keyof T]: DeepReadonly3341<T[P]>;
};

type UnionToIntersection3341<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3341<T> = UnionToIntersection3341<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3341<T extends unknown[], V> = [...T, V];

type TuplifyUnion3341<T, L = LastOf3341<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3341<TuplifyUnion3341<Exclude<T, L>>, L>;

type DeepPartial3341<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3341<T[P]> }
  : T;

type Paths3341<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3341<K, Paths3341<T[K], Prev3341[D]>> : never }[keyof T]
  : never;

type Prev3341 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3341<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3341 {
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

type ConfigPaths3341 = Paths3341<NestedConfig3341>;

interface HeavyProps3341 {
  config: DeepPartial3341<NestedConfig3341>;
  path?: ConfigPaths3341;
}

const HeavyComponent3341 = memo(function HeavyComponent3341({ config }: HeavyProps3341) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3341) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3341 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3341: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3341.displayName = 'HeavyComponent3341';
export default HeavyComponent3341;
