'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3732<T> = T extends (infer U)[]
  ? DeepReadonlyArray3732<U>
  : T extends object
  ? DeepReadonlyObject3732<T>
  : T;

interface DeepReadonlyArray3732<T> extends ReadonlyArray<DeepReadonly3732<T>> {}

type DeepReadonlyObject3732<T> = {
  readonly [P in keyof T]: DeepReadonly3732<T[P]>;
};

type UnionToIntersection3732<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3732<T> = UnionToIntersection3732<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3732<T extends unknown[], V> = [...T, V];

type TuplifyUnion3732<T, L = LastOf3732<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3732<TuplifyUnion3732<Exclude<T, L>>, L>;

type DeepPartial3732<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3732<T[P]> }
  : T;

type Paths3732<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3732<K, Paths3732<T[K], Prev3732[D]>> : never }[keyof T]
  : never;

type Prev3732 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3732<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3732 {
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

type ConfigPaths3732 = Paths3732<NestedConfig3732>;

interface HeavyProps3732 {
  config: DeepPartial3732<NestedConfig3732>;
  path?: ConfigPaths3732;
}

const HeavyComponent3732 = memo(function HeavyComponent3732({ config }: HeavyProps3732) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3732) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3732 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3732: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3732.displayName = 'HeavyComponent3732';
export default HeavyComponent3732;
