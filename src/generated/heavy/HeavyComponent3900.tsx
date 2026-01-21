'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3900<T> = T extends (infer U)[]
  ? DeepReadonlyArray3900<U>
  : T extends object
  ? DeepReadonlyObject3900<T>
  : T;

interface DeepReadonlyArray3900<T> extends ReadonlyArray<DeepReadonly3900<T>> {}

type DeepReadonlyObject3900<T> = {
  readonly [P in keyof T]: DeepReadonly3900<T[P]>;
};

type UnionToIntersection3900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3900<T> = UnionToIntersection3900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3900<T extends unknown[], V> = [...T, V];

type TuplifyUnion3900<T, L = LastOf3900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3900<TuplifyUnion3900<Exclude<T, L>>, L>;

type DeepPartial3900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3900<T[P]> }
  : T;

type Paths3900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3900<K, Paths3900<T[K], Prev3900[D]>> : never }[keyof T]
  : never;

type Prev3900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3900 {
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

type ConfigPaths3900 = Paths3900<NestedConfig3900>;

interface HeavyProps3900 {
  config: DeepPartial3900<NestedConfig3900>;
  path?: ConfigPaths3900;
}

const HeavyComponent3900 = memo(function HeavyComponent3900({ config }: HeavyProps3900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3900.displayName = 'HeavyComponent3900';
export default HeavyComponent3900;
