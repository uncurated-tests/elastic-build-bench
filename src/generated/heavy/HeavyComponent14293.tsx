'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14293<T> = T extends (infer U)[]
  ? DeepReadonlyArray14293<U>
  : T extends object
  ? DeepReadonlyObject14293<T>
  : T;

interface DeepReadonlyArray14293<T> extends ReadonlyArray<DeepReadonly14293<T>> {}

type DeepReadonlyObject14293<T> = {
  readonly [P in keyof T]: DeepReadonly14293<T[P]>;
};

type UnionToIntersection14293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14293<T> = UnionToIntersection14293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14293<T extends unknown[], V> = [...T, V];

type TuplifyUnion14293<T, L = LastOf14293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14293<TuplifyUnion14293<Exclude<T, L>>, L>;

type DeepPartial14293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14293<T[P]> }
  : T;

type Paths14293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14293<K, Paths14293<T[K], Prev14293[D]>> : never }[keyof T]
  : never;

type Prev14293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14293 {
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

type ConfigPaths14293 = Paths14293<NestedConfig14293>;

interface HeavyProps14293 {
  config: DeepPartial14293<NestedConfig14293>;
  path?: ConfigPaths14293;
}

const HeavyComponent14293 = memo(function HeavyComponent14293({ config }: HeavyProps14293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14293.displayName = 'HeavyComponent14293';
export default HeavyComponent14293;
