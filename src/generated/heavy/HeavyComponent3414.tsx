'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3414<T> = T extends (infer U)[]
  ? DeepReadonlyArray3414<U>
  : T extends object
  ? DeepReadonlyObject3414<T>
  : T;

interface DeepReadonlyArray3414<T> extends ReadonlyArray<DeepReadonly3414<T>> {}

type DeepReadonlyObject3414<T> = {
  readonly [P in keyof T]: DeepReadonly3414<T[P]>;
};

type UnionToIntersection3414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3414<T> = UnionToIntersection3414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3414<T extends unknown[], V> = [...T, V];

type TuplifyUnion3414<T, L = LastOf3414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3414<TuplifyUnion3414<Exclude<T, L>>, L>;

type DeepPartial3414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3414<T[P]> }
  : T;

type Paths3414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3414<K, Paths3414<T[K], Prev3414[D]>> : never }[keyof T]
  : never;

type Prev3414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3414 {
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

type ConfigPaths3414 = Paths3414<NestedConfig3414>;

interface HeavyProps3414 {
  config: DeepPartial3414<NestedConfig3414>;
  path?: ConfigPaths3414;
}

const HeavyComponent3414 = memo(function HeavyComponent3414({ config }: HeavyProps3414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3414.displayName = 'HeavyComponent3414';
export default HeavyComponent3414;
