'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3456<T> = T extends (infer U)[]
  ? DeepReadonlyArray3456<U>
  : T extends object
  ? DeepReadonlyObject3456<T>
  : T;

interface DeepReadonlyArray3456<T> extends ReadonlyArray<DeepReadonly3456<T>> {}

type DeepReadonlyObject3456<T> = {
  readonly [P in keyof T]: DeepReadonly3456<T[P]>;
};

type UnionToIntersection3456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3456<T> = UnionToIntersection3456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3456<T extends unknown[], V> = [...T, V];

type TuplifyUnion3456<T, L = LastOf3456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3456<TuplifyUnion3456<Exclude<T, L>>, L>;

type DeepPartial3456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3456<T[P]> }
  : T;

type Paths3456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3456<K, Paths3456<T[K], Prev3456[D]>> : never }[keyof T]
  : never;

type Prev3456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3456 {
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

type ConfigPaths3456 = Paths3456<NestedConfig3456>;

interface HeavyProps3456 {
  config: DeepPartial3456<NestedConfig3456>;
  path?: ConfigPaths3456;
}

const HeavyComponent3456 = memo(function HeavyComponent3456({ config }: HeavyProps3456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3456.displayName = 'HeavyComponent3456';
export default HeavyComponent3456;
