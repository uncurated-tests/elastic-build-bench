'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14655<T> = T extends (infer U)[]
  ? DeepReadonlyArray14655<U>
  : T extends object
  ? DeepReadonlyObject14655<T>
  : T;

interface DeepReadonlyArray14655<T> extends ReadonlyArray<DeepReadonly14655<T>> {}

type DeepReadonlyObject14655<T> = {
  readonly [P in keyof T]: DeepReadonly14655<T[P]>;
};

type UnionToIntersection14655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14655<T> = UnionToIntersection14655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14655<T extends unknown[], V> = [...T, V];

type TuplifyUnion14655<T, L = LastOf14655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14655<TuplifyUnion14655<Exclude<T, L>>, L>;

type DeepPartial14655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14655<T[P]> }
  : T;

type Paths14655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14655<K, Paths14655<T[K], Prev14655[D]>> : never }[keyof T]
  : never;

type Prev14655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14655 {
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

type ConfigPaths14655 = Paths14655<NestedConfig14655>;

interface HeavyProps14655 {
  config: DeepPartial14655<NestedConfig14655>;
  path?: ConfigPaths14655;
}

const HeavyComponent14655 = memo(function HeavyComponent14655({ config }: HeavyProps14655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14655.displayName = 'HeavyComponent14655';
export default HeavyComponent14655;
