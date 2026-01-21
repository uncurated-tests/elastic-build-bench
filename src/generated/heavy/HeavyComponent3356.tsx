'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3356<T> = T extends (infer U)[]
  ? DeepReadonlyArray3356<U>
  : T extends object
  ? DeepReadonlyObject3356<T>
  : T;

interface DeepReadonlyArray3356<T> extends ReadonlyArray<DeepReadonly3356<T>> {}

type DeepReadonlyObject3356<T> = {
  readonly [P in keyof T]: DeepReadonly3356<T[P]>;
};

type UnionToIntersection3356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3356<T> = UnionToIntersection3356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3356<T extends unknown[], V> = [...T, V];

type TuplifyUnion3356<T, L = LastOf3356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3356<TuplifyUnion3356<Exclude<T, L>>, L>;

type DeepPartial3356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3356<T[P]> }
  : T;

type Paths3356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3356<K, Paths3356<T[K], Prev3356[D]>> : never }[keyof T]
  : never;

type Prev3356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3356 {
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

type ConfigPaths3356 = Paths3356<NestedConfig3356>;

interface HeavyProps3356 {
  config: DeepPartial3356<NestedConfig3356>;
  path?: ConfigPaths3356;
}

const HeavyComponent3356 = memo(function HeavyComponent3356({ config }: HeavyProps3356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3356.displayName = 'HeavyComponent3356';
export default HeavyComponent3356;
