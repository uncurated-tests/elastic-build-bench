'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14181<T> = T extends (infer U)[]
  ? DeepReadonlyArray14181<U>
  : T extends object
  ? DeepReadonlyObject14181<T>
  : T;

interface DeepReadonlyArray14181<T> extends ReadonlyArray<DeepReadonly14181<T>> {}

type DeepReadonlyObject14181<T> = {
  readonly [P in keyof T]: DeepReadonly14181<T[P]>;
};

type UnionToIntersection14181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14181<T> = UnionToIntersection14181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14181<T extends unknown[], V> = [...T, V];

type TuplifyUnion14181<T, L = LastOf14181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14181<TuplifyUnion14181<Exclude<T, L>>, L>;

type DeepPartial14181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14181<T[P]> }
  : T;

type Paths14181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14181<K, Paths14181<T[K], Prev14181[D]>> : never }[keyof T]
  : never;

type Prev14181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14181 {
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

type ConfigPaths14181 = Paths14181<NestedConfig14181>;

interface HeavyProps14181 {
  config: DeepPartial14181<NestedConfig14181>;
  path?: ConfigPaths14181;
}

const HeavyComponent14181 = memo(function HeavyComponent14181({ config }: HeavyProps14181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14181.displayName = 'HeavyComponent14181';
export default HeavyComponent14181;
