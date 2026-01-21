'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3261<T> = T extends (infer U)[]
  ? DeepReadonlyArray3261<U>
  : T extends object
  ? DeepReadonlyObject3261<T>
  : T;

interface DeepReadonlyArray3261<T> extends ReadonlyArray<DeepReadonly3261<T>> {}

type DeepReadonlyObject3261<T> = {
  readonly [P in keyof T]: DeepReadonly3261<T[P]>;
};

type UnionToIntersection3261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3261<T> = UnionToIntersection3261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3261<T extends unknown[], V> = [...T, V];

type TuplifyUnion3261<T, L = LastOf3261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3261<TuplifyUnion3261<Exclude<T, L>>, L>;

type DeepPartial3261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3261<T[P]> }
  : T;

type Paths3261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3261<K, Paths3261<T[K], Prev3261[D]>> : never }[keyof T]
  : never;

type Prev3261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3261 {
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

type ConfigPaths3261 = Paths3261<NestedConfig3261>;

interface HeavyProps3261 {
  config: DeepPartial3261<NestedConfig3261>;
  path?: ConfigPaths3261;
}

const HeavyComponent3261 = memo(function HeavyComponent3261({ config }: HeavyProps3261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3261.displayName = 'HeavyComponent3261';
export default HeavyComponent3261;
