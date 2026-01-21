'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14918<T> = T extends (infer U)[]
  ? DeepReadonlyArray14918<U>
  : T extends object
  ? DeepReadonlyObject14918<T>
  : T;

interface DeepReadonlyArray14918<T> extends ReadonlyArray<DeepReadonly14918<T>> {}

type DeepReadonlyObject14918<T> = {
  readonly [P in keyof T]: DeepReadonly14918<T[P]>;
};

type UnionToIntersection14918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14918<T> = UnionToIntersection14918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14918<T extends unknown[], V> = [...T, V];

type TuplifyUnion14918<T, L = LastOf14918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14918<TuplifyUnion14918<Exclude<T, L>>, L>;

type DeepPartial14918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14918<T[P]> }
  : T;

type Paths14918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14918<K, Paths14918<T[K], Prev14918[D]>> : never }[keyof T]
  : never;

type Prev14918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14918 {
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

type ConfigPaths14918 = Paths14918<NestedConfig14918>;

interface HeavyProps14918 {
  config: DeepPartial14918<NestedConfig14918>;
  path?: ConfigPaths14918;
}

const HeavyComponent14918 = memo(function HeavyComponent14918({ config }: HeavyProps14918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14918.displayName = 'HeavyComponent14918';
export default HeavyComponent14918;
