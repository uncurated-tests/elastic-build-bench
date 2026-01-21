'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly351<T> = T extends (infer U)[]
  ? DeepReadonlyArray351<U>
  : T extends object
  ? DeepReadonlyObject351<T>
  : T;

interface DeepReadonlyArray351<T> extends ReadonlyArray<DeepReadonly351<T>> {}

type DeepReadonlyObject351<T> = {
  readonly [P in keyof T]: DeepReadonly351<T[P]>;
};

type UnionToIntersection351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf351<T> = UnionToIntersection351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push351<T extends unknown[], V> = [...T, V];

type TuplifyUnion351<T, L = LastOf351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push351<TuplifyUnion351<Exclude<T, L>>, L>;

type DeepPartial351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial351<T[P]> }
  : T;

type Paths351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join351<K, Paths351<T[K], Prev351[D]>> : never }[keyof T]
  : never;

type Prev351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig351 {
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

type ConfigPaths351 = Paths351<NestedConfig351>;

interface HeavyProps351 {
  config: DeepPartial351<NestedConfig351>;
  path?: ConfigPaths351;
}

const HeavyComponent351 = memo(function HeavyComponent351({ config }: HeavyProps351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent351.displayName = 'HeavyComponent351';
export default HeavyComponent351;
