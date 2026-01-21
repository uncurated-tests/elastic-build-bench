'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3617<T> = T extends (infer U)[]
  ? DeepReadonlyArray3617<U>
  : T extends object
  ? DeepReadonlyObject3617<T>
  : T;

interface DeepReadonlyArray3617<T> extends ReadonlyArray<DeepReadonly3617<T>> {}

type DeepReadonlyObject3617<T> = {
  readonly [P in keyof T]: DeepReadonly3617<T[P]>;
};

type UnionToIntersection3617<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3617<T> = UnionToIntersection3617<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3617<T extends unknown[], V> = [...T, V];

type TuplifyUnion3617<T, L = LastOf3617<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3617<TuplifyUnion3617<Exclude<T, L>>, L>;

type DeepPartial3617<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3617<T[P]> }
  : T;

type Paths3617<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3617<K, Paths3617<T[K], Prev3617[D]>> : never }[keyof T]
  : never;

type Prev3617 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3617<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3617 {
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

type ConfigPaths3617 = Paths3617<NestedConfig3617>;

interface HeavyProps3617 {
  config: DeepPartial3617<NestedConfig3617>;
  path?: ConfigPaths3617;
}

const HeavyComponent3617 = memo(function HeavyComponent3617({ config }: HeavyProps3617) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3617) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3617 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3617: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3617.displayName = 'HeavyComponent3617';
export default HeavyComponent3617;
