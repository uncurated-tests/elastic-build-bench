'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14666<T> = T extends (infer U)[]
  ? DeepReadonlyArray14666<U>
  : T extends object
  ? DeepReadonlyObject14666<T>
  : T;

interface DeepReadonlyArray14666<T> extends ReadonlyArray<DeepReadonly14666<T>> {}

type DeepReadonlyObject14666<T> = {
  readonly [P in keyof T]: DeepReadonly14666<T[P]>;
};

type UnionToIntersection14666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14666<T> = UnionToIntersection14666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14666<T extends unknown[], V> = [...T, V];

type TuplifyUnion14666<T, L = LastOf14666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14666<TuplifyUnion14666<Exclude<T, L>>, L>;

type DeepPartial14666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14666<T[P]> }
  : T;

type Paths14666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14666<K, Paths14666<T[K], Prev14666[D]>> : never }[keyof T]
  : never;

type Prev14666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14666 {
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

type ConfigPaths14666 = Paths14666<NestedConfig14666>;

interface HeavyProps14666 {
  config: DeepPartial14666<NestedConfig14666>;
  path?: ConfigPaths14666;
}

const HeavyComponent14666 = memo(function HeavyComponent14666({ config }: HeavyProps14666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14666.displayName = 'HeavyComponent14666';
export default HeavyComponent14666;
