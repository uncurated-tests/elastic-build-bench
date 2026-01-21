'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3787<T> = T extends (infer U)[]
  ? DeepReadonlyArray3787<U>
  : T extends object
  ? DeepReadonlyObject3787<T>
  : T;

interface DeepReadonlyArray3787<T> extends ReadonlyArray<DeepReadonly3787<T>> {}

type DeepReadonlyObject3787<T> = {
  readonly [P in keyof T]: DeepReadonly3787<T[P]>;
};

type UnionToIntersection3787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3787<T> = UnionToIntersection3787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3787<T extends unknown[], V> = [...T, V];

type TuplifyUnion3787<T, L = LastOf3787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3787<TuplifyUnion3787<Exclude<T, L>>, L>;

type DeepPartial3787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3787<T[P]> }
  : T;

type Paths3787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3787<K, Paths3787<T[K], Prev3787[D]>> : never }[keyof T]
  : never;

type Prev3787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3787 {
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

type ConfigPaths3787 = Paths3787<NestedConfig3787>;

interface HeavyProps3787 {
  config: DeepPartial3787<NestedConfig3787>;
  path?: ConfigPaths3787;
}

const HeavyComponent3787 = memo(function HeavyComponent3787({ config }: HeavyProps3787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3787.displayName = 'HeavyComponent3787';
export default HeavyComponent3787;
