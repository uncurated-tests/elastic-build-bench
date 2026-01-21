'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14825<T> = T extends (infer U)[]
  ? DeepReadonlyArray14825<U>
  : T extends object
  ? DeepReadonlyObject14825<T>
  : T;

interface DeepReadonlyArray14825<T> extends ReadonlyArray<DeepReadonly14825<T>> {}

type DeepReadonlyObject14825<T> = {
  readonly [P in keyof T]: DeepReadonly14825<T[P]>;
};

type UnionToIntersection14825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14825<T> = UnionToIntersection14825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14825<T extends unknown[], V> = [...T, V];

type TuplifyUnion14825<T, L = LastOf14825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14825<TuplifyUnion14825<Exclude<T, L>>, L>;

type DeepPartial14825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14825<T[P]> }
  : T;

type Paths14825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14825<K, Paths14825<T[K], Prev14825[D]>> : never }[keyof T]
  : never;

type Prev14825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14825 {
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

type ConfigPaths14825 = Paths14825<NestedConfig14825>;

interface HeavyProps14825 {
  config: DeepPartial14825<NestedConfig14825>;
  path?: ConfigPaths14825;
}

const HeavyComponent14825 = memo(function HeavyComponent14825({ config }: HeavyProps14825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14825.displayName = 'HeavyComponent14825';
export default HeavyComponent14825;
