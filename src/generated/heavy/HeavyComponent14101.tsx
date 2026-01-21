'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14101<T> = T extends (infer U)[]
  ? DeepReadonlyArray14101<U>
  : T extends object
  ? DeepReadonlyObject14101<T>
  : T;

interface DeepReadonlyArray14101<T> extends ReadonlyArray<DeepReadonly14101<T>> {}

type DeepReadonlyObject14101<T> = {
  readonly [P in keyof T]: DeepReadonly14101<T[P]>;
};

type UnionToIntersection14101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14101<T> = UnionToIntersection14101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14101<T extends unknown[], V> = [...T, V];

type TuplifyUnion14101<T, L = LastOf14101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14101<TuplifyUnion14101<Exclude<T, L>>, L>;

type DeepPartial14101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14101<T[P]> }
  : T;

type Paths14101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14101<K, Paths14101<T[K], Prev14101[D]>> : never }[keyof T]
  : never;

type Prev14101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14101 {
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

type ConfigPaths14101 = Paths14101<NestedConfig14101>;

interface HeavyProps14101 {
  config: DeepPartial14101<NestedConfig14101>;
  path?: ConfigPaths14101;
}

const HeavyComponent14101 = memo(function HeavyComponent14101({ config }: HeavyProps14101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14101.displayName = 'HeavyComponent14101';
export default HeavyComponent14101;
