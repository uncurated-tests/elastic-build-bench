'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3558<T> = T extends (infer U)[]
  ? DeepReadonlyArray3558<U>
  : T extends object
  ? DeepReadonlyObject3558<T>
  : T;

interface DeepReadonlyArray3558<T> extends ReadonlyArray<DeepReadonly3558<T>> {}

type DeepReadonlyObject3558<T> = {
  readonly [P in keyof T]: DeepReadonly3558<T[P]>;
};

type UnionToIntersection3558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3558<T> = UnionToIntersection3558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3558<T extends unknown[], V> = [...T, V];

type TuplifyUnion3558<T, L = LastOf3558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3558<TuplifyUnion3558<Exclude<T, L>>, L>;

type DeepPartial3558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3558<T[P]> }
  : T;

type Paths3558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3558<K, Paths3558<T[K], Prev3558[D]>> : never }[keyof T]
  : never;

type Prev3558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3558 {
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

type ConfigPaths3558 = Paths3558<NestedConfig3558>;

interface HeavyProps3558 {
  config: DeepPartial3558<NestedConfig3558>;
  path?: ConfigPaths3558;
}

const HeavyComponent3558 = memo(function HeavyComponent3558({ config }: HeavyProps3558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3558.displayName = 'HeavyComponent3558';
export default HeavyComponent3558;
