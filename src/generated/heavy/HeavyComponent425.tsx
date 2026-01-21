'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly425<T> = T extends (infer U)[]
  ? DeepReadonlyArray425<U>
  : T extends object
  ? DeepReadonlyObject425<T>
  : T;

interface DeepReadonlyArray425<T> extends ReadonlyArray<DeepReadonly425<T>> {}

type DeepReadonlyObject425<T> = {
  readonly [P in keyof T]: DeepReadonly425<T[P]>;
};

type UnionToIntersection425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf425<T> = UnionToIntersection425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push425<T extends unknown[], V> = [...T, V];

type TuplifyUnion425<T, L = LastOf425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push425<TuplifyUnion425<Exclude<T, L>>, L>;

type DeepPartial425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial425<T[P]> }
  : T;

type Paths425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join425<K, Paths425<T[K], Prev425[D]>> : never }[keyof T]
  : never;

type Prev425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig425 {
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

type ConfigPaths425 = Paths425<NestedConfig425>;

interface HeavyProps425 {
  config: DeepPartial425<NestedConfig425>;
  path?: ConfigPaths425;
}

const HeavyComponent425 = memo(function HeavyComponent425({ config }: HeavyProps425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent425.displayName = 'HeavyComponent425';
export default HeavyComponent425;
