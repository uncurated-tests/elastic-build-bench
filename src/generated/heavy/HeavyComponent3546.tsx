'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3546<T> = T extends (infer U)[]
  ? DeepReadonlyArray3546<U>
  : T extends object
  ? DeepReadonlyObject3546<T>
  : T;

interface DeepReadonlyArray3546<T> extends ReadonlyArray<DeepReadonly3546<T>> {}

type DeepReadonlyObject3546<T> = {
  readonly [P in keyof T]: DeepReadonly3546<T[P]>;
};

type UnionToIntersection3546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3546<T> = UnionToIntersection3546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3546<T extends unknown[], V> = [...T, V];

type TuplifyUnion3546<T, L = LastOf3546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3546<TuplifyUnion3546<Exclude<T, L>>, L>;

type DeepPartial3546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3546<T[P]> }
  : T;

type Paths3546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3546<K, Paths3546<T[K], Prev3546[D]>> : never }[keyof T]
  : never;

type Prev3546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3546 {
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

type ConfigPaths3546 = Paths3546<NestedConfig3546>;

interface HeavyProps3546 {
  config: DeepPartial3546<NestedConfig3546>;
  path?: ConfigPaths3546;
}

const HeavyComponent3546 = memo(function HeavyComponent3546({ config }: HeavyProps3546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3546.displayName = 'HeavyComponent3546';
export default HeavyComponent3546;
