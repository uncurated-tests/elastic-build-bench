'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3002<T> = T extends (infer U)[]
  ? DeepReadonlyArray3002<U>
  : T extends object
  ? DeepReadonlyObject3002<T>
  : T;

interface DeepReadonlyArray3002<T> extends ReadonlyArray<DeepReadonly3002<T>> {}

type DeepReadonlyObject3002<T> = {
  readonly [P in keyof T]: DeepReadonly3002<T[P]>;
};

type UnionToIntersection3002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3002<T> = UnionToIntersection3002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3002<T extends unknown[], V> = [...T, V];

type TuplifyUnion3002<T, L = LastOf3002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3002<TuplifyUnion3002<Exclude<T, L>>, L>;

type DeepPartial3002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3002<T[P]> }
  : T;

type Paths3002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3002<K, Paths3002<T[K], Prev3002[D]>> : never }[keyof T]
  : never;

type Prev3002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3002 {
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

type ConfigPaths3002 = Paths3002<NestedConfig3002>;

interface HeavyProps3002 {
  config: DeepPartial3002<NestedConfig3002>;
  path?: ConfigPaths3002;
}

const HeavyComponent3002 = memo(function HeavyComponent3002({ config }: HeavyProps3002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3002.displayName = 'HeavyComponent3002';
export default HeavyComponent3002;
