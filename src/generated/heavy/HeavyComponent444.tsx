'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly444<T> = T extends (infer U)[]
  ? DeepReadonlyArray444<U>
  : T extends object
  ? DeepReadonlyObject444<T>
  : T;

interface DeepReadonlyArray444<T> extends ReadonlyArray<DeepReadonly444<T>> {}

type DeepReadonlyObject444<T> = {
  readonly [P in keyof T]: DeepReadonly444<T[P]>;
};

type UnionToIntersection444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf444<T> = UnionToIntersection444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push444<T extends unknown[], V> = [...T, V];

type TuplifyUnion444<T, L = LastOf444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push444<TuplifyUnion444<Exclude<T, L>>, L>;

type DeepPartial444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial444<T[P]> }
  : T;

type Paths444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join444<K, Paths444<T[K], Prev444[D]>> : never }[keyof T]
  : never;

type Prev444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig444 {
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

type ConfigPaths444 = Paths444<NestedConfig444>;

interface HeavyProps444 {
  config: DeepPartial444<NestedConfig444>;
  path?: ConfigPaths444;
}

const HeavyComponent444 = memo(function HeavyComponent444({ config }: HeavyProps444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent444.displayName = 'HeavyComponent444';
export default HeavyComponent444;
