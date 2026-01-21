'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly383<T> = T extends (infer U)[]
  ? DeepReadonlyArray383<U>
  : T extends object
  ? DeepReadonlyObject383<T>
  : T;

interface DeepReadonlyArray383<T> extends ReadonlyArray<DeepReadonly383<T>> {}

type DeepReadonlyObject383<T> = {
  readonly [P in keyof T]: DeepReadonly383<T[P]>;
};

type UnionToIntersection383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf383<T> = UnionToIntersection383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push383<T extends unknown[], V> = [...T, V];

type TuplifyUnion383<T, L = LastOf383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push383<TuplifyUnion383<Exclude<T, L>>, L>;

type DeepPartial383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial383<T[P]> }
  : T;

type Paths383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join383<K, Paths383<T[K], Prev383[D]>> : never }[keyof T]
  : never;

type Prev383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig383 {
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

type ConfigPaths383 = Paths383<NestedConfig383>;

interface HeavyProps383 {
  config: DeepPartial383<NestedConfig383>;
  path?: ConfigPaths383;
}

const HeavyComponent383 = memo(function HeavyComponent383({ config }: HeavyProps383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent383.displayName = 'HeavyComponent383';
export default HeavyComponent383;
