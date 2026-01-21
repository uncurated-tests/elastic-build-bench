'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14062<T> = T extends (infer U)[]
  ? DeepReadonlyArray14062<U>
  : T extends object
  ? DeepReadonlyObject14062<T>
  : T;

interface DeepReadonlyArray14062<T> extends ReadonlyArray<DeepReadonly14062<T>> {}

type DeepReadonlyObject14062<T> = {
  readonly [P in keyof T]: DeepReadonly14062<T[P]>;
};

type UnionToIntersection14062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14062<T> = UnionToIntersection14062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14062<T extends unknown[], V> = [...T, V];

type TuplifyUnion14062<T, L = LastOf14062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14062<TuplifyUnion14062<Exclude<T, L>>, L>;

type DeepPartial14062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14062<T[P]> }
  : T;

type Paths14062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14062<K, Paths14062<T[K], Prev14062[D]>> : never }[keyof T]
  : never;

type Prev14062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14062 {
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

type ConfigPaths14062 = Paths14062<NestedConfig14062>;

interface HeavyProps14062 {
  config: DeepPartial14062<NestedConfig14062>;
  path?: ConfigPaths14062;
}

const HeavyComponent14062 = memo(function HeavyComponent14062({ config }: HeavyProps14062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14062.displayName = 'HeavyComponent14062';
export default HeavyComponent14062;
