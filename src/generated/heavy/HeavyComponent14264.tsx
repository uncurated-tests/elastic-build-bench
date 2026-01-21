'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14264<T> = T extends (infer U)[]
  ? DeepReadonlyArray14264<U>
  : T extends object
  ? DeepReadonlyObject14264<T>
  : T;

interface DeepReadonlyArray14264<T> extends ReadonlyArray<DeepReadonly14264<T>> {}

type DeepReadonlyObject14264<T> = {
  readonly [P in keyof T]: DeepReadonly14264<T[P]>;
};

type UnionToIntersection14264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14264<T> = UnionToIntersection14264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14264<T extends unknown[], V> = [...T, V];

type TuplifyUnion14264<T, L = LastOf14264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14264<TuplifyUnion14264<Exclude<T, L>>, L>;

type DeepPartial14264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14264<T[P]> }
  : T;

type Paths14264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14264<K, Paths14264<T[K], Prev14264[D]>> : never }[keyof T]
  : never;

type Prev14264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14264 {
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

type ConfigPaths14264 = Paths14264<NestedConfig14264>;

interface HeavyProps14264 {
  config: DeepPartial14264<NestedConfig14264>;
  path?: ConfigPaths14264;
}

const HeavyComponent14264 = memo(function HeavyComponent14264({ config }: HeavyProps14264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14264.displayName = 'HeavyComponent14264';
export default HeavyComponent14264;
