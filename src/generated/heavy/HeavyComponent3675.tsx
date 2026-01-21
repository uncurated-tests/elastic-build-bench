'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3675<T> = T extends (infer U)[]
  ? DeepReadonlyArray3675<U>
  : T extends object
  ? DeepReadonlyObject3675<T>
  : T;

interface DeepReadonlyArray3675<T> extends ReadonlyArray<DeepReadonly3675<T>> {}

type DeepReadonlyObject3675<T> = {
  readonly [P in keyof T]: DeepReadonly3675<T[P]>;
};

type UnionToIntersection3675<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3675<T> = UnionToIntersection3675<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3675<T extends unknown[], V> = [...T, V];

type TuplifyUnion3675<T, L = LastOf3675<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3675<TuplifyUnion3675<Exclude<T, L>>, L>;

type DeepPartial3675<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3675<T[P]> }
  : T;

type Paths3675<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3675<K, Paths3675<T[K], Prev3675[D]>> : never }[keyof T]
  : never;

type Prev3675 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3675<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3675 {
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

type ConfigPaths3675 = Paths3675<NestedConfig3675>;

interface HeavyProps3675 {
  config: DeepPartial3675<NestedConfig3675>;
  path?: ConfigPaths3675;
}

const HeavyComponent3675 = memo(function HeavyComponent3675({ config }: HeavyProps3675) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3675) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3675 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3675: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3675.displayName = 'HeavyComponent3675';
export default HeavyComponent3675;
