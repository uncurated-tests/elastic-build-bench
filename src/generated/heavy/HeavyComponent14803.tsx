'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14803<T> = T extends (infer U)[]
  ? DeepReadonlyArray14803<U>
  : T extends object
  ? DeepReadonlyObject14803<T>
  : T;

interface DeepReadonlyArray14803<T> extends ReadonlyArray<DeepReadonly14803<T>> {}

type DeepReadonlyObject14803<T> = {
  readonly [P in keyof T]: DeepReadonly14803<T[P]>;
};

type UnionToIntersection14803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14803<T> = UnionToIntersection14803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14803<T extends unknown[], V> = [...T, V];

type TuplifyUnion14803<T, L = LastOf14803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14803<TuplifyUnion14803<Exclude<T, L>>, L>;

type DeepPartial14803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14803<T[P]> }
  : T;

type Paths14803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14803<K, Paths14803<T[K], Prev14803[D]>> : never }[keyof T]
  : never;

type Prev14803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14803 {
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

type ConfigPaths14803 = Paths14803<NestedConfig14803>;

interface HeavyProps14803 {
  config: DeepPartial14803<NestedConfig14803>;
  path?: ConfigPaths14803;
}

const HeavyComponent14803 = memo(function HeavyComponent14803({ config }: HeavyProps14803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14803.displayName = 'HeavyComponent14803';
export default HeavyComponent14803;
