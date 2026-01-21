'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14827<T> = T extends (infer U)[]
  ? DeepReadonlyArray14827<U>
  : T extends object
  ? DeepReadonlyObject14827<T>
  : T;

interface DeepReadonlyArray14827<T> extends ReadonlyArray<DeepReadonly14827<T>> {}

type DeepReadonlyObject14827<T> = {
  readonly [P in keyof T]: DeepReadonly14827<T[P]>;
};

type UnionToIntersection14827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14827<T> = UnionToIntersection14827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14827<T extends unknown[], V> = [...T, V];

type TuplifyUnion14827<T, L = LastOf14827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14827<TuplifyUnion14827<Exclude<T, L>>, L>;

type DeepPartial14827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14827<T[P]> }
  : T;

type Paths14827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14827<K, Paths14827<T[K], Prev14827[D]>> : never }[keyof T]
  : never;

type Prev14827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14827 {
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

type ConfigPaths14827 = Paths14827<NestedConfig14827>;

interface HeavyProps14827 {
  config: DeepPartial14827<NestedConfig14827>;
  path?: ConfigPaths14827;
}

const HeavyComponent14827 = memo(function HeavyComponent14827({ config }: HeavyProps14827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14827.displayName = 'HeavyComponent14827';
export default HeavyComponent14827;
