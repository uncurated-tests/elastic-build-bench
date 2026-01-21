'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3196<T> = T extends (infer U)[]
  ? DeepReadonlyArray3196<U>
  : T extends object
  ? DeepReadonlyObject3196<T>
  : T;

interface DeepReadonlyArray3196<T> extends ReadonlyArray<DeepReadonly3196<T>> {}

type DeepReadonlyObject3196<T> = {
  readonly [P in keyof T]: DeepReadonly3196<T[P]>;
};

type UnionToIntersection3196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3196<T> = UnionToIntersection3196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3196<T extends unknown[], V> = [...T, V];

type TuplifyUnion3196<T, L = LastOf3196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3196<TuplifyUnion3196<Exclude<T, L>>, L>;

type DeepPartial3196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3196<T[P]> }
  : T;

type Paths3196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3196<K, Paths3196<T[K], Prev3196[D]>> : never }[keyof T]
  : never;

type Prev3196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3196 {
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

type ConfigPaths3196 = Paths3196<NestedConfig3196>;

interface HeavyProps3196 {
  config: DeepPartial3196<NestedConfig3196>;
  path?: ConfigPaths3196;
}

const HeavyComponent3196 = memo(function HeavyComponent3196({ config }: HeavyProps3196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3196.displayName = 'HeavyComponent3196';
export default HeavyComponent3196;
