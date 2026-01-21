'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3681<T> = T extends (infer U)[]
  ? DeepReadonlyArray3681<U>
  : T extends object
  ? DeepReadonlyObject3681<T>
  : T;

interface DeepReadonlyArray3681<T> extends ReadonlyArray<DeepReadonly3681<T>> {}

type DeepReadonlyObject3681<T> = {
  readonly [P in keyof T]: DeepReadonly3681<T[P]>;
};

type UnionToIntersection3681<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3681<T> = UnionToIntersection3681<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3681<T extends unknown[], V> = [...T, V];

type TuplifyUnion3681<T, L = LastOf3681<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3681<TuplifyUnion3681<Exclude<T, L>>, L>;

type DeepPartial3681<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3681<T[P]> }
  : T;

type Paths3681<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3681<K, Paths3681<T[K], Prev3681[D]>> : never }[keyof T]
  : never;

type Prev3681 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3681<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3681 {
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

type ConfigPaths3681 = Paths3681<NestedConfig3681>;

interface HeavyProps3681 {
  config: DeepPartial3681<NestedConfig3681>;
  path?: ConfigPaths3681;
}

const HeavyComponent3681 = memo(function HeavyComponent3681({ config }: HeavyProps3681) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3681) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3681 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3681: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3681.displayName = 'HeavyComponent3681';
export default HeavyComponent3681;
