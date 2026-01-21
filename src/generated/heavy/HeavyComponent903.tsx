'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly903<T> = T extends (infer U)[]
  ? DeepReadonlyArray903<U>
  : T extends object
  ? DeepReadonlyObject903<T>
  : T;

interface DeepReadonlyArray903<T> extends ReadonlyArray<DeepReadonly903<T>> {}

type DeepReadonlyObject903<T> = {
  readonly [P in keyof T]: DeepReadonly903<T[P]>;
};

type UnionToIntersection903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf903<T> = UnionToIntersection903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push903<T extends unknown[], V> = [...T, V];

type TuplifyUnion903<T, L = LastOf903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push903<TuplifyUnion903<Exclude<T, L>>, L>;

type DeepPartial903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial903<T[P]> }
  : T;

type Paths903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join903<K, Paths903<T[K], Prev903[D]>> : never }[keyof T]
  : never;

type Prev903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig903 {
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

type ConfigPaths903 = Paths903<NestedConfig903>;

interface HeavyProps903 {
  config: DeepPartial903<NestedConfig903>;
  path?: ConfigPaths903;
}

const HeavyComponent903 = memo(function HeavyComponent903({ config }: HeavyProps903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent903.displayName = 'HeavyComponent903';
export default HeavyComponent903;
