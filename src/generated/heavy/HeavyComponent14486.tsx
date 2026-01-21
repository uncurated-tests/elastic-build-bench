'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14486<T> = T extends (infer U)[]
  ? DeepReadonlyArray14486<U>
  : T extends object
  ? DeepReadonlyObject14486<T>
  : T;

interface DeepReadonlyArray14486<T> extends ReadonlyArray<DeepReadonly14486<T>> {}

type DeepReadonlyObject14486<T> = {
  readonly [P in keyof T]: DeepReadonly14486<T[P]>;
};

type UnionToIntersection14486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14486<T> = UnionToIntersection14486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14486<T extends unknown[], V> = [...T, V];

type TuplifyUnion14486<T, L = LastOf14486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14486<TuplifyUnion14486<Exclude<T, L>>, L>;

type DeepPartial14486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14486<T[P]> }
  : T;

type Paths14486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14486<K, Paths14486<T[K], Prev14486[D]>> : never }[keyof T]
  : never;

type Prev14486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14486 {
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

type ConfigPaths14486 = Paths14486<NestedConfig14486>;

interface HeavyProps14486 {
  config: DeepPartial14486<NestedConfig14486>;
  path?: ConfigPaths14486;
}

const HeavyComponent14486 = memo(function HeavyComponent14486({ config }: HeavyProps14486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14486.displayName = 'HeavyComponent14486';
export default HeavyComponent14486;
