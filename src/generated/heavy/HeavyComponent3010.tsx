'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3010<T> = T extends (infer U)[]
  ? DeepReadonlyArray3010<U>
  : T extends object
  ? DeepReadonlyObject3010<T>
  : T;

interface DeepReadonlyArray3010<T> extends ReadonlyArray<DeepReadonly3010<T>> {}

type DeepReadonlyObject3010<T> = {
  readonly [P in keyof T]: DeepReadonly3010<T[P]>;
};

type UnionToIntersection3010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3010<T> = UnionToIntersection3010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3010<T extends unknown[], V> = [...T, V];

type TuplifyUnion3010<T, L = LastOf3010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3010<TuplifyUnion3010<Exclude<T, L>>, L>;

type DeepPartial3010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3010<T[P]> }
  : T;

type Paths3010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3010<K, Paths3010<T[K], Prev3010[D]>> : never }[keyof T]
  : never;

type Prev3010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3010 {
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

type ConfigPaths3010 = Paths3010<NestedConfig3010>;

interface HeavyProps3010 {
  config: DeepPartial3010<NestedConfig3010>;
  path?: ConfigPaths3010;
}

const HeavyComponent3010 = memo(function HeavyComponent3010({ config }: HeavyProps3010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3010.displayName = 'HeavyComponent3010';
export default HeavyComponent3010;
