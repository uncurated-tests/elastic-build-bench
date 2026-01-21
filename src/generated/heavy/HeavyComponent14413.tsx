'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14413<T> = T extends (infer U)[]
  ? DeepReadonlyArray14413<U>
  : T extends object
  ? DeepReadonlyObject14413<T>
  : T;

interface DeepReadonlyArray14413<T> extends ReadonlyArray<DeepReadonly14413<T>> {}

type DeepReadonlyObject14413<T> = {
  readonly [P in keyof T]: DeepReadonly14413<T[P]>;
};

type UnionToIntersection14413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14413<T> = UnionToIntersection14413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14413<T extends unknown[], V> = [...T, V];

type TuplifyUnion14413<T, L = LastOf14413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14413<TuplifyUnion14413<Exclude<T, L>>, L>;

type DeepPartial14413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14413<T[P]> }
  : T;

type Paths14413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14413<K, Paths14413<T[K], Prev14413[D]>> : never }[keyof T]
  : never;

type Prev14413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14413 {
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

type ConfigPaths14413 = Paths14413<NestedConfig14413>;

interface HeavyProps14413 {
  config: DeepPartial14413<NestedConfig14413>;
  path?: ConfigPaths14413;
}

const HeavyComponent14413 = memo(function HeavyComponent14413({ config }: HeavyProps14413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14413.displayName = 'HeavyComponent14413';
export default HeavyComponent14413;
