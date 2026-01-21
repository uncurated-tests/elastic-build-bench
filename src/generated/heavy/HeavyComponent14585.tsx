'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14585<T> = T extends (infer U)[]
  ? DeepReadonlyArray14585<U>
  : T extends object
  ? DeepReadonlyObject14585<T>
  : T;

interface DeepReadonlyArray14585<T> extends ReadonlyArray<DeepReadonly14585<T>> {}

type DeepReadonlyObject14585<T> = {
  readonly [P in keyof T]: DeepReadonly14585<T[P]>;
};

type UnionToIntersection14585<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14585<T> = UnionToIntersection14585<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14585<T extends unknown[], V> = [...T, V];

type TuplifyUnion14585<T, L = LastOf14585<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14585<TuplifyUnion14585<Exclude<T, L>>, L>;

type DeepPartial14585<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14585<T[P]> }
  : T;

type Paths14585<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14585<K, Paths14585<T[K], Prev14585[D]>> : never }[keyof T]
  : never;

type Prev14585 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14585<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14585 {
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

type ConfigPaths14585 = Paths14585<NestedConfig14585>;

interface HeavyProps14585 {
  config: DeepPartial14585<NestedConfig14585>;
  path?: ConfigPaths14585;
}

const HeavyComponent14585 = memo(function HeavyComponent14585({ config }: HeavyProps14585) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14585) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14585 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14585: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14585.displayName = 'HeavyComponent14585';
export default HeavyComponent14585;
