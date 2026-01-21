'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14686<T> = T extends (infer U)[]
  ? DeepReadonlyArray14686<U>
  : T extends object
  ? DeepReadonlyObject14686<T>
  : T;

interface DeepReadonlyArray14686<T> extends ReadonlyArray<DeepReadonly14686<T>> {}

type DeepReadonlyObject14686<T> = {
  readonly [P in keyof T]: DeepReadonly14686<T[P]>;
};

type UnionToIntersection14686<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14686<T> = UnionToIntersection14686<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14686<T extends unknown[], V> = [...T, V];

type TuplifyUnion14686<T, L = LastOf14686<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14686<TuplifyUnion14686<Exclude<T, L>>, L>;

type DeepPartial14686<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14686<T[P]> }
  : T;

type Paths14686<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14686<K, Paths14686<T[K], Prev14686[D]>> : never }[keyof T]
  : never;

type Prev14686 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14686<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14686 {
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

type ConfigPaths14686 = Paths14686<NestedConfig14686>;

interface HeavyProps14686 {
  config: DeepPartial14686<NestedConfig14686>;
  path?: ConfigPaths14686;
}

const HeavyComponent14686 = memo(function HeavyComponent14686({ config }: HeavyProps14686) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14686) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14686 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14686: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14686.displayName = 'HeavyComponent14686';
export default HeavyComponent14686;
