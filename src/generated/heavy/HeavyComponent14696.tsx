'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14696<T> = T extends (infer U)[]
  ? DeepReadonlyArray14696<U>
  : T extends object
  ? DeepReadonlyObject14696<T>
  : T;

interface DeepReadonlyArray14696<T> extends ReadonlyArray<DeepReadonly14696<T>> {}

type DeepReadonlyObject14696<T> = {
  readonly [P in keyof T]: DeepReadonly14696<T[P]>;
};

type UnionToIntersection14696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14696<T> = UnionToIntersection14696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14696<T extends unknown[], V> = [...T, V];

type TuplifyUnion14696<T, L = LastOf14696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14696<TuplifyUnion14696<Exclude<T, L>>, L>;

type DeepPartial14696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14696<T[P]> }
  : T;

type Paths14696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14696<K, Paths14696<T[K], Prev14696[D]>> : never }[keyof T]
  : never;

type Prev14696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14696 {
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

type ConfigPaths14696 = Paths14696<NestedConfig14696>;

interface HeavyProps14696 {
  config: DeepPartial14696<NestedConfig14696>;
  path?: ConfigPaths14696;
}

const HeavyComponent14696 = memo(function HeavyComponent14696({ config }: HeavyProps14696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14696.displayName = 'HeavyComponent14696';
export default HeavyComponent14696;
