'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly320<T> = T extends (infer U)[]
  ? DeepReadonlyArray320<U>
  : T extends object
  ? DeepReadonlyObject320<T>
  : T;

interface DeepReadonlyArray320<T> extends ReadonlyArray<DeepReadonly320<T>> {}

type DeepReadonlyObject320<T> = {
  readonly [P in keyof T]: DeepReadonly320<T[P]>;
};

type UnionToIntersection320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf320<T> = UnionToIntersection320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push320<T extends unknown[], V> = [...T, V];

type TuplifyUnion320<T, L = LastOf320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push320<TuplifyUnion320<Exclude<T, L>>, L>;

type DeepPartial320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial320<T[P]> }
  : T;

type Paths320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join320<K, Paths320<T[K], Prev320[D]>> : never }[keyof T]
  : never;

type Prev320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig320 {
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

type ConfigPaths320 = Paths320<NestedConfig320>;

interface HeavyProps320 {
  config: DeepPartial320<NestedConfig320>;
  path?: ConfigPaths320;
}

const HeavyComponent320 = memo(function HeavyComponent320({ config }: HeavyProps320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent320.displayName = 'HeavyComponent320';
export default HeavyComponent320;
