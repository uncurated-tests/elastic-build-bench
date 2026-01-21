'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3987<T> = T extends (infer U)[]
  ? DeepReadonlyArray3987<U>
  : T extends object
  ? DeepReadonlyObject3987<T>
  : T;

interface DeepReadonlyArray3987<T> extends ReadonlyArray<DeepReadonly3987<T>> {}

type DeepReadonlyObject3987<T> = {
  readonly [P in keyof T]: DeepReadonly3987<T[P]>;
};

type UnionToIntersection3987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3987<T> = UnionToIntersection3987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3987<T extends unknown[], V> = [...T, V];

type TuplifyUnion3987<T, L = LastOf3987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3987<TuplifyUnion3987<Exclude<T, L>>, L>;

type DeepPartial3987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3987<T[P]> }
  : T;

type Paths3987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3987<K, Paths3987<T[K], Prev3987[D]>> : never }[keyof T]
  : never;

type Prev3987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3987 {
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

type ConfigPaths3987 = Paths3987<NestedConfig3987>;

interface HeavyProps3987 {
  config: DeepPartial3987<NestedConfig3987>;
  path?: ConfigPaths3987;
}

const HeavyComponent3987 = memo(function HeavyComponent3987({ config }: HeavyProps3987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3987.displayName = 'HeavyComponent3987';
export default HeavyComponent3987;
