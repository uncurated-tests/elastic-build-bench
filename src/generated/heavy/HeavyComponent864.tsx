'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly864<T> = T extends (infer U)[]
  ? DeepReadonlyArray864<U>
  : T extends object
  ? DeepReadonlyObject864<T>
  : T;

interface DeepReadonlyArray864<T> extends ReadonlyArray<DeepReadonly864<T>> {}

type DeepReadonlyObject864<T> = {
  readonly [P in keyof T]: DeepReadonly864<T[P]>;
};

type UnionToIntersection864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf864<T> = UnionToIntersection864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push864<T extends unknown[], V> = [...T, V];

type TuplifyUnion864<T, L = LastOf864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push864<TuplifyUnion864<Exclude<T, L>>, L>;

type DeepPartial864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial864<T[P]> }
  : T;

type Paths864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join864<K, Paths864<T[K], Prev864[D]>> : never }[keyof T]
  : never;

type Prev864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig864 {
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

type ConfigPaths864 = Paths864<NestedConfig864>;

interface HeavyProps864 {
  config: DeepPartial864<NestedConfig864>;
  path?: ConfigPaths864;
}

const HeavyComponent864 = memo(function HeavyComponent864({ config }: HeavyProps864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent864.displayName = 'HeavyComponent864';
export default HeavyComponent864;
