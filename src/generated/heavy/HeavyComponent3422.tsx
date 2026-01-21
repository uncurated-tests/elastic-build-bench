'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3422<T> = T extends (infer U)[]
  ? DeepReadonlyArray3422<U>
  : T extends object
  ? DeepReadonlyObject3422<T>
  : T;

interface DeepReadonlyArray3422<T> extends ReadonlyArray<DeepReadonly3422<T>> {}

type DeepReadonlyObject3422<T> = {
  readonly [P in keyof T]: DeepReadonly3422<T[P]>;
};

type UnionToIntersection3422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3422<T> = UnionToIntersection3422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3422<T extends unknown[], V> = [...T, V];

type TuplifyUnion3422<T, L = LastOf3422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3422<TuplifyUnion3422<Exclude<T, L>>, L>;

type DeepPartial3422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3422<T[P]> }
  : T;

type Paths3422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3422<K, Paths3422<T[K], Prev3422[D]>> : never }[keyof T]
  : never;

type Prev3422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3422 {
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

type ConfigPaths3422 = Paths3422<NestedConfig3422>;

interface HeavyProps3422 {
  config: DeepPartial3422<NestedConfig3422>;
  path?: ConfigPaths3422;
}

const HeavyComponent3422 = memo(function HeavyComponent3422({ config }: HeavyProps3422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3422.displayName = 'HeavyComponent3422';
export default HeavyComponent3422;
