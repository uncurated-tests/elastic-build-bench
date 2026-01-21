'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3837<T> = T extends (infer U)[]
  ? DeepReadonlyArray3837<U>
  : T extends object
  ? DeepReadonlyObject3837<T>
  : T;

interface DeepReadonlyArray3837<T> extends ReadonlyArray<DeepReadonly3837<T>> {}

type DeepReadonlyObject3837<T> = {
  readonly [P in keyof T]: DeepReadonly3837<T[P]>;
};

type UnionToIntersection3837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3837<T> = UnionToIntersection3837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3837<T extends unknown[], V> = [...T, V];

type TuplifyUnion3837<T, L = LastOf3837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3837<TuplifyUnion3837<Exclude<T, L>>, L>;

type DeepPartial3837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3837<T[P]> }
  : T;

type Paths3837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3837<K, Paths3837<T[K], Prev3837[D]>> : never }[keyof T]
  : never;

type Prev3837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3837 {
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

type ConfigPaths3837 = Paths3837<NestedConfig3837>;

interface HeavyProps3837 {
  config: DeepPartial3837<NestedConfig3837>;
  path?: ConfigPaths3837;
}

const HeavyComponent3837 = memo(function HeavyComponent3837({ config }: HeavyProps3837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3837.displayName = 'HeavyComponent3837';
export default HeavyComponent3837;
