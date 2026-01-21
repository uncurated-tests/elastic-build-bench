'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14248<T> = T extends (infer U)[]
  ? DeepReadonlyArray14248<U>
  : T extends object
  ? DeepReadonlyObject14248<T>
  : T;

interface DeepReadonlyArray14248<T> extends ReadonlyArray<DeepReadonly14248<T>> {}

type DeepReadonlyObject14248<T> = {
  readonly [P in keyof T]: DeepReadonly14248<T[P]>;
};

type UnionToIntersection14248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14248<T> = UnionToIntersection14248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14248<T extends unknown[], V> = [...T, V];

type TuplifyUnion14248<T, L = LastOf14248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14248<TuplifyUnion14248<Exclude<T, L>>, L>;

type DeepPartial14248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14248<T[P]> }
  : T;

type Paths14248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14248<K, Paths14248<T[K], Prev14248[D]>> : never }[keyof T]
  : never;

type Prev14248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14248 {
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

type ConfigPaths14248 = Paths14248<NestedConfig14248>;

interface HeavyProps14248 {
  config: DeepPartial14248<NestedConfig14248>;
  path?: ConfigPaths14248;
}

const HeavyComponent14248 = memo(function HeavyComponent14248({ config }: HeavyProps14248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14248.displayName = 'HeavyComponent14248';
export default HeavyComponent14248;
