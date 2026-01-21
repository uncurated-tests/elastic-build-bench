'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14104<T> = T extends (infer U)[]
  ? DeepReadonlyArray14104<U>
  : T extends object
  ? DeepReadonlyObject14104<T>
  : T;

interface DeepReadonlyArray14104<T> extends ReadonlyArray<DeepReadonly14104<T>> {}

type DeepReadonlyObject14104<T> = {
  readonly [P in keyof T]: DeepReadonly14104<T[P]>;
};

type UnionToIntersection14104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14104<T> = UnionToIntersection14104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14104<T extends unknown[], V> = [...T, V];

type TuplifyUnion14104<T, L = LastOf14104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14104<TuplifyUnion14104<Exclude<T, L>>, L>;

type DeepPartial14104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14104<T[P]> }
  : T;

type Paths14104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14104<K, Paths14104<T[K], Prev14104[D]>> : never }[keyof T]
  : never;

type Prev14104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14104 {
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

type ConfigPaths14104 = Paths14104<NestedConfig14104>;

interface HeavyProps14104 {
  config: DeepPartial14104<NestedConfig14104>;
  path?: ConfigPaths14104;
}

const HeavyComponent14104 = memo(function HeavyComponent14104({ config }: HeavyProps14104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14104.displayName = 'HeavyComponent14104';
export default HeavyComponent14104;
