'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3140<T> = T extends (infer U)[]
  ? DeepReadonlyArray3140<U>
  : T extends object
  ? DeepReadonlyObject3140<T>
  : T;

interface DeepReadonlyArray3140<T> extends ReadonlyArray<DeepReadonly3140<T>> {}

type DeepReadonlyObject3140<T> = {
  readonly [P in keyof T]: DeepReadonly3140<T[P]>;
};

type UnionToIntersection3140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3140<T> = UnionToIntersection3140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3140<T extends unknown[], V> = [...T, V];

type TuplifyUnion3140<T, L = LastOf3140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3140<TuplifyUnion3140<Exclude<T, L>>, L>;

type DeepPartial3140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3140<T[P]> }
  : T;

type Paths3140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3140<K, Paths3140<T[K], Prev3140[D]>> : never }[keyof T]
  : never;

type Prev3140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3140 {
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

type ConfigPaths3140 = Paths3140<NestedConfig3140>;

interface HeavyProps3140 {
  config: DeepPartial3140<NestedConfig3140>;
  path?: ConfigPaths3140;
}

const HeavyComponent3140 = memo(function HeavyComponent3140({ config }: HeavyProps3140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3140.displayName = 'HeavyComponent3140';
export default HeavyComponent3140;
