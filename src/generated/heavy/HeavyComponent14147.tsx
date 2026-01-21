'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14147<T> = T extends (infer U)[]
  ? DeepReadonlyArray14147<U>
  : T extends object
  ? DeepReadonlyObject14147<T>
  : T;

interface DeepReadonlyArray14147<T> extends ReadonlyArray<DeepReadonly14147<T>> {}

type DeepReadonlyObject14147<T> = {
  readonly [P in keyof T]: DeepReadonly14147<T[P]>;
};

type UnionToIntersection14147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14147<T> = UnionToIntersection14147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14147<T extends unknown[], V> = [...T, V];

type TuplifyUnion14147<T, L = LastOf14147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14147<TuplifyUnion14147<Exclude<T, L>>, L>;

type DeepPartial14147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14147<T[P]> }
  : T;

type Paths14147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14147<K, Paths14147<T[K], Prev14147[D]>> : never }[keyof T]
  : never;

type Prev14147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14147 {
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

type ConfigPaths14147 = Paths14147<NestedConfig14147>;

interface HeavyProps14147 {
  config: DeepPartial14147<NestedConfig14147>;
  path?: ConfigPaths14147;
}

const HeavyComponent14147 = memo(function HeavyComponent14147({ config }: HeavyProps14147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14147.displayName = 'HeavyComponent14147';
export default HeavyComponent14147;
