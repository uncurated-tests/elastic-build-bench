'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3595<T> = T extends (infer U)[]
  ? DeepReadonlyArray3595<U>
  : T extends object
  ? DeepReadonlyObject3595<T>
  : T;

interface DeepReadonlyArray3595<T> extends ReadonlyArray<DeepReadonly3595<T>> {}

type DeepReadonlyObject3595<T> = {
  readonly [P in keyof T]: DeepReadonly3595<T[P]>;
};

type UnionToIntersection3595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3595<T> = UnionToIntersection3595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3595<T extends unknown[], V> = [...T, V];

type TuplifyUnion3595<T, L = LastOf3595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3595<TuplifyUnion3595<Exclude<T, L>>, L>;

type DeepPartial3595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3595<T[P]> }
  : T;

type Paths3595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3595<K, Paths3595<T[K], Prev3595[D]>> : never }[keyof T]
  : never;

type Prev3595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3595 {
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

type ConfigPaths3595 = Paths3595<NestedConfig3595>;

interface HeavyProps3595 {
  config: DeepPartial3595<NestedConfig3595>;
  path?: ConfigPaths3595;
}

const HeavyComponent3595 = memo(function HeavyComponent3595({ config }: HeavyProps3595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3595.displayName = 'HeavyComponent3595';
export default HeavyComponent3595;
