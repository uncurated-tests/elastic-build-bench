'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14884<T> = T extends (infer U)[]
  ? DeepReadonlyArray14884<U>
  : T extends object
  ? DeepReadonlyObject14884<T>
  : T;

interface DeepReadonlyArray14884<T> extends ReadonlyArray<DeepReadonly14884<T>> {}

type DeepReadonlyObject14884<T> = {
  readonly [P in keyof T]: DeepReadonly14884<T[P]>;
};

type UnionToIntersection14884<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14884<T> = UnionToIntersection14884<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14884<T extends unknown[], V> = [...T, V];

type TuplifyUnion14884<T, L = LastOf14884<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14884<TuplifyUnion14884<Exclude<T, L>>, L>;

type DeepPartial14884<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14884<T[P]> }
  : T;

type Paths14884<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14884<K, Paths14884<T[K], Prev14884[D]>> : never }[keyof T]
  : never;

type Prev14884 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14884<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14884 {
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

type ConfigPaths14884 = Paths14884<NestedConfig14884>;

interface HeavyProps14884 {
  config: DeepPartial14884<NestedConfig14884>;
  path?: ConfigPaths14884;
}

const HeavyComponent14884 = memo(function HeavyComponent14884({ config }: HeavyProps14884) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14884) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14884 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14884: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14884.displayName = 'HeavyComponent14884';
export default HeavyComponent14884;
