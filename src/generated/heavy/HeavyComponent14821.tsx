'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14821<T> = T extends (infer U)[]
  ? DeepReadonlyArray14821<U>
  : T extends object
  ? DeepReadonlyObject14821<T>
  : T;

interface DeepReadonlyArray14821<T> extends ReadonlyArray<DeepReadonly14821<T>> {}

type DeepReadonlyObject14821<T> = {
  readonly [P in keyof T]: DeepReadonly14821<T[P]>;
};

type UnionToIntersection14821<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14821<T> = UnionToIntersection14821<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14821<T extends unknown[], V> = [...T, V];

type TuplifyUnion14821<T, L = LastOf14821<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14821<TuplifyUnion14821<Exclude<T, L>>, L>;

type DeepPartial14821<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14821<T[P]> }
  : T;

type Paths14821<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14821<K, Paths14821<T[K], Prev14821[D]>> : never }[keyof T]
  : never;

type Prev14821 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14821<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14821 {
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

type ConfigPaths14821 = Paths14821<NestedConfig14821>;

interface HeavyProps14821 {
  config: DeepPartial14821<NestedConfig14821>;
  path?: ConfigPaths14821;
}

const HeavyComponent14821 = memo(function HeavyComponent14821({ config }: HeavyProps14821) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14821) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14821 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14821: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14821.displayName = 'HeavyComponent14821';
export default HeavyComponent14821;
