'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3705<T> = T extends (infer U)[]
  ? DeepReadonlyArray3705<U>
  : T extends object
  ? DeepReadonlyObject3705<T>
  : T;

interface DeepReadonlyArray3705<T> extends ReadonlyArray<DeepReadonly3705<T>> {}

type DeepReadonlyObject3705<T> = {
  readonly [P in keyof T]: DeepReadonly3705<T[P]>;
};

type UnionToIntersection3705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3705<T> = UnionToIntersection3705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3705<T extends unknown[], V> = [...T, V];

type TuplifyUnion3705<T, L = LastOf3705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3705<TuplifyUnion3705<Exclude<T, L>>, L>;

type DeepPartial3705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3705<T[P]> }
  : T;

type Paths3705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3705<K, Paths3705<T[K], Prev3705[D]>> : never }[keyof T]
  : never;

type Prev3705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3705 {
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

type ConfigPaths3705 = Paths3705<NestedConfig3705>;

interface HeavyProps3705 {
  config: DeepPartial3705<NestedConfig3705>;
  path?: ConfigPaths3705;
}

const HeavyComponent3705 = memo(function HeavyComponent3705({ config }: HeavyProps3705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3705.displayName = 'HeavyComponent3705';
export default HeavyComponent3705;
