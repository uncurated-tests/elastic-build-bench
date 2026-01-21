'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3193<T> = T extends (infer U)[]
  ? DeepReadonlyArray3193<U>
  : T extends object
  ? DeepReadonlyObject3193<T>
  : T;

interface DeepReadonlyArray3193<T> extends ReadonlyArray<DeepReadonly3193<T>> {}

type DeepReadonlyObject3193<T> = {
  readonly [P in keyof T]: DeepReadonly3193<T[P]>;
};

type UnionToIntersection3193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3193<T> = UnionToIntersection3193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3193<T extends unknown[], V> = [...T, V];

type TuplifyUnion3193<T, L = LastOf3193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3193<TuplifyUnion3193<Exclude<T, L>>, L>;

type DeepPartial3193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3193<T[P]> }
  : T;

type Paths3193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3193<K, Paths3193<T[K], Prev3193[D]>> : never }[keyof T]
  : never;

type Prev3193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3193 {
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

type ConfigPaths3193 = Paths3193<NestedConfig3193>;

interface HeavyProps3193 {
  config: DeepPartial3193<NestedConfig3193>;
  path?: ConfigPaths3193;
}

const HeavyComponent3193 = memo(function HeavyComponent3193({ config }: HeavyProps3193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3193.displayName = 'HeavyComponent3193';
export default HeavyComponent3193;
