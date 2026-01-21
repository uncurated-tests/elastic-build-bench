'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14601<T> = T extends (infer U)[]
  ? DeepReadonlyArray14601<U>
  : T extends object
  ? DeepReadonlyObject14601<T>
  : T;

interface DeepReadonlyArray14601<T> extends ReadonlyArray<DeepReadonly14601<T>> {}

type DeepReadonlyObject14601<T> = {
  readonly [P in keyof T]: DeepReadonly14601<T[P]>;
};

type UnionToIntersection14601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14601<T> = UnionToIntersection14601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14601<T extends unknown[], V> = [...T, V];

type TuplifyUnion14601<T, L = LastOf14601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14601<TuplifyUnion14601<Exclude<T, L>>, L>;

type DeepPartial14601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14601<T[P]> }
  : T;

type Paths14601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14601<K, Paths14601<T[K], Prev14601[D]>> : never }[keyof T]
  : never;

type Prev14601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14601 {
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

type ConfigPaths14601 = Paths14601<NestedConfig14601>;

interface HeavyProps14601 {
  config: DeepPartial14601<NestedConfig14601>;
  path?: ConfigPaths14601;
}

const HeavyComponent14601 = memo(function HeavyComponent14601({ config }: HeavyProps14601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14601.displayName = 'HeavyComponent14601';
export default HeavyComponent14601;
