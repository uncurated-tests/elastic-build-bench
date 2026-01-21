'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14414<T> = T extends (infer U)[]
  ? DeepReadonlyArray14414<U>
  : T extends object
  ? DeepReadonlyObject14414<T>
  : T;

interface DeepReadonlyArray14414<T> extends ReadonlyArray<DeepReadonly14414<T>> {}

type DeepReadonlyObject14414<T> = {
  readonly [P in keyof T]: DeepReadonly14414<T[P]>;
};

type UnionToIntersection14414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14414<T> = UnionToIntersection14414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14414<T extends unknown[], V> = [...T, V];

type TuplifyUnion14414<T, L = LastOf14414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14414<TuplifyUnion14414<Exclude<T, L>>, L>;

type DeepPartial14414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14414<T[P]> }
  : T;

type Paths14414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14414<K, Paths14414<T[K], Prev14414[D]>> : never }[keyof T]
  : never;

type Prev14414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14414 {
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

type ConfigPaths14414 = Paths14414<NestedConfig14414>;

interface HeavyProps14414 {
  config: DeepPartial14414<NestedConfig14414>;
  path?: ConfigPaths14414;
}

const HeavyComponent14414 = memo(function HeavyComponent14414({ config }: HeavyProps14414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14414.displayName = 'HeavyComponent14414';
export default HeavyComponent14414;
