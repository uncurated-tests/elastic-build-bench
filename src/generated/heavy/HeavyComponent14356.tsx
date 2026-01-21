'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14356<T> = T extends (infer U)[]
  ? DeepReadonlyArray14356<U>
  : T extends object
  ? DeepReadonlyObject14356<T>
  : T;

interface DeepReadonlyArray14356<T> extends ReadonlyArray<DeepReadonly14356<T>> {}

type DeepReadonlyObject14356<T> = {
  readonly [P in keyof T]: DeepReadonly14356<T[P]>;
};

type UnionToIntersection14356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14356<T> = UnionToIntersection14356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14356<T extends unknown[], V> = [...T, V];

type TuplifyUnion14356<T, L = LastOf14356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14356<TuplifyUnion14356<Exclude<T, L>>, L>;

type DeepPartial14356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14356<T[P]> }
  : T;

type Paths14356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14356<K, Paths14356<T[K], Prev14356[D]>> : never }[keyof T]
  : never;

type Prev14356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14356 {
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

type ConfigPaths14356 = Paths14356<NestedConfig14356>;

interface HeavyProps14356 {
  config: DeepPartial14356<NestedConfig14356>;
  path?: ConfigPaths14356;
}

const HeavyComponent14356 = memo(function HeavyComponent14356({ config }: HeavyProps14356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14356.displayName = 'HeavyComponent14356';
export default HeavyComponent14356;
