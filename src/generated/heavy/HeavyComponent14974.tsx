'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14974<T> = T extends (infer U)[]
  ? DeepReadonlyArray14974<U>
  : T extends object
  ? DeepReadonlyObject14974<T>
  : T;

interface DeepReadonlyArray14974<T> extends ReadonlyArray<DeepReadonly14974<T>> {}

type DeepReadonlyObject14974<T> = {
  readonly [P in keyof T]: DeepReadonly14974<T[P]>;
};

type UnionToIntersection14974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14974<T> = UnionToIntersection14974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14974<T extends unknown[], V> = [...T, V];

type TuplifyUnion14974<T, L = LastOf14974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14974<TuplifyUnion14974<Exclude<T, L>>, L>;

type DeepPartial14974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14974<T[P]> }
  : T;

type Paths14974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14974<K, Paths14974<T[K], Prev14974[D]>> : never }[keyof T]
  : never;

type Prev14974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14974 {
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

type ConfigPaths14974 = Paths14974<NestedConfig14974>;

interface HeavyProps14974 {
  config: DeepPartial14974<NestedConfig14974>;
  path?: ConfigPaths14974;
}

const HeavyComponent14974 = memo(function HeavyComponent14974({ config }: HeavyProps14974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14974.displayName = 'HeavyComponent14974';
export default HeavyComponent14974;
