'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly200<T> = T extends (infer U)[]
  ? DeepReadonlyArray200<U>
  : T extends object
  ? DeepReadonlyObject200<T>
  : T;

interface DeepReadonlyArray200<T> extends ReadonlyArray<DeepReadonly200<T>> {}

type DeepReadonlyObject200<T> = {
  readonly [P in keyof T]: DeepReadonly200<T[P]>;
};

type UnionToIntersection200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf200<T> = UnionToIntersection200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push200<T extends unknown[], V> = [...T, V];

type TuplifyUnion200<T, L = LastOf200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push200<TuplifyUnion200<Exclude<T, L>>, L>;

type DeepPartial200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial200<T[P]> }
  : T;

type Paths200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join200<K, Paths200<T[K], Prev200[D]>> : never }[keyof T]
  : never;

type Prev200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig200 {
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

type ConfigPaths200 = Paths200<NestedConfig200>;

interface HeavyProps200 {
  config: DeepPartial200<NestedConfig200>;
  path?: ConfigPaths200;
}

const HeavyComponent200 = memo(function HeavyComponent200({ config }: HeavyProps200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent200.displayName = 'HeavyComponent200';
export default HeavyComponent200;
