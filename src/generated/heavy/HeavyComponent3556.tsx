'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3556<T> = T extends (infer U)[]
  ? DeepReadonlyArray3556<U>
  : T extends object
  ? DeepReadonlyObject3556<T>
  : T;

interface DeepReadonlyArray3556<T> extends ReadonlyArray<DeepReadonly3556<T>> {}

type DeepReadonlyObject3556<T> = {
  readonly [P in keyof T]: DeepReadonly3556<T[P]>;
};

type UnionToIntersection3556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3556<T> = UnionToIntersection3556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3556<T extends unknown[], V> = [...T, V];

type TuplifyUnion3556<T, L = LastOf3556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3556<TuplifyUnion3556<Exclude<T, L>>, L>;

type DeepPartial3556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3556<T[P]> }
  : T;

type Paths3556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3556<K, Paths3556<T[K], Prev3556[D]>> : never }[keyof T]
  : never;

type Prev3556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3556 {
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

type ConfigPaths3556 = Paths3556<NestedConfig3556>;

interface HeavyProps3556 {
  config: DeepPartial3556<NestedConfig3556>;
  path?: ConfigPaths3556;
}

const HeavyComponent3556 = memo(function HeavyComponent3556({ config }: HeavyProps3556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3556.displayName = 'HeavyComponent3556';
export default HeavyComponent3556;
