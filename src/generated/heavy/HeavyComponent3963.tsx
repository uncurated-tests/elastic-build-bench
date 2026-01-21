'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3963<T> = T extends (infer U)[]
  ? DeepReadonlyArray3963<U>
  : T extends object
  ? DeepReadonlyObject3963<T>
  : T;

interface DeepReadonlyArray3963<T> extends ReadonlyArray<DeepReadonly3963<T>> {}

type DeepReadonlyObject3963<T> = {
  readonly [P in keyof T]: DeepReadonly3963<T[P]>;
};

type UnionToIntersection3963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3963<T> = UnionToIntersection3963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3963<T extends unknown[], V> = [...T, V];

type TuplifyUnion3963<T, L = LastOf3963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3963<TuplifyUnion3963<Exclude<T, L>>, L>;

type DeepPartial3963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3963<T[P]> }
  : T;

type Paths3963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3963<K, Paths3963<T[K], Prev3963[D]>> : never }[keyof T]
  : never;

type Prev3963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3963 {
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

type ConfigPaths3963 = Paths3963<NestedConfig3963>;

interface HeavyProps3963 {
  config: DeepPartial3963<NestedConfig3963>;
  path?: ConfigPaths3963;
}

const HeavyComponent3963 = memo(function HeavyComponent3963({ config }: HeavyProps3963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3963.displayName = 'HeavyComponent3963';
export default HeavyComponent3963;
