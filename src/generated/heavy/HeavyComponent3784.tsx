'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3784<T> = T extends (infer U)[]
  ? DeepReadonlyArray3784<U>
  : T extends object
  ? DeepReadonlyObject3784<T>
  : T;

interface DeepReadonlyArray3784<T> extends ReadonlyArray<DeepReadonly3784<T>> {}

type DeepReadonlyObject3784<T> = {
  readonly [P in keyof T]: DeepReadonly3784<T[P]>;
};

type UnionToIntersection3784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3784<T> = UnionToIntersection3784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3784<T extends unknown[], V> = [...T, V];

type TuplifyUnion3784<T, L = LastOf3784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3784<TuplifyUnion3784<Exclude<T, L>>, L>;

type DeepPartial3784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3784<T[P]> }
  : T;

type Paths3784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3784<K, Paths3784<T[K], Prev3784[D]>> : never }[keyof T]
  : never;

type Prev3784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3784 {
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

type ConfigPaths3784 = Paths3784<NestedConfig3784>;

interface HeavyProps3784 {
  config: DeepPartial3784<NestedConfig3784>;
  path?: ConfigPaths3784;
}

const HeavyComponent3784 = memo(function HeavyComponent3784({ config }: HeavyProps3784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3784.displayName = 'HeavyComponent3784';
export default HeavyComponent3784;
