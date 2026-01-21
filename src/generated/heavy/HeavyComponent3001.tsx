'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3001<T> = T extends (infer U)[]
  ? DeepReadonlyArray3001<U>
  : T extends object
  ? DeepReadonlyObject3001<T>
  : T;

interface DeepReadonlyArray3001<T> extends ReadonlyArray<DeepReadonly3001<T>> {}

type DeepReadonlyObject3001<T> = {
  readonly [P in keyof T]: DeepReadonly3001<T[P]>;
};

type UnionToIntersection3001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3001<T> = UnionToIntersection3001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3001<T extends unknown[], V> = [...T, V];

type TuplifyUnion3001<T, L = LastOf3001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3001<TuplifyUnion3001<Exclude<T, L>>, L>;

type DeepPartial3001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3001<T[P]> }
  : T;

type Paths3001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3001<K, Paths3001<T[K], Prev3001[D]>> : never }[keyof T]
  : never;

type Prev3001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3001 {
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

type ConfigPaths3001 = Paths3001<NestedConfig3001>;

interface HeavyProps3001 {
  config: DeepPartial3001<NestedConfig3001>;
  path?: ConfigPaths3001;
}

const HeavyComponent3001 = memo(function HeavyComponent3001({ config }: HeavyProps3001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3001.displayName = 'HeavyComponent3001';
export default HeavyComponent3001;
