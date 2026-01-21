'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14640<T> = T extends (infer U)[]
  ? DeepReadonlyArray14640<U>
  : T extends object
  ? DeepReadonlyObject14640<T>
  : T;

interface DeepReadonlyArray14640<T> extends ReadonlyArray<DeepReadonly14640<T>> {}

type DeepReadonlyObject14640<T> = {
  readonly [P in keyof T]: DeepReadonly14640<T[P]>;
};

type UnionToIntersection14640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14640<T> = UnionToIntersection14640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14640<T extends unknown[], V> = [...T, V];

type TuplifyUnion14640<T, L = LastOf14640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14640<TuplifyUnion14640<Exclude<T, L>>, L>;

type DeepPartial14640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14640<T[P]> }
  : T;

type Paths14640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14640<K, Paths14640<T[K], Prev14640[D]>> : never }[keyof T]
  : never;

type Prev14640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14640 {
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

type ConfigPaths14640 = Paths14640<NestedConfig14640>;

interface HeavyProps14640 {
  config: DeepPartial14640<NestedConfig14640>;
  path?: ConfigPaths14640;
}

const HeavyComponent14640 = memo(function HeavyComponent14640({ config }: HeavyProps14640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14640.displayName = 'HeavyComponent14640';
export default HeavyComponent14640;
