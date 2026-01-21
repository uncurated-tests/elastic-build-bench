'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3416<T> = T extends (infer U)[]
  ? DeepReadonlyArray3416<U>
  : T extends object
  ? DeepReadonlyObject3416<T>
  : T;

interface DeepReadonlyArray3416<T> extends ReadonlyArray<DeepReadonly3416<T>> {}

type DeepReadonlyObject3416<T> = {
  readonly [P in keyof T]: DeepReadonly3416<T[P]>;
};

type UnionToIntersection3416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3416<T> = UnionToIntersection3416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3416<T extends unknown[], V> = [...T, V];

type TuplifyUnion3416<T, L = LastOf3416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3416<TuplifyUnion3416<Exclude<T, L>>, L>;

type DeepPartial3416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3416<T[P]> }
  : T;

type Paths3416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3416<K, Paths3416<T[K], Prev3416[D]>> : never }[keyof T]
  : never;

type Prev3416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3416 {
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

type ConfigPaths3416 = Paths3416<NestedConfig3416>;

interface HeavyProps3416 {
  config: DeepPartial3416<NestedConfig3416>;
  path?: ConfigPaths3416;
}

const HeavyComponent3416 = memo(function HeavyComponent3416({ config }: HeavyProps3416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3416.displayName = 'HeavyComponent3416';
export default HeavyComponent3416;
