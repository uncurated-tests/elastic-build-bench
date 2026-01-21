'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3795<T> = T extends (infer U)[]
  ? DeepReadonlyArray3795<U>
  : T extends object
  ? DeepReadonlyObject3795<T>
  : T;

interface DeepReadonlyArray3795<T> extends ReadonlyArray<DeepReadonly3795<T>> {}

type DeepReadonlyObject3795<T> = {
  readonly [P in keyof T]: DeepReadonly3795<T[P]>;
};

type UnionToIntersection3795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3795<T> = UnionToIntersection3795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3795<T extends unknown[], V> = [...T, V];

type TuplifyUnion3795<T, L = LastOf3795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3795<TuplifyUnion3795<Exclude<T, L>>, L>;

type DeepPartial3795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3795<T[P]> }
  : T;

type Paths3795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3795<K, Paths3795<T[K], Prev3795[D]>> : never }[keyof T]
  : never;

type Prev3795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3795 {
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

type ConfigPaths3795 = Paths3795<NestedConfig3795>;

interface HeavyProps3795 {
  config: DeepPartial3795<NestedConfig3795>;
  path?: ConfigPaths3795;
}

const HeavyComponent3795 = memo(function HeavyComponent3795({ config }: HeavyProps3795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3795.displayName = 'HeavyComponent3795';
export default HeavyComponent3795;
