'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly986<T> = T extends (infer U)[]
  ? DeepReadonlyArray986<U>
  : T extends object
  ? DeepReadonlyObject986<T>
  : T;

interface DeepReadonlyArray986<T> extends ReadonlyArray<DeepReadonly986<T>> {}

type DeepReadonlyObject986<T> = {
  readonly [P in keyof T]: DeepReadonly986<T[P]>;
};

type UnionToIntersection986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf986<T> = UnionToIntersection986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push986<T extends unknown[], V> = [...T, V];

type TuplifyUnion986<T, L = LastOf986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push986<TuplifyUnion986<Exclude<T, L>>, L>;

type DeepPartial986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial986<T[P]> }
  : T;

type Paths986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join986<K, Paths986<T[K], Prev986[D]>> : never }[keyof T]
  : never;

type Prev986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig986 {
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

type ConfigPaths986 = Paths986<NestedConfig986>;

interface HeavyProps986 {
  config: DeepPartial986<NestedConfig986>;
  path?: ConfigPaths986;
}

const HeavyComponent986 = memo(function HeavyComponent986({ config }: HeavyProps986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent986.displayName = 'HeavyComponent986';
export default HeavyComponent986;
