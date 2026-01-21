'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3611<T> = T extends (infer U)[]
  ? DeepReadonlyArray3611<U>
  : T extends object
  ? DeepReadonlyObject3611<T>
  : T;

interface DeepReadonlyArray3611<T> extends ReadonlyArray<DeepReadonly3611<T>> {}

type DeepReadonlyObject3611<T> = {
  readonly [P in keyof T]: DeepReadonly3611<T[P]>;
};

type UnionToIntersection3611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3611<T> = UnionToIntersection3611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3611<T extends unknown[], V> = [...T, V];

type TuplifyUnion3611<T, L = LastOf3611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3611<TuplifyUnion3611<Exclude<T, L>>, L>;

type DeepPartial3611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3611<T[P]> }
  : T;

type Paths3611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3611<K, Paths3611<T[K], Prev3611[D]>> : never }[keyof T]
  : never;

type Prev3611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3611 {
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

type ConfigPaths3611 = Paths3611<NestedConfig3611>;

interface HeavyProps3611 {
  config: DeepPartial3611<NestedConfig3611>;
  path?: ConfigPaths3611;
}

const HeavyComponent3611 = memo(function HeavyComponent3611({ config }: HeavyProps3611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3611.displayName = 'HeavyComponent3611';
export default HeavyComponent3611;
