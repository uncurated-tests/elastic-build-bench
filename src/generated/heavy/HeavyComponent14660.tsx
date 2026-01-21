'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14660<T> = T extends (infer U)[]
  ? DeepReadonlyArray14660<U>
  : T extends object
  ? DeepReadonlyObject14660<T>
  : T;

interface DeepReadonlyArray14660<T> extends ReadonlyArray<DeepReadonly14660<T>> {}

type DeepReadonlyObject14660<T> = {
  readonly [P in keyof T]: DeepReadonly14660<T[P]>;
};

type UnionToIntersection14660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14660<T> = UnionToIntersection14660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14660<T extends unknown[], V> = [...T, V];

type TuplifyUnion14660<T, L = LastOf14660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14660<TuplifyUnion14660<Exclude<T, L>>, L>;

type DeepPartial14660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14660<T[P]> }
  : T;

type Paths14660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14660<K, Paths14660<T[K], Prev14660[D]>> : never }[keyof T]
  : never;

type Prev14660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14660 {
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

type ConfigPaths14660 = Paths14660<NestedConfig14660>;

interface HeavyProps14660 {
  config: DeepPartial14660<NestedConfig14660>;
  path?: ConfigPaths14660;
}

const HeavyComponent14660 = memo(function HeavyComponent14660({ config }: HeavyProps14660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14660.displayName = 'HeavyComponent14660';
export default HeavyComponent14660;
