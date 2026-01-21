'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14574<T> = T extends (infer U)[]
  ? DeepReadonlyArray14574<U>
  : T extends object
  ? DeepReadonlyObject14574<T>
  : T;

interface DeepReadonlyArray14574<T> extends ReadonlyArray<DeepReadonly14574<T>> {}

type DeepReadonlyObject14574<T> = {
  readonly [P in keyof T]: DeepReadonly14574<T[P]>;
};

type UnionToIntersection14574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14574<T> = UnionToIntersection14574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14574<T extends unknown[], V> = [...T, V];

type TuplifyUnion14574<T, L = LastOf14574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14574<TuplifyUnion14574<Exclude<T, L>>, L>;

type DeepPartial14574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14574<T[P]> }
  : T;

type Paths14574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14574<K, Paths14574<T[K], Prev14574[D]>> : never }[keyof T]
  : never;

type Prev14574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14574 {
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

type ConfigPaths14574 = Paths14574<NestedConfig14574>;

interface HeavyProps14574 {
  config: DeepPartial14574<NestedConfig14574>;
  path?: ConfigPaths14574;
}

const HeavyComponent14574 = memo(function HeavyComponent14574({ config }: HeavyProps14574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14574.displayName = 'HeavyComponent14574';
export default HeavyComponent14574;
