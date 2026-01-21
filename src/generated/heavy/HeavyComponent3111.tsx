'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3111<T> = T extends (infer U)[]
  ? DeepReadonlyArray3111<U>
  : T extends object
  ? DeepReadonlyObject3111<T>
  : T;

interface DeepReadonlyArray3111<T> extends ReadonlyArray<DeepReadonly3111<T>> {}

type DeepReadonlyObject3111<T> = {
  readonly [P in keyof T]: DeepReadonly3111<T[P]>;
};

type UnionToIntersection3111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3111<T> = UnionToIntersection3111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3111<T extends unknown[], V> = [...T, V];

type TuplifyUnion3111<T, L = LastOf3111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3111<TuplifyUnion3111<Exclude<T, L>>, L>;

type DeepPartial3111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3111<T[P]> }
  : T;

type Paths3111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3111<K, Paths3111<T[K], Prev3111[D]>> : never }[keyof T]
  : never;

type Prev3111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3111 {
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

type ConfigPaths3111 = Paths3111<NestedConfig3111>;

interface HeavyProps3111 {
  config: DeepPartial3111<NestedConfig3111>;
  path?: ConfigPaths3111;
}

const HeavyComponent3111 = memo(function HeavyComponent3111({ config }: HeavyProps3111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3111.displayName = 'HeavyComponent3111';
export default HeavyComponent3111;
