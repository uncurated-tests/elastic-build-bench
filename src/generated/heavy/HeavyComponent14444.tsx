'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14444<T> = T extends (infer U)[]
  ? DeepReadonlyArray14444<U>
  : T extends object
  ? DeepReadonlyObject14444<T>
  : T;

interface DeepReadonlyArray14444<T> extends ReadonlyArray<DeepReadonly14444<T>> {}

type DeepReadonlyObject14444<T> = {
  readonly [P in keyof T]: DeepReadonly14444<T[P]>;
};

type UnionToIntersection14444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14444<T> = UnionToIntersection14444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14444<T extends unknown[], V> = [...T, V];

type TuplifyUnion14444<T, L = LastOf14444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14444<TuplifyUnion14444<Exclude<T, L>>, L>;

type DeepPartial14444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14444<T[P]> }
  : T;

type Paths14444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14444<K, Paths14444<T[K], Prev14444[D]>> : never }[keyof T]
  : never;

type Prev14444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14444 {
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

type ConfigPaths14444 = Paths14444<NestedConfig14444>;

interface HeavyProps14444 {
  config: DeepPartial14444<NestedConfig14444>;
  path?: ConfigPaths14444;
}

const HeavyComponent14444 = memo(function HeavyComponent14444({ config }: HeavyProps14444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14444.displayName = 'HeavyComponent14444';
export default HeavyComponent14444;
