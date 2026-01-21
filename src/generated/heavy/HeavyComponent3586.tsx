'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3586<T> = T extends (infer U)[]
  ? DeepReadonlyArray3586<U>
  : T extends object
  ? DeepReadonlyObject3586<T>
  : T;

interface DeepReadonlyArray3586<T> extends ReadonlyArray<DeepReadonly3586<T>> {}

type DeepReadonlyObject3586<T> = {
  readonly [P in keyof T]: DeepReadonly3586<T[P]>;
};

type UnionToIntersection3586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3586<T> = UnionToIntersection3586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3586<T extends unknown[], V> = [...T, V];

type TuplifyUnion3586<T, L = LastOf3586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3586<TuplifyUnion3586<Exclude<T, L>>, L>;

type DeepPartial3586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3586<T[P]> }
  : T;

type Paths3586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3586<K, Paths3586<T[K], Prev3586[D]>> : never }[keyof T]
  : never;

type Prev3586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3586 {
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

type ConfigPaths3586 = Paths3586<NestedConfig3586>;

interface HeavyProps3586 {
  config: DeepPartial3586<NestedConfig3586>;
  path?: ConfigPaths3586;
}

const HeavyComponent3586 = memo(function HeavyComponent3586({ config }: HeavyProps3586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3586.displayName = 'HeavyComponent3586';
export default HeavyComponent3586;
