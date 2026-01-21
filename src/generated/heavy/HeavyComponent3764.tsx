'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3764<T> = T extends (infer U)[]
  ? DeepReadonlyArray3764<U>
  : T extends object
  ? DeepReadonlyObject3764<T>
  : T;

interface DeepReadonlyArray3764<T> extends ReadonlyArray<DeepReadonly3764<T>> {}

type DeepReadonlyObject3764<T> = {
  readonly [P in keyof T]: DeepReadonly3764<T[P]>;
};

type UnionToIntersection3764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3764<T> = UnionToIntersection3764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3764<T extends unknown[], V> = [...T, V];

type TuplifyUnion3764<T, L = LastOf3764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3764<TuplifyUnion3764<Exclude<T, L>>, L>;

type DeepPartial3764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3764<T[P]> }
  : T;

type Paths3764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3764<K, Paths3764<T[K], Prev3764[D]>> : never }[keyof T]
  : never;

type Prev3764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3764 {
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

type ConfigPaths3764 = Paths3764<NestedConfig3764>;

interface HeavyProps3764 {
  config: DeepPartial3764<NestedConfig3764>;
  path?: ConfigPaths3764;
}

const HeavyComponent3764 = memo(function HeavyComponent3764({ config }: HeavyProps3764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3764.displayName = 'HeavyComponent3764';
export default HeavyComponent3764;
