'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14796<T> = T extends (infer U)[]
  ? DeepReadonlyArray14796<U>
  : T extends object
  ? DeepReadonlyObject14796<T>
  : T;

interface DeepReadonlyArray14796<T> extends ReadonlyArray<DeepReadonly14796<T>> {}

type DeepReadonlyObject14796<T> = {
  readonly [P in keyof T]: DeepReadonly14796<T[P]>;
};

type UnionToIntersection14796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14796<T> = UnionToIntersection14796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14796<T extends unknown[], V> = [...T, V];

type TuplifyUnion14796<T, L = LastOf14796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14796<TuplifyUnion14796<Exclude<T, L>>, L>;

type DeepPartial14796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14796<T[P]> }
  : T;

type Paths14796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14796<K, Paths14796<T[K], Prev14796[D]>> : never }[keyof T]
  : never;

type Prev14796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14796 {
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

type ConfigPaths14796 = Paths14796<NestedConfig14796>;

interface HeavyProps14796 {
  config: DeepPartial14796<NestedConfig14796>;
  path?: ConfigPaths14796;
}

const HeavyComponent14796 = memo(function HeavyComponent14796({ config }: HeavyProps14796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14796.displayName = 'HeavyComponent14796';
export default HeavyComponent14796;
