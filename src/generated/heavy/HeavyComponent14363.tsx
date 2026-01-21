'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14363<T> = T extends (infer U)[]
  ? DeepReadonlyArray14363<U>
  : T extends object
  ? DeepReadonlyObject14363<T>
  : T;

interface DeepReadonlyArray14363<T> extends ReadonlyArray<DeepReadonly14363<T>> {}

type DeepReadonlyObject14363<T> = {
  readonly [P in keyof T]: DeepReadonly14363<T[P]>;
};

type UnionToIntersection14363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14363<T> = UnionToIntersection14363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14363<T extends unknown[], V> = [...T, V];

type TuplifyUnion14363<T, L = LastOf14363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14363<TuplifyUnion14363<Exclude<T, L>>, L>;

type DeepPartial14363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14363<T[P]> }
  : T;

type Paths14363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14363<K, Paths14363<T[K], Prev14363[D]>> : never }[keyof T]
  : never;

type Prev14363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14363 {
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

type ConfigPaths14363 = Paths14363<NestedConfig14363>;

interface HeavyProps14363 {
  config: DeepPartial14363<NestedConfig14363>;
  path?: ConfigPaths14363;
}

const HeavyComponent14363 = memo(function HeavyComponent14363({ config }: HeavyProps14363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14363.displayName = 'HeavyComponent14363';
export default HeavyComponent14363;
