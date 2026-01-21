'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14323<T> = T extends (infer U)[]
  ? DeepReadonlyArray14323<U>
  : T extends object
  ? DeepReadonlyObject14323<T>
  : T;

interface DeepReadonlyArray14323<T> extends ReadonlyArray<DeepReadonly14323<T>> {}

type DeepReadonlyObject14323<T> = {
  readonly [P in keyof T]: DeepReadonly14323<T[P]>;
};

type UnionToIntersection14323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14323<T> = UnionToIntersection14323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14323<T extends unknown[], V> = [...T, V];

type TuplifyUnion14323<T, L = LastOf14323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14323<TuplifyUnion14323<Exclude<T, L>>, L>;

type DeepPartial14323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14323<T[P]> }
  : T;

type Paths14323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14323<K, Paths14323<T[K], Prev14323[D]>> : never }[keyof T]
  : never;

type Prev14323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14323 {
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

type ConfigPaths14323 = Paths14323<NestedConfig14323>;

interface HeavyProps14323 {
  config: DeepPartial14323<NestedConfig14323>;
  path?: ConfigPaths14323;
}

const HeavyComponent14323 = memo(function HeavyComponent14323({ config }: HeavyProps14323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14323.displayName = 'HeavyComponent14323';
export default HeavyComponent14323;
