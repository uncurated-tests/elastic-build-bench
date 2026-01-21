'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3948<T> = T extends (infer U)[]
  ? DeepReadonlyArray3948<U>
  : T extends object
  ? DeepReadonlyObject3948<T>
  : T;

interface DeepReadonlyArray3948<T> extends ReadonlyArray<DeepReadonly3948<T>> {}

type DeepReadonlyObject3948<T> = {
  readonly [P in keyof T]: DeepReadonly3948<T[P]>;
};

type UnionToIntersection3948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3948<T> = UnionToIntersection3948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3948<T extends unknown[], V> = [...T, V];

type TuplifyUnion3948<T, L = LastOf3948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3948<TuplifyUnion3948<Exclude<T, L>>, L>;

type DeepPartial3948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3948<T[P]> }
  : T;

type Paths3948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3948<K, Paths3948<T[K], Prev3948[D]>> : never }[keyof T]
  : never;

type Prev3948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3948 {
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

type ConfigPaths3948 = Paths3948<NestedConfig3948>;

interface HeavyProps3948 {
  config: DeepPartial3948<NestedConfig3948>;
  path?: ConfigPaths3948;
}

const HeavyComponent3948 = memo(function HeavyComponent3948({ config }: HeavyProps3948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3948.displayName = 'HeavyComponent3948';
export default HeavyComponent3948;
