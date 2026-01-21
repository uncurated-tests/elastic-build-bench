'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3966<T> = T extends (infer U)[]
  ? DeepReadonlyArray3966<U>
  : T extends object
  ? DeepReadonlyObject3966<T>
  : T;

interface DeepReadonlyArray3966<T> extends ReadonlyArray<DeepReadonly3966<T>> {}

type DeepReadonlyObject3966<T> = {
  readonly [P in keyof T]: DeepReadonly3966<T[P]>;
};

type UnionToIntersection3966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3966<T> = UnionToIntersection3966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3966<T extends unknown[], V> = [...T, V];

type TuplifyUnion3966<T, L = LastOf3966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3966<TuplifyUnion3966<Exclude<T, L>>, L>;

type DeepPartial3966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3966<T[P]> }
  : T;

type Paths3966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3966<K, Paths3966<T[K], Prev3966[D]>> : never }[keyof T]
  : never;

type Prev3966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3966 {
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

type ConfigPaths3966 = Paths3966<NestedConfig3966>;

interface HeavyProps3966 {
  config: DeepPartial3966<NestedConfig3966>;
  path?: ConfigPaths3966;
}

const HeavyComponent3966 = memo(function HeavyComponent3966({ config }: HeavyProps3966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3966.displayName = 'HeavyComponent3966';
export default HeavyComponent3966;
