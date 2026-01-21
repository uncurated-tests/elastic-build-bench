'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3887<T> = T extends (infer U)[]
  ? DeepReadonlyArray3887<U>
  : T extends object
  ? DeepReadonlyObject3887<T>
  : T;

interface DeepReadonlyArray3887<T> extends ReadonlyArray<DeepReadonly3887<T>> {}

type DeepReadonlyObject3887<T> = {
  readonly [P in keyof T]: DeepReadonly3887<T[P]>;
};

type UnionToIntersection3887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3887<T> = UnionToIntersection3887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3887<T extends unknown[], V> = [...T, V];

type TuplifyUnion3887<T, L = LastOf3887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3887<TuplifyUnion3887<Exclude<T, L>>, L>;

type DeepPartial3887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3887<T[P]> }
  : T;

type Paths3887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3887<K, Paths3887<T[K], Prev3887[D]>> : never }[keyof T]
  : never;

type Prev3887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3887 {
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

type ConfigPaths3887 = Paths3887<NestedConfig3887>;

interface HeavyProps3887 {
  config: DeepPartial3887<NestedConfig3887>;
  path?: ConfigPaths3887;
}

const HeavyComponent3887 = memo(function HeavyComponent3887({ config }: HeavyProps3887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3887.displayName = 'HeavyComponent3887';
export default HeavyComponent3887;
