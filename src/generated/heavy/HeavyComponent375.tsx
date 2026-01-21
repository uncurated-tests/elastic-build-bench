'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly375<T> = T extends (infer U)[]
  ? DeepReadonlyArray375<U>
  : T extends object
  ? DeepReadonlyObject375<T>
  : T;

interface DeepReadonlyArray375<T> extends ReadonlyArray<DeepReadonly375<T>> {}

type DeepReadonlyObject375<T> = {
  readonly [P in keyof T]: DeepReadonly375<T[P]>;
};

type UnionToIntersection375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf375<T> = UnionToIntersection375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push375<T extends unknown[], V> = [...T, V];

type TuplifyUnion375<T, L = LastOf375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push375<TuplifyUnion375<Exclude<T, L>>, L>;

type DeepPartial375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial375<T[P]> }
  : T;

type Paths375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join375<K, Paths375<T[K], Prev375[D]>> : never }[keyof T]
  : never;

type Prev375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig375 {
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

type ConfigPaths375 = Paths375<NestedConfig375>;

interface HeavyProps375 {
  config: DeepPartial375<NestedConfig375>;
  path?: ConfigPaths375;
}

const HeavyComponent375 = memo(function HeavyComponent375({ config }: HeavyProps375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent375.displayName = 'HeavyComponent375';
export default HeavyComponent375;
