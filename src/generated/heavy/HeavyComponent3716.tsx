'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3716<T> = T extends (infer U)[]
  ? DeepReadonlyArray3716<U>
  : T extends object
  ? DeepReadonlyObject3716<T>
  : T;

interface DeepReadonlyArray3716<T> extends ReadonlyArray<DeepReadonly3716<T>> {}

type DeepReadonlyObject3716<T> = {
  readonly [P in keyof T]: DeepReadonly3716<T[P]>;
};

type UnionToIntersection3716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3716<T> = UnionToIntersection3716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3716<T extends unknown[], V> = [...T, V];

type TuplifyUnion3716<T, L = LastOf3716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3716<TuplifyUnion3716<Exclude<T, L>>, L>;

type DeepPartial3716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3716<T[P]> }
  : T;

type Paths3716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3716<K, Paths3716<T[K], Prev3716[D]>> : never }[keyof T]
  : never;

type Prev3716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3716 {
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

type ConfigPaths3716 = Paths3716<NestedConfig3716>;

interface HeavyProps3716 {
  config: DeepPartial3716<NestedConfig3716>;
  path?: ConfigPaths3716;
}

const HeavyComponent3716 = memo(function HeavyComponent3716({ config }: HeavyProps3716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3716.displayName = 'HeavyComponent3716';
export default HeavyComponent3716;
