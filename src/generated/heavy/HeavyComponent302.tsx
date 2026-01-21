'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly302<T> = T extends (infer U)[]
  ? DeepReadonlyArray302<U>
  : T extends object
  ? DeepReadonlyObject302<T>
  : T;

interface DeepReadonlyArray302<T> extends ReadonlyArray<DeepReadonly302<T>> {}

type DeepReadonlyObject302<T> = {
  readonly [P in keyof T]: DeepReadonly302<T[P]>;
};

type UnionToIntersection302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf302<T> = UnionToIntersection302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push302<T extends unknown[], V> = [...T, V];

type TuplifyUnion302<T, L = LastOf302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push302<TuplifyUnion302<Exclude<T, L>>, L>;

type DeepPartial302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial302<T[P]> }
  : T;

type Paths302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join302<K, Paths302<T[K], Prev302[D]>> : never }[keyof T]
  : never;

type Prev302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig302 {
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

type ConfigPaths302 = Paths302<NestedConfig302>;

interface HeavyProps302 {
  config: DeepPartial302<NestedConfig302>;
  path?: ConfigPaths302;
}

const HeavyComponent302 = memo(function HeavyComponent302({ config }: HeavyProps302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent302.displayName = 'HeavyComponent302';
export default HeavyComponent302;
