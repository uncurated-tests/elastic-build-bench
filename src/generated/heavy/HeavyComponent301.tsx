'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly301<T> = T extends (infer U)[]
  ? DeepReadonlyArray301<U>
  : T extends object
  ? DeepReadonlyObject301<T>
  : T;

interface DeepReadonlyArray301<T> extends ReadonlyArray<DeepReadonly301<T>> {}

type DeepReadonlyObject301<T> = {
  readonly [P in keyof T]: DeepReadonly301<T[P]>;
};

type UnionToIntersection301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf301<T> = UnionToIntersection301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push301<T extends unknown[], V> = [...T, V];

type TuplifyUnion301<T, L = LastOf301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push301<TuplifyUnion301<Exclude<T, L>>, L>;

type DeepPartial301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial301<T[P]> }
  : T;

type Paths301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join301<K, Paths301<T[K], Prev301[D]>> : never }[keyof T]
  : never;

type Prev301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig301 {
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

type ConfigPaths301 = Paths301<NestedConfig301>;

interface HeavyProps301 {
  config: DeepPartial301<NestedConfig301>;
  path?: ConfigPaths301;
}

const HeavyComponent301 = memo(function HeavyComponent301({ config }: HeavyProps301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent301.displayName = 'HeavyComponent301';
export default HeavyComponent301;
