'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly262<T> = T extends (infer U)[]
  ? DeepReadonlyArray262<U>
  : T extends object
  ? DeepReadonlyObject262<T>
  : T;

interface DeepReadonlyArray262<T> extends ReadonlyArray<DeepReadonly262<T>> {}

type DeepReadonlyObject262<T> = {
  readonly [P in keyof T]: DeepReadonly262<T[P]>;
};

type UnionToIntersection262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf262<T> = UnionToIntersection262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push262<T extends unknown[], V> = [...T, V];

type TuplifyUnion262<T, L = LastOf262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push262<TuplifyUnion262<Exclude<T, L>>, L>;

type DeepPartial262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial262<T[P]> }
  : T;

type Paths262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join262<K, Paths262<T[K], Prev262[D]>> : never }[keyof T]
  : never;

type Prev262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig262 {
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

type ConfigPaths262 = Paths262<NestedConfig262>;

interface HeavyProps262 {
  config: DeepPartial262<NestedConfig262>;
  path?: ConfigPaths262;
}

const HeavyComponent262 = memo(function HeavyComponent262({ config }: HeavyProps262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent262.displayName = 'HeavyComponent262';
export default HeavyComponent262;
