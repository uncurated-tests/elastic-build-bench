'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3071<T> = T extends (infer U)[]
  ? DeepReadonlyArray3071<U>
  : T extends object
  ? DeepReadonlyObject3071<T>
  : T;

interface DeepReadonlyArray3071<T> extends ReadonlyArray<DeepReadonly3071<T>> {}

type DeepReadonlyObject3071<T> = {
  readonly [P in keyof T]: DeepReadonly3071<T[P]>;
};

type UnionToIntersection3071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3071<T> = UnionToIntersection3071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3071<T extends unknown[], V> = [...T, V];

type TuplifyUnion3071<T, L = LastOf3071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3071<TuplifyUnion3071<Exclude<T, L>>, L>;

type DeepPartial3071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3071<T[P]> }
  : T;

type Paths3071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3071<K, Paths3071<T[K], Prev3071[D]>> : never }[keyof T]
  : never;

type Prev3071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3071 {
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

type ConfigPaths3071 = Paths3071<NestedConfig3071>;

interface HeavyProps3071 {
  config: DeepPartial3071<NestedConfig3071>;
  path?: ConfigPaths3071;
}

const HeavyComponent3071 = memo(function HeavyComponent3071({ config }: HeavyProps3071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3071.displayName = 'HeavyComponent3071';
export default HeavyComponent3071;
