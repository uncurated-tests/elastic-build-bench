'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14097<T> = T extends (infer U)[]
  ? DeepReadonlyArray14097<U>
  : T extends object
  ? DeepReadonlyObject14097<T>
  : T;

interface DeepReadonlyArray14097<T> extends ReadonlyArray<DeepReadonly14097<T>> {}

type DeepReadonlyObject14097<T> = {
  readonly [P in keyof T]: DeepReadonly14097<T[P]>;
};

type UnionToIntersection14097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14097<T> = UnionToIntersection14097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14097<T extends unknown[], V> = [...T, V];

type TuplifyUnion14097<T, L = LastOf14097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14097<TuplifyUnion14097<Exclude<T, L>>, L>;

type DeepPartial14097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14097<T[P]> }
  : T;

type Paths14097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14097<K, Paths14097<T[K], Prev14097[D]>> : never }[keyof T]
  : never;

type Prev14097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14097 {
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

type ConfigPaths14097 = Paths14097<NestedConfig14097>;

interface HeavyProps14097 {
  config: DeepPartial14097<NestedConfig14097>;
  path?: ConfigPaths14097;
}

const HeavyComponent14097 = memo(function HeavyComponent14097({ config }: HeavyProps14097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14097.displayName = 'HeavyComponent14097';
export default HeavyComponent14097;
