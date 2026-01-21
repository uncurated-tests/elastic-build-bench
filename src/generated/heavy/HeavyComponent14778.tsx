'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14778<T> = T extends (infer U)[]
  ? DeepReadonlyArray14778<U>
  : T extends object
  ? DeepReadonlyObject14778<T>
  : T;

interface DeepReadonlyArray14778<T> extends ReadonlyArray<DeepReadonly14778<T>> {}

type DeepReadonlyObject14778<T> = {
  readonly [P in keyof T]: DeepReadonly14778<T[P]>;
};

type UnionToIntersection14778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14778<T> = UnionToIntersection14778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14778<T extends unknown[], V> = [...T, V];

type TuplifyUnion14778<T, L = LastOf14778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14778<TuplifyUnion14778<Exclude<T, L>>, L>;

type DeepPartial14778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14778<T[P]> }
  : T;

type Paths14778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14778<K, Paths14778<T[K], Prev14778[D]>> : never }[keyof T]
  : never;

type Prev14778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14778 {
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

type ConfigPaths14778 = Paths14778<NestedConfig14778>;

interface HeavyProps14778 {
  config: DeepPartial14778<NestedConfig14778>;
  path?: ConfigPaths14778;
}

const HeavyComponent14778 = memo(function HeavyComponent14778({ config }: HeavyProps14778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14778.displayName = 'HeavyComponent14778';
export default HeavyComponent14778;
