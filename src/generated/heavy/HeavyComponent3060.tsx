'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3060<T> = T extends (infer U)[]
  ? DeepReadonlyArray3060<U>
  : T extends object
  ? DeepReadonlyObject3060<T>
  : T;

interface DeepReadonlyArray3060<T> extends ReadonlyArray<DeepReadonly3060<T>> {}

type DeepReadonlyObject3060<T> = {
  readonly [P in keyof T]: DeepReadonly3060<T[P]>;
};

type UnionToIntersection3060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3060<T> = UnionToIntersection3060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3060<T extends unknown[], V> = [...T, V];

type TuplifyUnion3060<T, L = LastOf3060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3060<TuplifyUnion3060<Exclude<T, L>>, L>;

type DeepPartial3060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3060<T[P]> }
  : T;

type Paths3060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3060<K, Paths3060<T[K], Prev3060[D]>> : never }[keyof T]
  : never;

type Prev3060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3060 {
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

type ConfigPaths3060 = Paths3060<NestedConfig3060>;

interface HeavyProps3060 {
  config: DeepPartial3060<NestedConfig3060>;
  path?: ConfigPaths3060;
}

const HeavyComponent3060 = memo(function HeavyComponent3060({ config }: HeavyProps3060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3060.displayName = 'HeavyComponent3060';
export default HeavyComponent3060;
