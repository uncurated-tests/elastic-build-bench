'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3106<T> = T extends (infer U)[]
  ? DeepReadonlyArray3106<U>
  : T extends object
  ? DeepReadonlyObject3106<T>
  : T;

interface DeepReadonlyArray3106<T> extends ReadonlyArray<DeepReadonly3106<T>> {}

type DeepReadonlyObject3106<T> = {
  readonly [P in keyof T]: DeepReadonly3106<T[P]>;
};

type UnionToIntersection3106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3106<T> = UnionToIntersection3106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3106<T extends unknown[], V> = [...T, V];

type TuplifyUnion3106<T, L = LastOf3106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3106<TuplifyUnion3106<Exclude<T, L>>, L>;

type DeepPartial3106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3106<T[P]> }
  : T;

type Paths3106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3106<K, Paths3106<T[K], Prev3106[D]>> : never }[keyof T]
  : never;

type Prev3106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3106 {
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

type ConfigPaths3106 = Paths3106<NestedConfig3106>;

interface HeavyProps3106 {
  config: DeepPartial3106<NestedConfig3106>;
  path?: ConfigPaths3106;
}

const HeavyComponent3106 = memo(function HeavyComponent3106({ config }: HeavyProps3106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3106.displayName = 'HeavyComponent3106';
export default HeavyComponent3106;
