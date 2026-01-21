'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3790<T> = T extends (infer U)[]
  ? DeepReadonlyArray3790<U>
  : T extends object
  ? DeepReadonlyObject3790<T>
  : T;

interface DeepReadonlyArray3790<T> extends ReadonlyArray<DeepReadonly3790<T>> {}

type DeepReadonlyObject3790<T> = {
  readonly [P in keyof T]: DeepReadonly3790<T[P]>;
};

type UnionToIntersection3790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3790<T> = UnionToIntersection3790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3790<T extends unknown[], V> = [...T, V];

type TuplifyUnion3790<T, L = LastOf3790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3790<TuplifyUnion3790<Exclude<T, L>>, L>;

type DeepPartial3790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3790<T[P]> }
  : T;

type Paths3790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3790<K, Paths3790<T[K], Prev3790[D]>> : never }[keyof T]
  : never;

type Prev3790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3790 {
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

type ConfigPaths3790 = Paths3790<NestedConfig3790>;

interface HeavyProps3790 {
  config: DeepPartial3790<NestedConfig3790>;
  path?: ConfigPaths3790;
}

const HeavyComponent3790 = memo(function HeavyComponent3790({ config }: HeavyProps3790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3790.displayName = 'HeavyComponent3790';
export default HeavyComponent3790;
