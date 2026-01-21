'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14959<T> = T extends (infer U)[]
  ? DeepReadonlyArray14959<U>
  : T extends object
  ? DeepReadonlyObject14959<T>
  : T;

interface DeepReadonlyArray14959<T> extends ReadonlyArray<DeepReadonly14959<T>> {}

type DeepReadonlyObject14959<T> = {
  readonly [P in keyof T]: DeepReadonly14959<T[P]>;
};

type UnionToIntersection14959<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14959<T> = UnionToIntersection14959<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14959<T extends unknown[], V> = [...T, V];

type TuplifyUnion14959<T, L = LastOf14959<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14959<TuplifyUnion14959<Exclude<T, L>>, L>;

type DeepPartial14959<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14959<T[P]> }
  : T;

type Paths14959<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14959<K, Paths14959<T[K], Prev14959[D]>> : never }[keyof T]
  : never;

type Prev14959 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14959<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14959 {
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

type ConfigPaths14959 = Paths14959<NestedConfig14959>;

interface HeavyProps14959 {
  config: DeepPartial14959<NestedConfig14959>;
  path?: ConfigPaths14959;
}

const HeavyComponent14959 = memo(function HeavyComponent14959({ config }: HeavyProps14959) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14959) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14959 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14959: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14959.displayName = 'HeavyComponent14959';
export default HeavyComponent14959;
