'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3063<T> = T extends (infer U)[]
  ? DeepReadonlyArray3063<U>
  : T extends object
  ? DeepReadonlyObject3063<T>
  : T;

interface DeepReadonlyArray3063<T> extends ReadonlyArray<DeepReadonly3063<T>> {}

type DeepReadonlyObject3063<T> = {
  readonly [P in keyof T]: DeepReadonly3063<T[P]>;
};

type UnionToIntersection3063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3063<T> = UnionToIntersection3063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3063<T extends unknown[], V> = [...T, V];

type TuplifyUnion3063<T, L = LastOf3063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3063<TuplifyUnion3063<Exclude<T, L>>, L>;

type DeepPartial3063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3063<T[P]> }
  : T;

type Paths3063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3063<K, Paths3063<T[K], Prev3063[D]>> : never }[keyof T]
  : never;

type Prev3063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3063 {
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

type ConfigPaths3063 = Paths3063<NestedConfig3063>;

interface HeavyProps3063 {
  config: DeepPartial3063<NestedConfig3063>;
  path?: ConfigPaths3063;
}

const HeavyComponent3063 = memo(function HeavyComponent3063({ config }: HeavyProps3063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3063.displayName = 'HeavyComponent3063';
export default HeavyComponent3063;
