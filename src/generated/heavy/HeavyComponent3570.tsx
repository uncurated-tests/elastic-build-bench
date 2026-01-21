'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3570<T> = T extends (infer U)[]
  ? DeepReadonlyArray3570<U>
  : T extends object
  ? DeepReadonlyObject3570<T>
  : T;

interface DeepReadonlyArray3570<T> extends ReadonlyArray<DeepReadonly3570<T>> {}

type DeepReadonlyObject3570<T> = {
  readonly [P in keyof T]: DeepReadonly3570<T[P]>;
};

type UnionToIntersection3570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3570<T> = UnionToIntersection3570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3570<T extends unknown[], V> = [...T, V];

type TuplifyUnion3570<T, L = LastOf3570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3570<TuplifyUnion3570<Exclude<T, L>>, L>;

type DeepPartial3570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3570<T[P]> }
  : T;

type Paths3570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3570<K, Paths3570<T[K], Prev3570[D]>> : never }[keyof T]
  : never;

type Prev3570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3570 {
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

type ConfigPaths3570 = Paths3570<NestedConfig3570>;

interface HeavyProps3570 {
  config: DeepPartial3570<NestedConfig3570>;
  path?: ConfigPaths3570;
}

const HeavyComponent3570 = memo(function HeavyComponent3570({ config }: HeavyProps3570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3570.displayName = 'HeavyComponent3570';
export default HeavyComponent3570;
