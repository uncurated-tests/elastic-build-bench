'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14777<T> = T extends (infer U)[]
  ? DeepReadonlyArray14777<U>
  : T extends object
  ? DeepReadonlyObject14777<T>
  : T;

interface DeepReadonlyArray14777<T> extends ReadonlyArray<DeepReadonly14777<T>> {}

type DeepReadonlyObject14777<T> = {
  readonly [P in keyof T]: DeepReadonly14777<T[P]>;
};

type UnionToIntersection14777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14777<T> = UnionToIntersection14777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14777<T extends unknown[], V> = [...T, V];

type TuplifyUnion14777<T, L = LastOf14777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14777<TuplifyUnion14777<Exclude<T, L>>, L>;

type DeepPartial14777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14777<T[P]> }
  : T;

type Paths14777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14777<K, Paths14777<T[K], Prev14777[D]>> : never }[keyof T]
  : never;

type Prev14777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14777 {
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

type ConfigPaths14777 = Paths14777<NestedConfig14777>;

interface HeavyProps14777 {
  config: DeepPartial14777<NestedConfig14777>;
  path?: ConfigPaths14777;
}

const HeavyComponent14777 = memo(function HeavyComponent14777({ config }: HeavyProps14777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14777.displayName = 'HeavyComponent14777';
export default HeavyComponent14777;
