'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14026<T> = T extends (infer U)[]
  ? DeepReadonlyArray14026<U>
  : T extends object
  ? DeepReadonlyObject14026<T>
  : T;

interface DeepReadonlyArray14026<T> extends ReadonlyArray<DeepReadonly14026<T>> {}

type DeepReadonlyObject14026<T> = {
  readonly [P in keyof T]: DeepReadonly14026<T[P]>;
};

type UnionToIntersection14026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14026<T> = UnionToIntersection14026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14026<T extends unknown[], V> = [...T, V];

type TuplifyUnion14026<T, L = LastOf14026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14026<TuplifyUnion14026<Exclude<T, L>>, L>;

type DeepPartial14026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14026<T[P]> }
  : T;

type Paths14026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14026<K, Paths14026<T[K], Prev14026[D]>> : never }[keyof T]
  : never;

type Prev14026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14026 {
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

type ConfigPaths14026 = Paths14026<NestedConfig14026>;

interface HeavyProps14026 {
  config: DeepPartial14026<NestedConfig14026>;
  path?: ConfigPaths14026;
}

const HeavyComponent14026 = memo(function HeavyComponent14026({ config }: HeavyProps14026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14026.displayName = 'HeavyComponent14026';
export default HeavyComponent14026;
