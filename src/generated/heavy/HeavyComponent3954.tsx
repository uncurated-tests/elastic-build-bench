'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3954<T> = T extends (infer U)[]
  ? DeepReadonlyArray3954<U>
  : T extends object
  ? DeepReadonlyObject3954<T>
  : T;

interface DeepReadonlyArray3954<T> extends ReadonlyArray<DeepReadonly3954<T>> {}

type DeepReadonlyObject3954<T> = {
  readonly [P in keyof T]: DeepReadonly3954<T[P]>;
};

type UnionToIntersection3954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3954<T> = UnionToIntersection3954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3954<T extends unknown[], V> = [...T, V];

type TuplifyUnion3954<T, L = LastOf3954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3954<TuplifyUnion3954<Exclude<T, L>>, L>;

type DeepPartial3954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3954<T[P]> }
  : T;

type Paths3954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3954<K, Paths3954<T[K], Prev3954[D]>> : never }[keyof T]
  : never;

type Prev3954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3954 {
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

type ConfigPaths3954 = Paths3954<NestedConfig3954>;

interface HeavyProps3954 {
  config: DeepPartial3954<NestedConfig3954>;
  path?: ConfigPaths3954;
}

const HeavyComponent3954 = memo(function HeavyComponent3954({ config }: HeavyProps3954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3954.displayName = 'HeavyComponent3954';
export default HeavyComponent3954;
