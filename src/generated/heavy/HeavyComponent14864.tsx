'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14864<T> = T extends (infer U)[]
  ? DeepReadonlyArray14864<U>
  : T extends object
  ? DeepReadonlyObject14864<T>
  : T;

interface DeepReadonlyArray14864<T> extends ReadonlyArray<DeepReadonly14864<T>> {}

type DeepReadonlyObject14864<T> = {
  readonly [P in keyof T]: DeepReadonly14864<T[P]>;
};

type UnionToIntersection14864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14864<T> = UnionToIntersection14864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14864<T extends unknown[], V> = [...T, V];

type TuplifyUnion14864<T, L = LastOf14864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14864<TuplifyUnion14864<Exclude<T, L>>, L>;

type DeepPartial14864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14864<T[P]> }
  : T;

type Paths14864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14864<K, Paths14864<T[K], Prev14864[D]>> : never }[keyof T]
  : never;

type Prev14864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14864 {
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

type ConfigPaths14864 = Paths14864<NestedConfig14864>;

interface HeavyProps14864 {
  config: DeepPartial14864<NestedConfig14864>;
  path?: ConfigPaths14864;
}

const HeavyComponent14864 = memo(function HeavyComponent14864({ config }: HeavyProps14864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14864.displayName = 'HeavyComponent14864';
export default HeavyComponent14864;
