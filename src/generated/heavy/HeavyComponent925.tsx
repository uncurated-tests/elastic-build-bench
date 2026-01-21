'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly925<T> = T extends (infer U)[]
  ? DeepReadonlyArray925<U>
  : T extends object
  ? DeepReadonlyObject925<T>
  : T;

interface DeepReadonlyArray925<T> extends ReadonlyArray<DeepReadonly925<T>> {}

type DeepReadonlyObject925<T> = {
  readonly [P in keyof T]: DeepReadonly925<T[P]>;
};

type UnionToIntersection925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf925<T> = UnionToIntersection925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push925<T extends unknown[], V> = [...T, V];

type TuplifyUnion925<T, L = LastOf925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push925<TuplifyUnion925<Exclude<T, L>>, L>;

type DeepPartial925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial925<T[P]> }
  : T;

type Paths925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join925<K, Paths925<T[K], Prev925[D]>> : never }[keyof T]
  : never;

type Prev925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig925 {
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

type ConfigPaths925 = Paths925<NestedConfig925>;

interface HeavyProps925 {
  config: DeepPartial925<NestedConfig925>;
  path?: ConfigPaths925;
}

const HeavyComponent925 = memo(function HeavyComponent925({ config }: HeavyProps925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent925.displayName = 'HeavyComponent925';
export default HeavyComponent925;
