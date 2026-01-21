'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly272<T> = T extends (infer U)[]
  ? DeepReadonlyArray272<U>
  : T extends object
  ? DeepReadonlyObject272<T>
  : T;

interface DeepReadonlyArray272<T> extends ReadonlyArray<DeepReadonly272<T>> {}

type DeepReadonlyObject272<T> = {
  readonly [P in keyof T]: DeepReadonly272<T[P]>;
};

type UnionToIntersection272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf272<T> = UnionToIntersection272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push272<T extends unknown[], V> = [...T, V];

type TuplifyUnion272<T, L = LastOf272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push272<TuplifyUnion272<Exclude<T, L>>, L>;

type DeepPartial272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial272<T[P]> }
  : T;

type Paths272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join272<K, Paths272<T[K], Prev272[D]>> : never }[keyof T]
  : never;

type Prev272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig272 {
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

type ConfigPaths272 = Paths272<NestedConfig272>;

interface HeavyProps272 {
  config: DeepPartial272<NestedConfig272>;
  path?: ConfigPaths272;
}

const HeavyComponent272 = memo(function HeavyComponent272({ config }: HeavyProps272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent272.displayName = 'HeavyComponent272';
export default HeavyComponent272;
