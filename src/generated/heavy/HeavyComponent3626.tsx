'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3626<T> = T extends (infer U)[]
  ? DeepReadonlyArray3626<U>
  : T extends object
  ? DeepReadonlyObject3626<T>
  : T;

interface DeepReadonlyArray3626<T> extends ReadonlyArray<DeepReadonly3626<T>> {}

type DeepReadonlyObject3626<T> = {
  readonly [P in keyof T]: DeepReadonly3626<T[P]>;
};

type UnionToIntersection3626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3626<T> = UnionToIntersection3626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3626<T extends unknown[], V> = [...T, V];

type TuplifyUnion3626<T, L = LastOf3626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3626<TuplifyUnion3626<Exclude<T, L>>, L>;

type DeepPartial3626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3626<T[P]> }
  : T;

type Paths3626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3626<K, Paths3626<T[K], Prev3626[D]>> : never }[keyof T]
  : never;

type Prev3626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3626 {
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

type ConfigPaths3626 = Paths3626<NestedConfig3626>;

interface HeavyProps3626 {
  config: DeepPartial3626<NestedConfig3626>;
  path?: ConfigPaths3626;
}

const HeavyComponent3626 = memo(function HeavyComponent3626({ config }: HeavyProps3626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3626.displayName = 'HeavyComponent3626';
export default HeavyComponent3626;
