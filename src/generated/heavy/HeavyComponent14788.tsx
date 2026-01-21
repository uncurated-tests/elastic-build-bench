'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14788<T> = T extends (infer U)[]
  ? DeepReadonlyArray14788<U>
  : T extends object
  ? DeepReadonlyObject14788<T>
  : T;

interface DeepReadonlyArray14788<T> extends ReadonlyArray<DeepReadonly14788<T>> {}

type DeepReadonlyObject14788<T> = {
  readonly [P in keyof T]: DeepReadonly14788<T[P]>;
};

type UnionToIntersection14788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14788<T> = UnionToIntersection14788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14788<T extends unknown[], V> = [...T, V];

type TuplifyUnion14788<T, L = LastOf14788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14788<TuplifyUnion14788<Exclude<T, L>>, L>;

type DeepPartial14788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14788<T[P]> }
  : T;

type Paths14788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14788<K, Paths14788<T[K], Prev14788[D]>> : never }[keyof T]
  : never;

type Prev14788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14788 {
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

type ConfigPaths14788 = Paths14788<NestedConfig14788>;

interface HeavyProps14788 {
  config: DeepPartial14788<NestedConfig14788>;
  path?: ConfigPaths14788;
}

const HeavyComponent14788 = memo(function HeavyComponent14788({ config }: HeavyProps14788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14788.displayName = 'HeavyComponent14788';
export default HeavyComponent14788;
