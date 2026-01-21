'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3274<T> = T extends (infer U)[]
  ? DeepReadonlyArray3274<U>
  : T extends object
  ? DeepReadonlyObject3274<T>
  : T;

interface DeepReadonlyArray3274<T> extends ReadonlyArray<DeepReadonly3274<T>> {}

type DeepReadonlyObject3274<T> = {
  readonly [P in keyof T]: DeepReadonly3274<T[P]>;
};

type UnionToIntersection3274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3274<T> = UnionToIntersection3274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3274<T extends unknown[], V> = [...T, V];

type TuplifyUnion3274<T, L = LastOf3274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3274<TuplifyUnion3274<Exclude<T, L>>, L>;

type DeepPartial3274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3274<T[P]> }
  : T;

type Paths3274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3274<K, Paths3274<T[K], Prev3274[D]>> : never }[keyof T]
  : never;

type Prev3274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3274 {
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

type ConfigPaths3274 = Paths3274<NestedConfig3274>;

interface HeavyProps3274 {
  config: DeepPartial3274<NestedConfig3274>;
  path?: ConfigPaths3274;
}

const HeavyComponent3274 = memo(function HeavyComponent3274({ config }: HeavyProps3274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3274.displayName = 'HeavyComponent3274';
export default HeavyComponent3274;
