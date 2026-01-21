'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3070<T> = T extends (infer U)[]
  ? DeepReadonlyArray3070<U>
  : T extends object
  ? DeepReadonlyObject3070<T>
  : T;

interface DeepReadonlyArray3070<T> extends ReadonlyArray<DeepReadonly3070<T>> {}

type DeepReadonlyObject3070<T> = {
  readonly [P in keyof T]: DeepReadonly3070<T[P]>;
};

type UnionToIntersection3070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3070<T> = UnionToIntersection3070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3070<T extends unknown[], V> = [...T, V];

type TuplifyUnion3070<T, L = LastOf3070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3070<TuplifyUnion3070<Exclude<T, L>>, L>;

type DeepPartial3070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3070<T[P]> }
  : T;

type Paths3070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3070<K, Paths3070<T[K], Prev3070[D]>> : never }[keyof T]
  : never;

type Prev3070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3070 {
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

type ConfigPaths3070 = Paths3070<NestedConfig3070>;

interface HeavyProps3070 {
  config: DeepPartial3070<NestedConfig3070>;
  path?: ConfigPaths3070;
}

const HeavyComponent3070 = memo(function HeavyComponent3070({ config }: HeavyProps3070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3070.displayName = 'HeavyComponent3070';
export default HeavyComponent3070;
