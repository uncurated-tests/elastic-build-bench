'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14649<T> = T extends (infer U)[]
  ? DeepReadonlyArray14649<U>
  : T extends object
  ? DeepReadonlyObject14649<T>
  : T;

interface DeepReadonlyArray14649<T> extends ReadonlyArray<DeepReadonly14649<T>> {}

type DeepReadonlyObject14649<T> = {
  readonly [P in keyof T]: DeepReadonly14649<T[P]>;
};

type UnionToIntersection14649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14649<T> = UnionToIntersection14649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14649<T extends unknown[], V> = [...T, V];

type TuplifyUnion14649<T, L = LastOf14649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14649<TuplifyUnion14649<Exclude<T, L>>, L>;

type DeepPartial14649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14649<T[P]> }
  : T;

type Paths14649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14649<K, Paths14649<T[K], Prev14649[D]>> : never }[keyof T]
  : never;

type Prev14649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14649 {
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

type ConfigPaths14649 = Paths14649<NestedConfig14649>;

interface HeavyProps14649 {
  config: DeepPartial14649<NestedConfig14649>;
  path?: ConfigPaths14649;
}

const HeavyComponent14649 = memo(function HeavyComponent14649({ config }: HeavyProps14649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14649.displayName = 'HeavyComponent14649';
export default HeavyComponent14649;
