'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14854<T> = T extends (infer U)[]
  ? DeepReadonlyArray14854<U>
  : T extends object
  ? DeepReadonlyObject14854<T>
  : T;

interface DeepReadonlyArray14854<T> extends ReadonlyArray<DeepReadonly14854<T>> {}

type DeepReadonlyObject14854<T> = {
  readonly [P in keyof T]: DeepReadonly14854<T[P]>;
};

type UnionToIntersection14854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14854<T> = UnionToIntersection14854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14854<T extends unknown[], V> = [...T, V];

type TuplifyUnion14854<T, L = LastOf14854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14854<TuplifyUnion14854<Exclude<T, L>>, L>;

type DeepPartial14854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14854<T[P]> }
  : T;

type Paths14854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14854<K, Paths14854<T[K], Prev14854[D]>> : never }[keyof T]
  : never;

type Prev14854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14854 {
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

type ConfigPaths14854 = Paths14854<NestedConfig14854>;

interface HeavyProps14854 {
  config: DeepPartial14854<NestedConfig14854>;
  path?: ConfigPaths14854;
}

const HeavyComponent14854 = memo(function HeavyComponent14854({ config }: HeavyProps14854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14854.displayName = 'HeavyComponent14854';
export default HeavyComponent14854;
