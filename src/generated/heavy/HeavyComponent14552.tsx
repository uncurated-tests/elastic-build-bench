'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14552<T> = T extends (infer U)[]
  ? DeepReadonlyArray14552<U>
  : T extends object
  ? DeepReadonlyObject14552<T>
  : T;

interface DeepReadonlyArray14552<T> extends ReadonlyArray<DeepReadonly14552<T>> {}

type DeepReadonlyObject14552<T> = {
  readonly [P in keyof T]: DeepReadonly14552<T[P]>;
};

type UnionToIntersection14552<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14552<T> = UnionToIntersection14552<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14552<T extends unknown[], V> = [...T, V];

type TuplifyUnion14552<T, L = LastOf14552<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14552<TuplifyUnion14552<Exclude<T, L>>, L>;

type DeepPartial14552<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14552<T[P]> }
  : T;

type Paths14552<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14552<K, Paths14552<T[K], Prev14552[D]>> : never }[keyof T]
  : never;

type Prev14552 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14552<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14552 {
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

type ConfigPaths14552 = Paths14552<NestedConfig14552>;

interface HeavyProps14552 {
  config: DeepPartial14552<NestedConfig14552>;
  path?: ConfigPaths14552;
}

const HeavyComponent14552 = memo(function HeavyComponent14552({ config }: HeavyProps14552) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14552) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14552 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14552: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14552.displayName = 'HeavyComponent14552';
export default HeavyComponent14552;
