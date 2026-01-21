'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6986<T> = T extends (infer U)[]
  ? DeepReadonlyArray6986<U>
  : T extends object
  ? DeepReadonlyObject6986<T>
  : T;

interface DeepReadonlyArray6986<T> extends ReadonlyArray<DeepReadonly6986<T>> {}

type DeepReadonlyObject6986<T> = {
  readonly [P in keyof T]: DeepReadonly6986<T[P]>;
};

type UnionToIntersection6986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6986<T> = UnionToIntersection6986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6986<T extends unknown[], V> = [...T, V];

type TuplifyUnion6986<T, L = LastOf6986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6986<TuplifyUnion6986<Exclude<T, L>>, L>;

type DeepPartial6986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6986<T[P]> }
  : T;

type Paths6986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6986<K, Paths6986<T[K], Prev6986[D]>> : never }[keyof T]
  : never;

type Prev6986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6986 {
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

type ConfigPaths6986 = Paths6986<NestedConfig6986>;

interface HeavyProps6986 {
  config: DeepPartial6986<NestedConfig6986>;
  path?: ConfigPaths6986;
}

const HeavyComponent6986 = memo(function HeavyComponent6986({ config }: HeavyProps6986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6986.displayName = 'HeavyComponent6986';
export default HeavyComponent6986;
